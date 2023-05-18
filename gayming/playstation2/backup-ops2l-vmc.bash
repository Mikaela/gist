#!/usr/bin/env bash
# This is just a simple script to backup VMCs in case something goes wrong
set -x

VMCDIR=~/PS2/VMC
BACKUPDIR=~/PS2-VMC-backups

mkdir -p $BACKUPDIR
# E.g. 2023-075TT171900, I don't think change of month matters and these are
# going to be small 8MB files anyway so seeing the age at glance is nice.
# WARNING: This doesn't handle DST switch although I don't expect to be
# playing or running this script during the problem hours
cp -arv "$VMCDIR" "$BACKUPDIR/$(date +%Y-%jT%H%M%S)"

# Samba is fun with permissions
chmod -R 777 $VMCDIR/..
chmod -R 777 $VMCDIR
chmod -R 777 $BACKUPDIR

# If duperemove is installed, perform FS based deduplication of backups
if hash duperemove 2>/dev/null; then
        # recursive, dedupe, human-readable, hashfile is like ddrescue mapfile
        duperemove -rdh --hashfile=$BACKUPDIR/duperemove.hashfile $BACKUPDIR/
fi

# Curiosity, show the space used
du -hcs --time $BACKUPDIR
df -h $BACKUPDIR

# When the script finished?
date "+%Y-%jT%H%M%S"

set +x

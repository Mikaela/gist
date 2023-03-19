#!/usr/bin/env bash
# This is just a simple script to backup VMCs in case something goes wrong
set -x

VMCDIR=~/PS2/VMC
BACKUPDIR=~/PS2-VMC-backups

mkdir -p $BACKUPDIR
# E.g. 2023-075TT1719, I don't think change of month matters and these are
# going to be small 8MB files anyway so seeing the age at glance is nice.
# WARNING: This doesn't handle DST switch although I don't expect to be
# playing or running this script during the problem hours
cp -arv "$VMCDIR" "$BACKUPDIR/$(date +%Y-%jT%H%M)"

# Samba is fun with permissions
chmod -R 777 $VMCDIR
chmod -R 777 $BACKUPDIR

# Curiosity, show the space used
du -hc --time $BACKUPDIR

set +x

#!/usr/bin/env bash
set -x
CHTDIR=~/PS2/CHT

mkdir -p $CHTDIR

for chtfile in *.cht; do
    cat $chtfile > $CHTDIR/$chtfile
done

chmod -R 777 $CHTDIR

set +x

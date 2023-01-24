#!/usr/bin/env bash
# Turn vcards into QR codes

# loop through all vcard files
for vcard in *.vcard; do 
    if [ -f "$vcard" ]; then 
        # -l H - high error correction
        # -t utf8 - output to terminal
        # -r - read file
        # -o output file
        qrencode -l H -t utf8 -r $vcard
        qrencode -l H -o $vcard.png -r $vcard
    fi 
done

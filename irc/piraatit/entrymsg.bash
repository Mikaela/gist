#!/usr/bin/env bash
# Based on https://stackoverflow.com/a/8880633

# Purpose: mass setting entrymsgs

# Finnish speaking channels
declare -a arr=("#aaltopiraatit" "#akateemisetpiraatit" "#aktiivit" "#antikupla" "#grafiikka" "#hallituskokous" "#hame" "#helsinki" "#hepihalko" "#kaakko" "#keski-suomi" "#likakaivo" "#mediaseuranta" "#messi" "#Mikaela" "#pinu" "#pinu-hallitus" "#pinuhalko" "#pinu_hallitus" "#piraatit" "#piraattinuoret" "#piraattipuolue" "#piraattivpn" "#pirkanmaa" "#politiikka"  "#ppfi-chanacs-abuse" "#puoluehallitus" "#puoluekokous" "#puoluetoimisto" "#purje" "#satakunta" "#sateenkaaripiraatit" "#savo-karjala" "#sivusto" "#syotteet" "#test" "#toiminta" "#tulevaisuus" "#uusimaa" "#vaaliteltta" "#vaasa" "#varainhankinta" "#varsinais-suomi" "#verkkopalvelut")

for i in "${arr[@]}"
do
   echo "/msg ChanServ set $i ENTRYMSG Lähettämällä viestin kanavalle suostut nimimerkkisi ja viestisi julkaisemiseen, sekä Telegrammiin ja Discordiin lähettämiseksi. Se tieto on https://telegram.org/privacy ja https://discordapp.com/privacy alaista sieltäen liittyvät datan tallennuskäytännöt."
done

# English speaking channels
declare -a arr=("#ppfi" "#ypfi")

for i in "${arr[@]}"
do
   echo "/msg ChanServ set $i ENTRYMSG By sending messages to this channel you consent to your nick and message being published and transmitted to Telegram and Discord. That information is subject to https://telegram.org/privacy and https://discordapp.com/privacy including relevant data retention policies."
done

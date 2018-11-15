#!/usr/bin/env bash
# Based on https://stackoverflow.com/a/8880633

# Purpose: mass setting entrymsgs

# Finnish speaking channels
declare -a arr=("#aaltopiraatit" "#akateemisetpiraatit" "#aktiivit" "#antikupla" "#grafiikka" "#hallituskokous" "#hame" "#helsinki" "#hepihalko" "#kaakko" "#keski-suomi" "#likakaivo" "#mediaseuranta" "#messi" "#Mikaela" "#pinu" "#pinu-hallitus" "#pinuhalko" "#pinu_hallitus" "#piraatit" "#piraattinuoret" "#piraattipuolue" "#piraattivpn" "#pirkanmaa" "#politiikka"  "#ppfi-chanacs-abuse" "#puoluehallitus" "#puoluekokous" "#puoluetoimisto" "#purje" "#satakunta" "#sateenkaaripiraatit" "#savo-karjala" "#sivusto" "#syotteet" "#test" "#toiminta" "#tulevaisuus" "#uusimaa" "#vaaliteltta" "#vaasa" "#varainhankinta" "#varsinais-suomi" "#verkkopalvelut")

for i in "${arr[@]}"
do
   echo "/msg ChanServ set $i KEEPTOPIC ON"
done

# English speaking channels
declare -a arr=("#ppfi" "#ypfi")

for i in "${arr[@]}"
do
   echo "/msg ChanServ set $i KEEPTOPIC ON"
done

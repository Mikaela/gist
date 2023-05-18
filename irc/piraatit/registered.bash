#!/usr/bin/env bash
# Copied from https://stackoverflow.com/a/8880633 except the nicks

## declare an array variable
declare -a arr=("#aaltopiraatit" "#grafiikka" "#hame" "#helsinki" "#hepihalko" "#kaakko" "#keski-suomi" "#mediaseuranta" "#pinu_hallitus" "#piraatit" "#piraattinuoret" "#piraattipuolue" "#piraattivpn" "#pirkanmaa" "#ppfi" "#sateenkaaripiraatit" "#sivusto" "#toiminta" "#tyoryhmaorganisaatiomalli" "#uusimaa" "#vaaliteltta" "#varainhankinta" "#varsinais-suomi" "#verkkopalvelut" "#mikaela")

## now loop through the above array
for i in "${arr[@]}"; do
        echo "/msg ChanServ flags $i \$registered +VA"
        # or do whatever with individual element of the array
done

## now loop through the above array
for i in "${arr[@]}"; do
        echo "/msg ChanServ flags $i *!*@gateway/bridge/matrix/diasp.in +VA"
        # or do whatever with individual element of the array
done

# You can access them using echo "${arr[0]}", "${arr[1]}" also

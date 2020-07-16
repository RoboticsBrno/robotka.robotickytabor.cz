---
title: LED pásek
layout: coding
---

# {{ page.title | escape }}

#### Rozsícení LED pásku
Pro LED pásek není možné použít funkce, které byly popsány pro LEDky v předchozí kapitole. Pro práci s LED páskem (chytré LEDky) je možné využít tyto funkce:  
- `rkSmartLedsHSV` - Nastavení barvy pomocí HSW (`H`-odstín, `S`-sytost barvy ,`V`-jas)
- `rkSmartLedsRGB` - Nastavení barvy pomocí RGB (`R`-červená, `G`-zelená ,`B`-modrá)
Rozdíl mezi těmito funkcemi je v přístupu k nastavení jednotlivých barev. Zatím co `RGB` využívá kombinování červené, zelené a modré, tak `HSV` využívá kombinaci odstínu, sytosti a jasu. Obě tyto funkce, očekávají jako první parametr číslo LED na pásku. Na pásku je celkem 8 LEDek, takže první LEDka (která je nejblíže pinům) má číslo 0 a LEDka na druhé straně pásku má logicky hodnotu 7. Obě funkce následně očekávají ještě další 3 parametry, podle metody, kterou nastavují barvu: `rkSmartLedsHSV` očekává celočíselné hodnoty odstín, sytost barvy a jas, které jsou od hodnoty 0 do 255. Funkce `rkSmartLedsRGB` očekává hodnoty zastoupení červené zelené a modré barvy, opět od 0 do 255.

Pro `rkSmartLedsHSV` je možné jednotlivé hodnoty barev nalézt <a href="https://alloyui.com/examples/color-picker/hsv.html">zde</a>.
Pro `rkSmartLedsRGB` je možné jednotlivé hodnoty barev nalézt <a href="https://htmlcolorcodes.com/">zde</a>.

Rozsvícení celého pásku červeně pomocí `RGB`:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int cervena = 255;
    int zelena = 0;
    int modra = 0;

    for(int cislo_led = 0; cislo_led < 8; cislo_led++){
        rkSmartLedsRGB(cislo_led, cervena, zelena, modra); // nastav barvu na cervenou 
    }
    
}
```

Stejně pomocí `HSV`:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int odstin = 0;
    int sytost = 100;
    int jas = 100;

    for(int cislo_led = 0; cislo_led < 8; cislo_led++){
        rkSmartLedsHSV(cislo_led, odstin, sytost, jas); // nastav barvu na cervenou 
    }
    
}
```

Projizdeni jednoho modrého pixelu z jedné strany na druhou:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int cervena = 0;
    int zelena = 0;
    int modra = 255;

    while(true){
        for(int cislo_led = 0; cislo_led < 8; cislo_led++){
            // nastav barvu na modrou pomocí RGB 
            rkSmartLedsRGB(cislo_led, cervena, zelena, modra);
            if( cislo_led > 0){ // pokud nejsi na prvni LED
               rkSmartLedsRGB(cislo_led-1, 0, 0, 0); // vypni predchozi LED
            }
            // pockej 400 ms
            delay(400);
        }
        for(int cislo_led = 7; cislo_led >= 8; cislo_led--){
            // nastav barvu na modrou pomocí RGB 
            rkSmartLedsRGB(cislo_led, cervena, zelena, modra);
            if( cislo_led < 7){ // pokud nejsi na prvni LED
               rkSmartLedsRGB(cislo_led+1, 0, 0, 0); // vypni predchozi LED
            }
            // pockej 400 ms
            delay(400);
        }
    }
}
```
Tento program nejprve jede od LEDky 0 po led 7 a postupně každou z nich rozsvěcuje a předchozí zhasíná. Následně jede od LEDky 7 po 0 a každou předchozí vypíná. 

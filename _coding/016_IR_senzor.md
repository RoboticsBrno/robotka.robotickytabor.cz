---
title: IR senzor
layout: coding
---

# {{ page.title | escape }}
#### K čemu slouží IR senzor?
IR senzor, neboli senzor, který pracuje s infračerveným zářením (InfraRed), umožňuje jednak měření vzdálenosti, detekovat překážku, tak možnost robotem následovat čáru.

#### Práce s IR senzorem
Pro měření vzdálenosti můžeme na našem robotovi použít dva IR senzory. Pro práci s nimi můžeme použít následující funkce:
- `rkIrLeft` 
- `rkIrRight`

Obě tyto funkce jsou úplně stejné, liší se pouze v tom, z jakého senzoru čteme hodnoty. Pokud z levého, tak použijeme `rkIrLeft()` a pokud z pravého, tak `rkIrRight()`. Tato funkce neočekává žádný parametr a vrací hodnotu od 0 do 4095. Pokud to tedy vztáhneme na sledování čáry, na kterou jsou na našem robotovi IR senzory určeny, funkce vrací 0 pro bílou plochu a 4095 na úplně černou. Pokud mu předhodíme jiné barvy, tak vrací odpovídající hodnotu mezi 0 a 4095.

###### Ukázka čtení hodnot ze senzor
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    int vzdalenost = 0;

    while(true){
        int levty_senzor = rkIrLeft();  // nacti hodnotu z leveho IR senzoru
        int pravy_senzor = rkIrRight(); // nacti hodnotu z praveho IR senzoru

        printf("Levy senzor nameril hodnotu %d\n", levty_senzor);
        printf("Levy senzor nameril hodnotu %d\n", pravy_senzor);
    }
}
``` 
Úkolem tohoto programu je načtení stavu obou IR senorů (levého i pravého) a vypsání do PC.
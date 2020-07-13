---
title: Koncová tlačítka
layout: coding
---

# {{ page.title | escape }}

#### Detekce stisknutí tlačítka
Tento program ukazuje základní práci s koncovými tlačítky (ty červené: https://robotka.robotickytabor.cz/guide/#step-U-16). U tohoto tlačítka nás budou zajímat stavy uvolněno a stisknuto. Pro tuto operaci nám poslouží funcke `digitalRead()`. Tato funkce vrací `false` pokud je tlačíko stisknuto, v opačném případě vrací `true`. Pro zvolená koncová tlačítka je možné použít dva piny: 14 a 27.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    int tlacitko_1 = 14;
    int tlacitko_2 = 27;
    
    while(true){
        if( digitalRead(tlacitko_1) == false ){ // tlacitko je stiskle
            printf("Tlacitko je stiskle\n");
        }
        else{   // tlacitko je uvolnene
            printf("Tlacitko je uvolnene\n");
        }
    }   
}
```
---
title: Ultrazvuk
layout: coding
---

# {{ page.title | escape }}
#### K čemu slouží ultrazvuk?
Pokud se náš robot autonomně pohybuje, je poměrně nezbytné před sebou detekovat překážky, aby do nich robot nenarazil. Ultrazvuk umožňuje nejen detekovat předměty, ale také jejich vzdálenost.

#### Měření vzdálenosti
Pro měření vzdálenosti s ultrazvukem, je možné využít následující funkci:
- `rkUltraMeasure()` - Změří vzdálenost od překážky a vrátí ji uživateli. Funkce očekává jeden jediný parametr a to číslo ultrazvuku, které chceme použít. Číslo ultrazvuku je v rozmezí 1 do 4.

###### Měření a výpis vzdálenosti od překážky
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    int vzdalenost = 0;

    while(true){
       vzdalenost = rkUltraMeasure(1);  // zmer vzdalenost a uloz ji do promenne
       printf("Prekazka je vzdalena: %d\n", vzdalenost);
    }
}
``` 
Výše uvedený program nejprve načte hodnotu pomocí funkce `rkUltraMeasure()`. Tuto hodnotu uloží do proměnné `vzdalenost` a tu následně vypíše.

###### Rožínání LED podle vzdálenosti objektu
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    int vzdalenost = 0;

    while(true){
       vzdalenost = rkUltraMeasure(1);  // zmer vzdalenost a uloz ji do promenne
       if(vzdalenost > 50){
           rkLedRed(false);
           rkLedGreen(true);
           rkLedYellow(false);

       }
       
       else if(vzdalenost > 50){
           rkLedRed(false);
           rkLedGreen(false);
           rkLedYellow(true);
       }

       else{
           rkLedRed(true);
           rkLedGreen(false);
           rkLedYellow(false);
       }

       printf("Prekazka je vzdalena: %d\n", vzdalenost);
    }
}
``` 



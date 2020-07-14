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
       if(vzdalenost > 500){    // vzdalenost vetsi nez 500
           rkLedRed(false);
           rkLedGreen(true);
           rkLedYellow(false);

       }
       
       else if(vzdalenost < 200){ // vzdalenost mensí vetsi 200, ale mensi nez 500
           rkLedRed(false);
           rkLedGreen(false);
           rkLedYellow(true);
       }

       else{    // vzdalenost mensí nez 200
           rkLedRed(true);
           rkLedGreen(false);
           rkLedYellow(false);
       }

       printf("Prekazka je vzdalena: %d\n", vzdalenost);
    }
}
``` 
Výše uvedený program nejprve změří vzdálenost pomocí ultrazvuku. Pokud je ve větší vzdálenosti než 500 mm, tak rozsvítí zelenou LED -první `if`. Pokud je vzdálenost více jak 200, ale současně menší než 500 (to řeší `else if`, který se provede pouze tehdy, pokud je `if` nesplněný), tak se rozsvítí žlutá LED. Pokud je vzdálenost měnší než 200, tak se rozsvítí červená LED `else`.



---
title: Monitorování robotky
layout: coding
---

# {{ page.title | escape }}
#### Motivace
U každého robota, který není přímo napájen ze sítě, je důležité sledovat jeho stav baterie a teplotu desky. Důvodem kontroly napětí baterie je, že když včas neodpojíme vybité baterie, tak se mohou poničit. Teplotu následně kontrolujeme, aby se robot nepřehřál a nepoškodil (přehřívání většinou znamená nějaké přetížení nebo závadu).

#### Jak monitorovat stav Robotky
Následující funkce, které je možné použít pro monitorování Robotky, neočekávají žádný parametr. Jsou jimy funkce:
- `rkBatteryPercent()` - Získá hodnotu baterek, přepočítá ji na procenta a tuto hodnotu následně vrátí uživateli
- `rkBatteryVoltageMv()` - Zjistí stav baterky v milivoltech a vrací ji uživateli. Například hodnotu 5V vrací jako 5000 mV
- `rkTemperature()` - Změři teplotu v robotce a vrací ji uživateli

###### Ukázka detekce stavu baterie s využitím LED
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
   
    int napeti = 0;

    while(true){
        napeti = rkBatteryPercent();

        // nabita baterie
        if( (napeti <= 100) && (napeti >= 75) ){
            rkLedRed(false); 
            rkLedGreen(true);
            rkLedYellow(false);
        }

        // baterie je nabita napul
        else if( (napeti < 75) && (napeti >= 50) ){
            rkLedRed(false); 
            rkLedGreen(false);
            rkLedYellow(true);
        }

        // baterie je temer vybita
        else{   
            rkLedRed(true); 
            rkLedGreen(false);
            rkLedYellow(false);
        }
    }
}
``` 

###### Ukázka vypisu teploty
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
   
    int teplota = 0;

    while(true){
        teplota = rkTemperature();
        printf("teplota je: %d\n", teplota);
    }
}
``` 



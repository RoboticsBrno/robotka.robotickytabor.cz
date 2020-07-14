---
title: LEDky
layout: coding
---

# {{ page.title | escape }}

#### Rozsícení LED
Pro práci s LED je možné využít následující funkce:
- `rkLedRed()` - rozsvícení a zhasnutí červené LED
- `rkLedGreen()` - rozsvícení a zhasnutí zelené LED
- `rkLedBlue()` - rozsvícení a zhasnutí modré LED
- `rkLedYellow()` - rozsvícení a zhasnutí žluté LED
- `rkLedAll()` - rozsvícení a zhasnutí všech LED
Všechny výše uvedené funkce umožňují rozsvítit nebo zhasnout LED podle hodnoty parametru, která se mu předá. Pro rozsvícení například červené LED je možné použít volaní funkce s parametre `true`, tedy `rkLedRed(true)`.Pro její zhasnutí je zapotřebí zadat `rkLedRed(false)`. Stejně tak to funguje pro všechny ostatní výše uvedené funkce.

- `rkLedById()` rozsvícení a zhasnutí LED podle jejich čísla na desce
Tato funkce vyžaduje dva parametry: Číslo LED na desce a poté hodnotu `true` pro rozsvícení, případně `false` pro zhasnutí. 

Následující program ukazuje, jak je možné jednotlivé LED rozsvítit.
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedRed(true); // rozsvit cervenou LEDku
    rkLedGreen(true); // rozsvit zelenou LEDku
    rkLedBlue(true); // rozsvit modrou LEDku
    rkLedYellow(true); // rozsvit zlutou LEDku
}
```

Výše uvedený program rozsvěcuje všechny LED. Tento program je tako možné zapsat pomocí následujícího programu, který je funkčně úplně stejný, ovšem kratší.
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedAll(true); // rozsvit vsechny LEDky
}
```
Pokud nahradíme hodnotu parametru funkcí z `true` na `false`, tak LEDka zhasne.


#### Blikání
Aby bylo možné s LEDkou blikat, musíme střídat následující příkazy: *rozsvit* LED, *počkej* určitou dobu, *zhasni* LED a *počkej* určitou dobu. Doba čekání mezi rozsvícením a zhasnutím udává, jak rychle má LEDka blikat. Pro tuto situaci je možné použít funkci `delay()`, která očekává jako parametr hodnotu v ms (1 vteřina == 1000 ms). Následující program ukazuje, jak je možné s LEDkou blikat.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    while(true){
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);
    }
}
```


Ukázka detekce stavu napájení, pomocí LED:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int stav_baterie = rkBatteryPercent();  // načti aktuální stav baterie

    // Podle toho, jak moc je nabita baterie, rozsvitime zelenou, zlutou nebo cervenou LED.
    if(stav_baterie > 50) { // pokud stav_baterie je vetsi nez 50, viz dalsi sekce
        rkLedBlue(true);
    } else if (stav_baterie > 25) {
        rkLedYellow(true);
    } else {
         rkLedRed(true);
    }
}
```

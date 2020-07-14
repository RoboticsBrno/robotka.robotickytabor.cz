---
title: Motory
layout: coding
---

# {{ page.title | escape }}
#### Ovládání motorů
Funkce, kterými je možné ovládat motory jsou rozděleny do dvou základních typů podle toho, zda nastavujeme rychlost nebod výkon. Všechy funkce jsou typu `void`, tudíž nic nevracejí.

###### Nastavení rychlosti motoru
Všechny následující funkce pracují s rycholstí od -100 do 100. Hodnota udává, kolik procent rychlosti je přiděleno jednotlivým motorům. To znaméná, že hodnota -100 je maximální rychlost zpět a 100 je maximální rychlost vpřed.
- `rkMotorsSetSpeed()` - Nastavení rychlosti obou motorů současně. Očekávají 2 parametry: rychlost levého motoru a rychlost pravého motoru, obě v rozsahu -100 až 100
- `rkMotorsSetSpeedLeft()` - Nastavení rychlosti levého motoru. Očekává jeden parametr, reprezentující rychlost motoru
- `rkMotorsSetSpeedRight()` - To samé jako `rkMotorsSetSpeedLeft()`, akorát pro pravý motor
- `rkMotorsSetSpeedById()` - Nastavení rychlosti zvolenému motoru. Očekává id motoru a rychlost jako parametry, kde id je hodnota daného motoru na desce (1-4, což odpovídá M1-M4 na desce).

###### Nastavení výkonu motoru
Tyto funkce se chovají stejně jako funkce pro nastavení rychlosti, akorát se nezadává rychlost, ale výkon. Tento výkon je opět v procentech -100 až 100.
- `rkMotorsSetPower()`
- `rkMotorsSetPowerLeft()`
- `rkMotorsSetPowerRight()`
- `rkMotorsSetPowerById()`

Rychlost motoru je také možné nastavit podle pozice joysticku.
- `rkMotorsJoystick()`
Tato funkce očekává `x` a `y` souřadnici joystisku, na jejichž základě určí, jak nastavit rychlost motoru. Pro ovládání robota přes vysílačku/mobil je tato funkce vhodná.

###### Přehled použití funkcí
Následující kusy kódu ukazují, jaký je význam jednotlivých funkcí. Jsou zde uvedeny pouze funkce pro rychlost (výkon je stejný, akorát místo funkcí obsahující Speed se použije Power).
```cpp
rkMotorsSetSpeed(100,100); // jizda vpred s maximalni rychlosti
rkMotorsSetSpeed(50,50); // jizda vpred s polovinou maximalni rychlosti
rkMotorsSetSpeed(0,0); // zastaveni
rkMotorsSetSpeed(-100,-100); // jizda vzad s maximalni rychlosti
rkMotorsSetSpeed(0,100); // otaceni kolem leveho motoru
rkMotorsSetSpeed(100,0); // otaceni kolem praveho motoru
rkMotorsSetSpeed(100,-100); // otaceni kolem své osy vpravo
rkMotorsSetSpeed(-100,100); // otaceni kolem své osy vlevo

```


###### Ukázka postupného zrychlování a zpomalování
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    while(true){
        for(int rychlost = 0; rychlost <= 100; rychlost++){ // nastav rychlost od 0 do 100
            rkMotorsSetSpeed(rychlost, rychlost);
            delay(50);
        }
        
        for(int rychlost = 100; rychlost >= 0; rychlost--){ // nastav rychlost od 100 do 0
            rkMotorsSetSpeed(rychlost, rychlost);
            delay(50);
        }
    }    
}
```
Delay nám v tomto kontextu určuje, jak dlouho má být rychlost nastavena. Pokud řekneme ať robot jede rovně, pak zavolame `delay(1000)` a následně ať zastaví, tak se robot rozjede, 1 s se nic neděje a následně zastaví. 

###### Ukázka jízdy ve čtvercí
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    while(true){
        rkMotorsSetSpeedLeft(50);
        rkMotorsSetSpeedRight(50);

        delay(1000);

        rkMotorsSetSpeed(-50,50);   //otoc se o 90 stupnu
        
        delay(1000);
    }
}
```
Robot jede rovně (po straně čtverce), dokud nejede jednu vteřinu. Poté se otáčí jednu vteřinu okolo své osy do leva. Tento kód se neustále opakuje.
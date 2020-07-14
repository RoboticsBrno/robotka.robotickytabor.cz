---
title: Práce s tlačítky
layout: coding
---

# {{ page.title | escape }}

#### Použitelné funkce
Tento program ukazuje základní práci s vestavěnými tlačitky: `UP`, `DOWN`, `LEFT`, `RIGHT`, `ON` a `OFF`. Tato tlačítka je v programu nezbytné označovat předponou `BTN_`, tedy tlačítko `BTN_UP` reprezentuje tlačítko `UP` na desce, tlačítko `BTN_LEFT` potom `LEFT`, a tak dále. Oproti koncovým tlačitkům, které jsou popsány v předchozí kapitole máme větší <a href="https://roboticsbrno.github.io/RB3204-RBCX-Robotka-library/group__buttons.html#ga3bc0ef766782822a9399654f97fa224c"> možnosti</a>, jak s tlačítkem pracovat (detekovat více stavů):

###### Funkce pro všechna tlačítka
- `rkButtonIsPressed()` - Detekuje, zda je tlačítko stisknuto. Vrací logickou hodnotu pravda `true`, pokud je tlačítko stisknuté, jinak vrací nepravda `false`. Jako parametr očekává jedno z tlačítek (`BTN_UP`, `BTN_DOWN`, `BTN_LEFT`, `BTN_RIGHT`, `BTN_ON` nebo `BTN_OFF`) a hodnotu `true`, pokud chceme čekat na uvolnění nebo `false` pokud na uvolnění čekat nechceme. Například `rkButtonIsPressed(BTN_UP, false)` čeká pouze na stisk tlačíka `UP`, ale už nečeká na jeho uvolnění.
- `rkButtonWaitForRelease()`  - Čeká, stisknuté tlačítko není uvolněno. Tato funkce pozastaví běh celého programu, dokud se tlačítko neuvolní. Jako parametr požaduje pouze jedno z tlačítek `BTN_UP`, `BTN_DOWN`, `BTN_LEFT`, `BTN_RIGHT`, `BTN_ON` nebo `BTN_OFF`.

###### Funkce pro jednotlivá tlačítka
- `rkButtonDown()` -  Detekuje, zda je stisknuto tlačítko Down -> funguje pouze pro tlačítko `BTN_DOWN`
- `rkButtonUp()` -  Detekuje, zda je stisknuto tlačítko UP -> funguje pouze pro tlačítko `BTN_UP`
- `rkButtonLeft()` -  Detekuje, zda je stisknuto tlačítko LEFT -> funguje pouze pro tlačítko `BTN_LEFT`
- `rkButtonRight()` -  Detekuje, zda je stisknuto tlačítko RIGHT -> funguje pouze pro tlačítko `BTN_RIGHT`
- `rkButtonOn()` -  Detekuje, zda je stisknuto tlačítko ON -> funguje pouze pro tlačítko `BTN_ON`
- `rkButtonOff()` -  Detekuje, zda je stisknuto tlačítko OFF -> funguje pouze pro tlačítko `BTN_OFF`
Všechny tyto funkce očekávají pouzze jeden parametr a to, `true`, pokud chceme, aby se čekalo na uvolnění, jinak `false`.

Ukázka detekce stavu tlačítka:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    while(true){
        if( rkButtonIsPressed(BTN_UP, false) ){ // tlacitko je stiskle a necekame na uvolneni
            printf("Tlacitko UP je stiskle\n");
        }
        else{   // tlacitko je uvolnene
            printf("Tlacitko UP je uvolnene\n");
        }
    }   
}
```
Předchozí ukázka vypíše, že je tlačítko `UP` stisknuté, pomocí funkce `rkButtonIsPressed()`. Pokud se stiskne, tak vypíše že stistklé je `if`, jinak vypíše, že není stisklé `else`.

Ukázka čekání na uvolneni tlačítka:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    while(true){
        printf("Cekam na uvolneni tlačítka UP!\n");
        rkButtonWaitForRelease(BTN_UP); // ceka, dokud neni tlacitko UP uvolneno
        printf("Tlačítko UP bylo uvolneno!\n");
    }   
}
```
Tento program vypíše, že čeká na uvolnění tlačítka `UP`. Následně čeká na funkci `rkButtonWaitForRelease()`, dokud se tlačítko neuvolní. Po uvolnění se vypíše, že se uvolnilo.

Ukázka čekání na stisk dvou tlačítek:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    while(true){
        // kontrola, zda je zmacknute tlacitko LEFT i RIGHT soucasne
        if( rkButtonIsPressed(BTN_LEFT, false) && rkButtonIsPressed(BTN_RIGHT, false) ){
            printf("Tlačítko LEFT a RIGHT je stisknuto!\n");
        }
    }   
}
```
Předchozí program je možné číst následovně. Je stisknuté tlačítko `LEFT` a zároveň je stisknuté tlačítko `RIGHT`? Pokud ano, tak tuto informaci vypíše vypíše. Tento program lze lépe zapsat takto:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    while(true){
        // kontrola, zda je zmacknute tlacitko LEFT i RIGHT soucasne
        if( rkButtonLeft(false) && rkButtonRight(false) ){
            printf("Tlačítko LEFT a RIGHT je stisknuto!\n");
        }
    }   
}
```
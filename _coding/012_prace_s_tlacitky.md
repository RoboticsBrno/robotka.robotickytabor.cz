---
title: Práce s tlačítky
layout: coding
---

# {{ page.title | escape }}

#### Použitelné funkce
Tento program ukazuje základní práci s vestavěnými tlačitky: `UP`, `DOWN`, `LEFT`, `RIGHT`, `ON` a `OFF`. Oproti koncovým tlačitkům, které jsou popsány v předchozí kapitole máme větší <a href="https://roboticsbrno.github.io/RB3204-RBCX-Robotka-library/group__buttons.html#ga3bc0ef766782822a9399654f97fa224c"> možnosti</a>, jak s tlačítkem pracovat (detekovat více stavů):

## Funkce pro všechna tlačítka
- `rkButtonIsPressed()` - Detekuje, zda je tlačítko stisknuto -> funguje s tlačítky `UP`, `DOWN`, `LEFT`, `RIGHT`, `ON` i `OFF`. Vrací logickou hodnotu pravda `true`, pokud je tlačítko stisknuté, jinak vrací nepravda `false`.
- `rkButtonWaitForRelease()`  - Čeká, dokud není tlačíto uvolněno ze stisknutí -> funguje s tlačítky `UP`, `DOWN`, `LEFT`, `RIGHT`, `ON` i `OFF`
- `rkButtonOnChange()` - Detekuje, zda je tlačítko uvolněno -> funguje s tlačítky `UP`, `DOWN`, `LEFT`, `RIGHT`, `ON` i `OFF`

## Funkce pro jednotlivá tlačítka
- `rkButtonDown()` -  Detekuje, zda je stisknuto tlačítko Down -> funguje pouze pro tlačítko `DOWN`
- `rkButtonUp()` -  Detekuje, zda je stisknuto tlačítko UP -> funguje pouze pro tlačítko `UP`
- `rkButtonLeft()` -  Detekuje, zda je stisknuto tlačítko LEFT -> funguje pouze pro tlačítko `LEFT`
- `rkButtonRight()` -  Detekuje, zda je stisknuto tlačítko RIGHT -> funguje pouze pro tlačítko `RIGHT`
- `rkButtonOn()` -  Detekuje, zda je stisknuto tlačítko ON -> funguje pouze pro tlačítko `ON`
- `rkButtonOff()` -  Detekuje, zda je stisknuto tlačítko OFF -> funguje pouze pro tlačítko `OFF`







```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    while(true){
        if( digitalRead(EXTRA_BUTTON1) == false ){ // tlacitko je stiskle
            printf("Tlacitko 1 je stiskle\n");
        }
        else{   // tlacitko je uvolnene
            printf("Tlacitko 1 je uvolnene\n");
        }

        // druhe koncove tlacitko
        if( digitalRead(EXTRA_BUTTON2) == false ){ // tlacitko je stiskle
            printf("Tlacitko 2 je stiskle\n");
        }
        else{   // tlacitko je uvolnene
            printf("Tlacitko 2 je uvolnene\n");
        }
    }   
}
```

#### Jak program funguje
V nekonečné smyčce `while(true)` se opakovaně kontrolují podmínky stisknutí obou koncových tlačítek.
```cpp
    if( digitalRead(EXTRA_BUTTON1) == false ){ // tlacitko je stiskle
        printf("Tlacitko 1 je stiskle\n");
    }
    else{   // tlacitko je uvolnene
        printf("Tlacitko 1 je uvolnene\n");
    }
}
```
Nejprve se ověří, zda je stisknuté tlačítko pomocí `if`. Pokud je stisknuto, tak se vypíše že je stiskuté `if`, jinak pokud není stisknuté, tak se vypíše, že je uvolněné `else`. Toto se opakuje i pro druhé tlačítko, kde akorát zaměníme číslo pinu z `EXTRA_BUTTON1` na `EXTRA_BUTTON2`.
---
title: Koncová tlačítka
layout: coding
---

# {{ page.title | escape }}

#### Detekce stisknutí tlačítka
Tento program ukazuje základní práci s koncovými tlačítky (<a href = "https://robotka.robotickytabor.cz/guide/#step-U-16">odkaz na zapojení je zde</a>). U tohoto tlačítka nás budou zajímat stavy uvolněno a stisknuto. Pro tuto operaci nám poslouží funcke `digitalRead()`. Tato funkce má pouze jeden parametr, kterým je číslo pinu, na kterém tlačítko je a vrací `false` pokud je tlačíko stisknuté a `true` pokud je uvolněné. Pro zvolená koncová tlačítka je možné použít dva piny: `EXTRA_BUTTON1` a `EXTRA_BUTTON2`. Následující příklad ukazuje použití této funkce pro práci s koncovými tlačitky.

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
---
title: Cyklus
layout: coding
---

# {{ page.title | escape }}

#### Motivace
Jsou situace, kdy potřebujeme nějaký kód opakovat. Například když jdeme po ulici, tak také neuděláme pouze jeden krok, ale ten samý krok opakujeme, dokud nedojdeme na chtěné místo. Pokud bychom chtěli bliknout LEDkou, tak bychom napsali něco takového

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);
}
```

Pokud bychom chtěli bliknout 3x, tak napíšeme něco takovéhoto:

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);

    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);

    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);
}
```

Ale co kdybychom chtěli bliknout 1000x? Ano, je možné zavolat funkci `blikni()` 1000x za sebou, nebo použít hezčí metodu a to pomocí cyklů. Cyklus nám umožňuje provádět danou část kódu opakovaně, dokud je splněná podmínka, takže to do jisté míry souvisí s podmínkami. Máme základní dva druhy cyklů: `while` a `for`.

#### `while`
Tento druh cyklu se používá v případě, kdy předem nevíme, kolikrát chceme kód opakovat. Například u chůze také neznáme, kolik musíme přesně udělat kroku, abychom někam došli. Tento cyklus obsahuje podmínku, která když platí, tak opakuje kód. Zjednodušeně se dá říci, že se jedná o `if`, u kterého se opakovaně vyhodnocuje a provádí se kód.

```cpp
while(podminka){
    ...Co se ma provest pri kazdem opakovani...
}
```

Jednoduchým příkladem může být například blikání s LED, bliknout s LED dokud je proměnná menší větší než 100.
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int cislo = 1000;
    while(cislo < 100){
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);

        cislo -= 1;
    }
}
```

#### `for`
Tento typ je používán v případě, kdy dopředu známe, kolikrát chceme kód opakovat. Například kdž chceme 10x bliknout s LED.
```cpp
for(vytvoreni_promenne ; podminka ; operace){
    ...Co se ma provest pri kazdem opakovani...
}
```

Oproti cyklu while je zde podmínková část složitější, než v případě `while` cyklu. Skládá se ze 3 částí: 
- Vytvoř proměnnou, kterou využiješ v podmínce
- Zadej podmínku, která bude udávat, do kdy máme kód opakovat
- Uprav hodnotu proměnné, pokud je podmínka splněna 

Následující program ukazuje, jak bliknout 10x s LED.
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    for(int pocet_bliku = 0; pocet_bliku < 10; pocet_bliku++){
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);
    }
}
```
Vytvořili jsme proměnnou `pocet_bliku`, která obsahuje celé číslo 0. Dokud je tato proměnná menší než 10, tak se k ní přičte hodnota 1 a provede se kód.


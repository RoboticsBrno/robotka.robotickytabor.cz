---
title: Větvení
layout: coding
---

# {{ page.title | escape }}

#### Motivace
Téměř pokaždé je zapotřebí říci programu, aby provedl určitou část kódu, pouze když se něco stane. Příkladem může být rozhodnutí, zda se půjdeme vykoupat do bazénu nebo ne. Pokud je například teplota nad 30 °C, tak se běž ochladit, jinak ne. Stejně tak je možné v programu určovat, která část se má kdy provést. Tomuto se říká větvení.

#### Jak se větví
Větvení, lze provádět pomocí těchto tří konstrukcí: `if`, `else if` a `else`.

###### `if` konstrukce
Základní podmíněný příkaz, který musí v případě větvení existovat vždy. Základem této konstrukce je podmínka, která se uvádí za slovo `if` do kulatých závorek.

```cpp
    if(podminka){
        ...kod ktery se provede, pokud je podminka splnena -> true...
    }
``` 
U této konstrukce docházi k vyhodnocení podmínky pokaždé. Vyhodnocení podmínky znamená, že se zjistí, zda je podmínka pravdivá (`true`) nebo nepravdivá (`false`). Pokud je pravdivá, provede se kód, který je v ní napsaný, v opačném případě se pokračuje až za `if`.

###### `else if` konstrukce
Může existovat jen v případě, kdy před ní byl vyvořený `if`. Chová se stejně, jako klasický `if` až na to, že k vyhodnocení podmínky dojde až v případě, kdy je předchozí `if` nebo `else if` nesplněný.
```cpp
    if(podminka_1){
        ...kod ktery se provede, pokud je podminka splnena -> true...
    }
    else if(podminka_2){
        ...kod ktery se provede, pokud je podminka_2 splnena a podminka_1 nesplnena...
    }
``` 
V této ukázce se provede kód v `else if` pokud je předchozí podmínka_1 neplatná.

###### `else` konstrukce
Může existovat jen v případě, kdy před ní byl vyvořený `if`. Oproti předchozímu `if` a `else if` se liší tím, že se neuvádí podmínka. Jeho úkolem je provést kód v něm napsaný jen v případě, že předchozí `if` a `else if` nejsou splněny.

```cpp
    if(podminka){
        ...kod ktery se provede, pokud je podminka splnena -> true...
    }
    else{
        ...kod ktery se provede, pokud je podminka nesplnena...
    }
``` 

Poznámka: V jednotlivých konstrukcích je možné libovolně vnořovat další tyto konstrukce, avšak musí platit, že první konstrukcí je `if`, následně může následovat několik `else if` konstrukcí a pokud se rozhodneme použít `else`, tak ten dáme až na konec. Oproti `if` a `else if`, kterých může existovat vícero, tak else může být v rámci jedné `if-else` kombinaci použito jen jendou.

#### Podmínka
Podmínka nám říká, kdy se daný `if`, `else if` nebo `else` má provést. Je možné zjednodušeně napsat:

```cpp
    if(true){
        ...kod, ktery se provede vzdy...
    }
``` 
Tento if se provede vždy, protože je jeho podmínka rovna pravdě (`true`). Naopak
```cpp
    if(false){
        ...kod, ktery se neprovede nidky...
    }
``` 
se neprovede nikdy, protože je podmínka nesplněna. Podle ukázky výše je patrné, že výsledek výrazu, který je do podmínky (kulatých závorek) vložen, musí reprezentovat hodnotu typu `bool`, neboli pravda `true` nebo nepravda `false`. Je tedy možné, vytvoři proměnnou typu `bool`, přiřadit do ní výraz, jehož výsledek je `true` nebo `false` a tuto proměnnou vložit do podmínky `if` nebo `else if `. S výše uvedenou podmínkou si dlouho nevystačíme a proto použijeme relační operátory, které nám pomohou vytvářet komplikovanější podmínky. Mezi základní relační operátory patří:
- `==` označuje porovnávání, takže `1 == 1` označuje, že se 1 rovná 1
- `!=` vykřičník před rovnítkem označuje opak, tudíž tento operátor značí nerovnost, tedy `1 != 2` označuje, že se 1 nerovná 2
- `<` menší než
- `>` větší než
- `<=` menší rovno než
- `>=` větší rovno než
 
{:.important}
`=` označuje přiřazení hodnoty do proměnné, například `promenna =  2;`, ale `==` označuje porovnání, jehož výsledkem je pravda `true` nebo nepravda `false`.

{:.important}
Výsledek výrazu, který je v proměnné, reprezentuje hodnotu pravda `true` nebo nepravdu `false`.


Ukázka relačních operátorů:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int batteryState = rkBatteryPercent();

    // Podle toho, jak moc je nabita baterie, rozsvitime zelenou, zlutou nebo cervenou LED.
    if(batteryState > 50) { // pokud batteryState je vetsi nez 50, viz dalsi sekce
        rkLedBlue(true);
    } else if (batteryState > 25) {
        rkLedYellow(true);
    } else {
         rkLedRed(true);
    }
}
```

#### Propojování podmínek
Podmínky je možné propojovat do jedné delší pomocí logických operátorů. Jsou jimi
- `&&` (logický součin) říká nám, že musí platit obě podmínky, aby byla podmínka splněna, jinak je nesplněna
- `||` (logický součet) říká nám, že musí platit alespoň jedna podmínka z nich, aby byla podmínka splněna, jinak je nesplněna

Ukázka:
Následující programy jsou stejné, druhý ovšem využívá logické operátory.
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int batteryState = rkBatteryPercent();

    if(batteryState < 100) {
        if(batteryState > 10){
            rkLedGreen(true);
        }
    }
}
```

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int batteryState = rkBatteryPercent();

    if((batteryState < 100) && (batteryState > 10)) {
        rkLedGreen(true);
    }
}
```
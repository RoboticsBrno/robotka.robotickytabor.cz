---
title: Blikání LED
layout: coding
---

# {{ page.title | escape }}


{:.lead}
Nyní se podíváme jak řídit běh programu.
Program můžeme pozastavit, rozvětvit, či zopakovat.

#### Pozastavení
Začneme funkcí `delay`, ta pozastaví běh programu na dobu uvedenou v parametru (závorkách), hodnota je udávána v milisekundách, neboli tisícinách vteřiny.

Napíšeme si program, který nejprve rozsvítí a následně po půl vteřině zhasne modrou LED.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
}
```

##### Úkol

{:.lead}
Zkus upravit tento řádek v kódu tak, aby LED svítila dvě vteřiny!

```cpp
    delay(500);
```
{:data-linenos-offset="8"}

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    delay(2000);
    rkLedBlue(false);
}
```

#### Větvení
C++ obsahuje dva přostředky pro rozvětvení programu, tou jednoduší a univezrálnější je `if`.

```cpp
#include "robotka.h"

bool controlVariable = true;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    if(controlVariable) {
        delay(1000);
    }
    delay(500);
    rkLedBlue(false);
}
```
Zde využijeme našich znalostí z předchozí kapitoly a vytvoříme si _proměnou_ `controlVariable` a přiřadili jí _hodnotu_ `true`.
Pokud program necháme beze změny modrá led se rozsvítí a násleně se po jedna a půl vteřině opět vypne.

##### Úkol

{:.lead}
Upravte tento řádek v kódu tak, aby LED svítila pouze půl vteřiny!

```cpp
    bool controlVariable = true;
```
{:data-linenos-offset="3"}

{:.spoiler}
```cpp
#include "robotka.h"

bool controlVariable = false;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    if(controlVariable) {
        delay(1000);
    }
    delay(500);
    rkLedBlue(false);
}
```

Struktura `if` se dá dále rozvíjet pomocí `else`.
Pokud neplatí podmínka v `if`, provede se kód v `else`.

```cpp
#include "robotka.h"

bool controlVariable = false;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    if(controlVariable) {
        rkLedBlue(true);
    } else {
        rkLedRed(true);
    }
}
```

#### Relační operátory

Ne vždy nám však stačí pouze jednoduché proměnné typu `bool`, pro vytváření "složitějších" logický výrazů nám slouží _relační operátory_, nebo také _porovnávací_ operátory.
Mezi tyto operátory patří: `<=`, `<`, `>=`, `>`, které jsou běžně používané i mimo programování.
Oproti zápisu používanému například v matematice je zde rozdíl v operátorech rovná se: `==` a nerovná se: `!=`.

Pojďme jsi je ukázat v programu.

```cpp
#include "robotka.h"

int number = 10;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    if(number == 5) {
        rkLedBlue(true);
    }
}
```

Tato nově nabytá znalost nám umožní ukázat si, že `if` a `else` lze zkombinovat do `else if`.

```cpp
#include "robotka.h"

int number = 10;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    if(number == 5) {
        rkLedBlue(true);
    } else if(number == 3) {
        rkLedRed(true);
    } else {
        rkLedGreen(true);
    }
}
```

#### Úkol

{:.lead}
Zkus přidat do předchozíko programu rozsvícení žluté LED proměnná `number` bude rovna 4!

{:.spoiler}
```cpp
#include "robotka.h"

int number = 10;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    if(number == 5) {
        rkLedBlue(true);
    } else if(number == 3) {
        rkLedRed(true);
    } else if(number == 4) {
        rkLedYellow(true);
    } else {
        rkLedGreen(true);
    }
}
```

{:.lead}
Uděláme to zajímavější, co myslíš?

Zkus upravit předchozí program tak, aby pro čísla menší než 20 svítila modrá LED, pro čísla větší nebo rovna 20 červená LED a zároveň pro čísla menší nebo rovna 15 svítila žlutá a zároveň pro čísla větší než 25 svítila zelená LED.

{:.spoiler}
```cpp
#include "robotka.h"

int number = 10;

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    if(number < 20) {
        rkLedBlue(true);
    } else {
        rkLedRed(true);
    }
    if(number < 15) {
        rkLedYellow(true);
    }
    if(number > 25) {
        rkLedGreen(true);
    }
}
```



```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    while(true) {
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);
    }
}
```

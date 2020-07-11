---
title: Blikání LED
layout: coding
---

# {{ page.title | escape }}


{:.lead}
Nyní se podíváme, jak řídit běh programu.
Program můžeme pozastavit, rozvětvit, či zopakovat.

#### Pozastavení
Začneme funkcí `delay`. Ta pozastaví běh programu na dobu uvedenou v parametru (závorkách). Hodnota je udávána v milisekundách, neboli tisícinách vteřiny.

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
Zkus upravit tento řádek v kódu tak, aby LED svítila dvě vteřiny.

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
C++ obsahuje dva prostředky pro rozvětvení programu, tou jednodušší a univerzálnější je `if`.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    // vytvorime si promennou controlVariable a priradime do ni hodnotu true (logicka jednicka)
    bool controlVariable = true;
    
    // do promenne buttonState ulozime informaci,
    // jestli je prave ted stisknute spodni tlacitko
    bool buttonState = rkButtonIsPressed(BTN_DOWN);

    rkLedBlue(controlVariable);
    if(buttonState) {
        delay(1000);
    }
    delay(500);
    rkLedBlue(false);
}
```
Zde využijeme našich znalostí z předchozí kapitoly a vytvoříme si _proměnnou_ `controlVariable` a přiřadíme jí _hodnotu_ `true`.
Pokud program necháme beze změny, modrá LED se rozsvítí a následně se po jedné a půl vteřině vypne.

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

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    bool controlVariable = false;
    bool buttonState = rkButtonIsPressed(BTN_DOWN);

    rkLedBlue(controlVariable);
    if(buttonState) {
        delay(1000);
    }
    delay(500);
    rkLedBlue(false);
}
```

Struktura `if` se dá dále rozvíjet pomocí větvě `else` nebo `else if`.
Pokud neplatí podmínka v `if`, provede se kód v `else`.

Pokud potřebujeme více podmínek, můžeme je napsat do větvě `else if`.
Nejprve se porovná podmínka uvedená v `if` a pokud neplatí, postupně se projdou větvě `else if`. Pokud i žádná z dalších podmínek neplatí, vykoná se příkaz ve větvi `else`.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int batteryState = rkBatteryPercent();

    // Podle toho, jak moc je nabita baterie, rozsvitime zelenou, zlutou nebo cervenou LED.
    if(batteryState > 50) {
        rkLedBlue(true);
    } else if (batteryState > 25) {
        rkLedYellow(true);
    } else {
         rkLedRed(true);
    }
}
```

#### Relační operátory

Ne vždy nám stačí jednoduché proměnné typu `bool`, pro vytváření složitějších logických výrazů nám slouží _relační operátory_, nebo také _porovnávací_ operátory.
Mezi tyto operátory patří: `<=`, `<`, `>=`, `>`, které jsou běžně používané i mimo programování.
Oproti zápisu používanému v matematice je zde rozdíl v operátorech rovná se: `==` a nerovná se: `!=`.

Pojďme si je ukázat v programu.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int number = 10;

    if(number == 5) {
        rkLedBlue(true);
    }
}
```

Tato nově nabytá znalost nám umožní ukázat si, že `if` a `else` lze zkombinovat do `else if`.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int number = 10;

    if(number == 5) {
        rkLedBlue(true);
    } else if(number == 3) {
        rkLedRed(true);
    } else {
        rkLedGreen(true);
    }
}
```

##### Úkol

{:.lead}
Zkus přidat do předchozího programu rozsvícení žluté LED. Proměnná `number` bude rovna 4!

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int number = 10;

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

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int number = 10;

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

#### Logické operátory

Občas nám nestačí ani "složitější" logické výrazy, a proto potřebujeme logické výrazy. K jejich vytváření slouží logické operátory, které jsou: _AND:_`&&`, _OR:_`||` a _NOT:_`!`.

```cpp
(true && true) == true
(true && false) == false
(false && false) == false

(true || true) == true
(true || false) == true
(false || false) == false

(!true) == false
(!false) == true 
```
{:.lead}
Pojďme si vyzkoušet jejich použití!

Napíšeme si program, který zjistí zbývající energii baterie v procentech a pokud je mezi 10-100%, tak rozsvítí zelenou LED.

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

{:.lead}
Pojďme si samostatně vyzkoušet jejich použití!

Zkus rozšířit předchozí program o tři další rozsahy. 100-76% pro zelenou, 75-26% pro žlutou a 25-0% pro červenou LED.

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int batteryState = rkBatteryPercent();

    if(batteryState > 75) {
        rkLedGreen(true);
    } else if(batteryState > 25) {
        rkLedYellow(true);
    } else {
        rkLedRed(true);
    }
}
```

Alternativní přístup:

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int batteryState = rkBatteryPercent();

    rkLedGreen(batteryState > 75);
    rkLedYellow((batteryState <= 75) && (batteryState > 25));
    rkLedRed(batteryState <= 25);
}
```

{:.lead}
Jednoduché? Další je na cestě!

Zkus napsat program, který rozsvítí modrou LED pouze tehdy, pokud je `number` rovno jednomu z čísel {1, 8, 9, 13, 21, 57} za použití pouze jednoho `if`.

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int number = 10;

    if((number == 1) || (number == 8) || (number == 9) || (number == 13) || (number == 21) || (number == 57)) {
        rkLedBlue(true);
    }
}
```

#### Cyklus while

Nyní se konečně dostaneme k blikající LED!

V jazyce _C++_ jsou 2 základní cykly.
Jako první se podíváme na cyklus `while` (druhému typu cyklu se budeme věnovat v další kapitole). 

Cyklus `while` bývá také nazýván _cyklus řízený podmínkou_, proč tomu tak uvidíš v následující ukázce. Ta vytvoří _nekonečný cyklus_, neboť jeho podmínka bude vždy pravdivá. Toho se dá využít, pokud chceme, aby se nám program opakoval neustále dokola.

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

Výsledkem nahrání tohoto programu bude slibovaná donekonečna blikající modrá LED.

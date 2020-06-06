---
title: První program
layout: coding
---

# {{ page.title | escape }}

Pojďmě se nejdříve podívat na celý program:

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    
    rkLedBlue(true); // tento řádek přidáš ty - zatím ne, nejprve si pročti tuto kapitolu!
}
```

Tak málo stačí, aby se tvoje Robotka probrala k životu, a dala ti to najevo!
Tak, a teď postupně:

#### #include příkazy
```cpp
#include "robotka.h"
```
Soubor začíná **#include** příkazy, které určují, co všechno ve svém programu
můžeš používat. Nám zatím bude stačít pouze `robotka.h`.

#### Funkce
```cpp
void setup() {
    ...
}
```
{:data-linenos-offset="3"}

To, co vidíš zde, je **funkce**. Funkce jsou kusy kódu, které můžeš opakovaně
spustit tak, že znáš jejich jméno. Kód každé funkce je ohraničen znaky { a },
a uvnitř také odsazen.
Tato funkce se jmenuje `setup`, a Robotka ji sama **spustí vždy po zapnutí**.

_Poznáš v našem prvním programu i druhou funkci?_

#### Proměnné
```cpp
    rkConfig cfg;
```
{:data-linenos-offset="4"}

Zde vytváříme proměnnou, pojmenovaný kousek dat v našem programu.
Má to dvě části, _datový typ_ (`rkConfig`) a _jméno_ (`cfg`).

**Datový typ** udává, co za data se skrývá v naší proměnné. V případě `rkConfig`
je to nastavení celé Robotky,
mezi další typy, které budeme za chvilku používat patří:
*  `int` - celé číslo, např. `42`,
*  `float` - číslo s desetinnou čárkou, např. `3.14`,
*  `bool` - ano/ne, může nabývat pouze hodnot `true` nebo `false`,
*  `std::string` - textový řetězec, např. `"Ahoj!"`.


**Jméno** proměnné volíš ty. Mělo by to být něco, co vystihuje účel dané proměnné,
aby se navzájem nepletly. **Může obsahovat pouze písmena bez háčků a čárek,
podtržítka a čísla**, ale číslem nesmí začínat.

#### rkSetup
```cpp
    rkConfig cfg;
    rkSetup(cfg);
```
{:data-linenos-offset="4"}

Na řádku 5 je zavolání funkce, v tomto případě funkce pojmenované `rkSetup`. Tuto funkci jsme si
"přivezli" pomocí `#include "robotka.h"` na prvním řádku programu, což můžeš poznat podle toho,
že její jméno začíná na písmena `rk`.

Předáváme jí proměnnou s nastavením pojmenovanou `cfg` (zatím v nastavení nic neměníme).

{:.important}
**`rkSetup()`** je **potřeba zavolat na začátku každého programu** pro Robotku! Tato funkce zajistí,
že je pro vás vše řádně nastaveno a připraveno.


#### Tvůj kód
Konečně se dostáváme k tomu zajímavému, Robotka bude něco dělat!

```cpp
    rkLedBlue(true);
```
{:data-linenos-offset="7"}

Přepiš tento řádek na správné místo do tvého programu (před `}`, která ukončuje
funkci `setup` - pokud nevíš kam, koukni se na celý program na začátku této kapitoly).

{:.info}
{% include image.html
    url="img/guides/first_prog_02a.png"
    description=
        "Všimni si, že při psaní ti VSCode napovídá. Stačí napsat `rk` a už uvidíš všechny metody, které můžeš používat na ovládání Robotky."
    singlecol=true
 %}

{:class="info mb-xl"}
{% include image.html
    url="img/guides/first_prog_02b.png"
    description=
        "Když na nějakou metodu najedeš myší, VSCode ti také ukáže, co daná metoda dělá. Všechny tyto informace **[najdeš také v dokumentaci](https://roboticsbrno.github.io/RB3201-RBControl-Roboruka-library/modules.html)**."
    singlecol=true
 %}

{:.important}
**Nyní program nahraj do Robotky** kliknutím na šipku vlevo dole, stejně jako v kapitole [Dálkové ovládání]({{"/coding/001_dalkove_ovladani.html#nahrání-programu-do-robotky"|relative_url}}).
Měla by se rozsvítit modrá LED.

<br>

#### Úkol

{:.lead}
Zkus rozsvítit i ostatní barvy LED!

Použij napovídání ve VSCode a zavolej další funkce na rozsvícení ostatních LED.

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    rkLedBlue(true);
    rkLedGreen(true);
    rkLedRed(true);
    rkLedYellow(true);
}
```

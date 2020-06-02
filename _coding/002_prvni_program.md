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
    
    rkLedBlue(true);
}
```

Tak málo stačí, aby se vaše Robotka probrala k životu, a dala vám to najevo!
Tak, a teď postupně:

#### #include příkazy
```cpp
#include "robotka.h"
```
Soubor začíná **#include** příkazy, které určují, co všechno ve vašem programu
můžete dělat. Nám zatím bude stačít pouze `robotka.h`.

#### Funkce
```cpp
void setup() {
    ...
}
```
{:data-linenos-offset="3"}

To, co vidíme zde, je **funkce**. Funkce jsou kusy kódu, které můžete opakovaně
spustit tak, že znáte jejich jméno. Kód každé funkce je ohraničen znaky { a },
a uvnitř také odsazen.
Tato funkce se jmenuje `setup`, a Robotka ji sama **spustí vždy po zapnutí**.

_Poznáte v našem prvním programu i druhou funkci?_

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


**Jméno** proměnné volíte vy. Mělo by to být něco, co vystihuje účel dané proměnné,
aby jste si je navzájem nepletli. **Může obsahovat pouze písmena bez háčků a čárek,
podtržítka a čísla**, ale číslem nesmí začínat.

#### rkSetup
```cpp
    rkConfig cfg;
    rkSetup(cfg);
```
{:data-linenos-offset="4"}

Na řádku 5 je zavolání funkce, v tomto případě funkce pojmenované `rkSetup`. Tuto funkci jsme si
"přivezli" pomocí `#include "robotka.h"` na prvním řádku programu, což můžete poznat podle toho,
že její jméno začíná na písmena `rk`.

Předáváme jí proměnnou s nastavením pojmenovanou `cfg` (zatím v nastavení nic neměníme).

{:.important}
**`rkSetup()`** je **potřeba zavolat na začátku každého programu** pro Robotku! Tato funkce zajistí,
že je pro vás vše řádně nastaveno a připraveno.


#### Váš kód
Konečně se dostáváme k tomu zajímavému, Robotka bude něco dělat!

```cpp
    rkLedBlue(true);
```
{:data-linenos-offset="7"}

Zavoláním této funkce řekneme robotce aby rozsvítila (`true`) modrou LED.
Teď zkuste program zkompilovat a nahrát  (TODO: přidat link) do robota. Funguje? :)

_Zkuste rozsvítit i ostatní barvy LED!_

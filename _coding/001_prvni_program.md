---
name: První program
layout: coding
---

# {{ page.name | escape }}

Pojďmě se nejdříve podívat na celý program:

```cpp
#include "robotka.h"

void setup() {
    rkSetup();
    
    rkLedBlue(true);
}

void loop() {
}
```

Tak málo stačí, aby se vaše Robotka probrala k životu, a dala vám to najevo!
Tak, a teď postupně:

#### #include příkazy
```cpp
#include "robotka.h"
```
Soubor začíná **#include** příkazy, které určují, co všechno ve vašem programu můžete dělat. Nám zatím bude stačít pouze `robotka.h`.

#### Funkce
```cpp
void setup() {
    ...
}
```
{:data-linenos-offset="3"}

To, co vidíme zde, je **funkce**. Funkce jsou kusy kódu, které můžete opakovaně spustit tak, že znáte jejich jméno. Kód každé funkce je ohraničen znaky { a }, a uvnitř také odsazen.
Tato funkce se jmenuje `setup`, a Robotka ji sama **spustí vždy po zapnutí**.

_Poznáte v našem prvním programu i druhou funkci?_

#### rkSetup()
```cpp
    rkSetup();
```
{:data-linenos-offset="4"}

Takto vypadá zavolání funkce, v tomto případě funkce pojmenované `rkSetup`. Tuto funkci jsme si
"přivezli" pomocí `#include "robotka.h"` na prvním řádku programu, což můžete poznat podle toho,
že její jméno začíná na písmena `rk`.

{:.important}
**`rkSetup()`** je **potřeba zavolat na začátku každého programu** pro Robotku! Tato funkce zajistí,
že je pro vás vše řádně nastaveno a připraveno.



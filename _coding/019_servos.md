---
title: Serva (hloupá)
layout: coding
---

# {{ page.title | escape }}

#### Motivace
V situacích, kdy má robot s něčím pohybovat, například s klepety pro úchop předmětů, je možné využít serva. Serva jsou speciálním typem motoru, který umožňuje poměrně přesné otáčen i o malé úhly. Oproti klasickým motorům jsou limitovány úhlem, ve kterém se mohou otáčet. Výhodou serv je, že se snaží udržet si daný úhel i když se ho snaží něco pootočit.

#### Práce se servy
- `rkServosSetPosition` - Nastaví pozici serva na novou. Očekává číslo serva a nový úhel, jako parametry. Číslo serva je hodnota od 1 do 4. Úhel je možné nastavit v rozsahu `-90°` - `90°`
- `rkServosGetPosition` - Vrací naposledy navrácenou pozici serva (hodnotu, která byla nastavena posledním voláním funkce `rkServosSetPosition`). Vyžaduje číslo serva jako parametr, v rozmezí 1 - 4. Funkce vrací hodnotu v rozsahu -90 až 90 (stupňů).
- `rkServosDisable` - Jakmile není zapotřebí, aby servo drželo svoji pozici, například není zapotřebí nic uchopit, je možné použít touto funkci, která je vypne. Tato funkce vyžaduje jeden parametr a to číslo serva 1 - 4, které má být odpojeno. Tato funkce nevrací žádnou hodnotu.

###### Úkázka pootočení serva do nové pozice
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
   
    rkServosSetPosition(1, 50); // nastav hodnotu serva 1 na 50 stupnu
}
``` 
Předchozí ukzka pootočí servem na úhel 50 stupňů. Následující ukázka ukazuje, jak pohybovat servem od jednoho krajního úhlu k druhému.

###### Úkázka pootočení serva do nové pozice
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    while(true){
        for(int uhel = -90; uhel <= 90; uhel++ ){   // otacej servem od -90 do 90
            rkServosSetPosition(1, 50);
        }

        for(int uhel = 90; uhel >= -90; uhel-- ){   // otacej servem od 90 do -90
           rkServosSetPosition(1, 50);
        }
    }
    rkServosDisable(1);
}
``` 
Předchozí ukázka pohybuje servem opakovaně od -90° do 90° a poté od 90° do -90°. Nakonec deaktivuje servo
---
title: Komentáře
layout: coding
---

# {{ page.title | escape }}
#### Komentáře
V průběhu programování je slušnost popsat svůj program pomocí komentářů. Funguje to podobně jako v prodejně aut. Auto sice každý vidí, ale nezná potřebné informace s nim spojené, jako je rychlost, náhon, co je zapotřebí do auta tankovat a tak dále. Komentář je pro nás, robot ho ignoruje. 

Typty komentářů: 
1. jednořádkové
Označují se `//` a cokoliv za těmito lomítky až do konce řádku.
2. víceřádkové
Pro vložení více řádků do komentáře se používá `/*` značící začátek komentáře a `*/` označuje konec komentáře. Vše, co se nachází mezi těmito značkami je zakomentováno.

Příklad:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    // jeden radek komentare

    /*
        vice radku
        komentaru
    */
}
```
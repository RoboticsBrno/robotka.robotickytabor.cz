---
title: Funkce
layout: coding
---

# {{ page.title | escape }}

#### Motivace
Doteď jsme jednotlivé problémy řešili zadáním několika řádků s příkazy. Například pro blikání s LED jsme použili:
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    while(1){
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);
    }
}

```
Teď už víme, že pro rozblikání LED stačí provést opakovaně 4 dílčí kroky: rožni LED, počkej 0,5s, zhasni LED, počkej 0,5s. Pokud bychom se ovšem rozhodli, provést blikání na různých místech v programu podle hodnoty v proměnné, museli bychom tyto kroky rozkopírovat do všech těchto míst. Program by následně vypadal takto:  
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int pocet_bliknuti = 1;

    if(LED == 1){   // blikne 1x
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);
    }
    else if(LED == 1){ // blikne 2x
        // 1. bliknuti
        rkLedGreen(true);
        delay(500);
        rkLedGreen(false);
        delay(500);

        // 2. bliknuti
        rkLedGreen(true);
        delay(500);
        rkLedGreen(false);
        delay(500);
    }
}
```
Program je poměrně dlouhý a přitom by bylo možné zapsat ho pomocí funkcí například takto:
```cpp
#include "robotka.h"

void blikni(){ // vytvoření funkce na blikani
    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);
}

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    int pocet_bliknuti = 1;

    if(LED == 1){   // blikne 1x
        blikni();
    }
    else if(LED == 1){ // blikne 2x
        // 1. bliknuti
        blikni();

        // 2. bliknuti
        blikni();
    }
}
```
Hlavním úkolem funkcí je zabalit náš kód a nehledě na jeho délce (počtu příkazů), stačí použít pouze jméno této funkce a kulatých závorek.

#### Definice
Abychom mohli funkce vůbec používat, neboli volat, je důležité si ji vytvořit (definovat). Definice určuje, zda po zavolání dané funkce dostaneme nějaký výsledek (návratová hodnota) nebo zda pro očekává nějaké hodnoty pro svoji činnost (parametry). Funkci ze potřebí definovat před funkcí setup(), která se nachází v našem programu. Zjednodušeně vypadá definice funkce následovně:

```cpp
návratový_typ nazev_funkce( seznam_parametru ){ // vytvoření funkce na blikani
    ...nas program...
}
```

Jednotlivé části jsou popsány v kapitolách níže.


#### Návratová hodnota
Návratová hodnota určuje, zda po provedení naší funkce dostaneme nějaký výsledek nebo ne. Například můžeme mít funkci `secti()`, u které budeme očekávat návratovou hodnotu a to typu celé číslo (int). Naopak u funkce `vypis_cislo()` nebudeme žádnou hodnotu očekávat, protože chceme aby pouze něco vypsala.

Návratové typy jsou stejné, jaké jsme doteď používali u proměnných a to: `int` (celé číslo), `float` (desetinné číslo), `char` (znak) a `std::string`. U funkcí ovšem dostáváme jeden nový typ a to `void`. Tento typ nám říká, že nečekáme žádný výsledek po dokončení funkce.

Příklad 1: Funkce typu `void` pro bliknutí:
```cpp
void blikni(){ // vytvoření funkce na blikani
    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);
}
```

#### Parametry
Pokud chceme zadat funkci nějaké hodnoty, se kterými chceme, aby pracovala, tak použijeme parametry. Funkce může mít parametry, ale také nemusí, záleží jak ji nadefinujeme. Například pro funkci, která má sčítat 2 celých čísel, u které čekáme návratový typ `int` může být definovaná:
1. bez parametrů
```cpp
int secti(){ // vytvoření funkce na blikani
    int cislo_1 = 10; 
    int cislo_2 = 3;

    return cislo_1 + cislo_2;
}
```

2. s parametry
```cpp
int secti(int cislo_1, int cislo_2){ // vytvoření funkce na blikani
    return cislo_1 + cislo_2;
}
```

Rozdíl je v tom, že v první uvedené sčítací funkci dostaneme při každém volání číslo 13, zatím co u druhého příkladu je možné tyto dvě hodnoty zadat sám. Pokud tedy budu chtí sečíst číslo 5 a 9, zavolám funkci takto `int secti(5,9);` a tak dále. 

Mohli jste si povšimnout nového slova `return`. Tento příkaz ukončí funkci a navrátí výsledek, který mu předáme. Například `return 5` vrátí číslo 5. Zjednodušeně si můžeme představit, že na místě, kde voláme funkci, například s celočíselnou návratovou hodnotou, bude nahrazena tato funkce za danou hodnotu. Příkladem může být například výraz `int soucet = secti(5,8);` bude nahrazeno za `int soucet = 13;`.

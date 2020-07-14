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
Teď už víme, že pro rozblikání stačí provést opakovaně 4 dílčí kroky: rozsviť LED, počkej 0,5 s, rozsviť LED, počkej 0,5 s. Pokud bychom se ovšem rozhodli, provést blikání na různých místech v programu podle hodnoty v proměnné, museli bychom tyto kroky vložit do všech těchto míst. Program by následně vypadal takto:  
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

Jak ukazuje ukázka výše, je náš program výrazně kratší a hlavně přehlednější. Přehlednost hlavně spočívá v záměně 4 náhodných řádků za jednu pojmenovanou funkci, u které se podle názvu dá zjistit, co asi dělá. Hlavním úkolem funkcí je zabalit náš kód a nehledě na jeho délce (počtu příkazů), stačí použít pouze jméno této funkce a kulatých závorek.

#### Definice
Abychom mohli funkce vůbec používat, neboli volat, je důležité si ji vytvořit (definovat). Definice určuje, zda po zavolání dané funkce dostaneme nějaký výsledek (návratová hodnota) nebo zda pro očekává nějaké hodnoty pro svoji činnost (parametry). Funkci ze potřebí definovat před funkcí setup(), která se nachází v našem programu. Zjednodušeně vypadá definice funkce následovně:

```cpp
návratový_typ nazev_funkce( seznam_parametru ){ // vytvoření funkce na blikani
    ...nas program...
}
```

Jednotlivé části jsou popsány v kapitolách níže. Co se týče názvu funkcí, je celkem zaběhlé pojmenovávat je pomocí slovesa. Tudíž funkci pro sčítání nepojmenujeme jako `sčítání`, ale `sečti`. Obdobě jsou vhodně pojmenované například tyto funkce: `odečti`, `otoč_se`, `jdi`, `zablikej`, `piskni` a mnoho dalších.


#### Návratová hodnota
Návratová hodnota určuje, zda po provedení naší funkce dostaneme nějaký výsledek nebo ne. Například funkce `secti()`, která bude sčítat celá čísla, bude mít návratovou hodnotu součtu a to typu celé číslo (int). Naopak u funkce `vypis_cislo()` nebudeme žádnou hodnotu očekávat, protože chceme aby pouze něco vypsala.

Návratové typy jsou stejné, jaké jsme doteď používali u proměnných a to: `int` (celé číslo), `float` (desetinné číslo), `char` (znak) a `std::string`. Vyskytuje se tu ovšem jeden nový typ `void`. Tento typ nám říká, že nečekáme žádný výsledek po dokončení funkce.

Příklad 1: Funkce typu `void` pro bliknutí:
```cpp
void blikni(){ // vytvoření funkce na blikani
    rkLedBlue(true);
    delay(500);
    rkLedBlue(false);
    delay(500);
}
```
Neočakáváme žádný výsledek, proto uvedeme `void`.

#### Parametry
Pokud chceme zadat funkci nějaké hodnoty, se kterými bude pracovat, tak použijeme parametry. Funkce může mít libovolný počet parametrů, který zadáváme při definici, kde u každého parametru uvedeme typ a jméno (stejně jako bychom vytvořili proměnnou). Jméno parametru se využívá uvntř funkce. Při zadávání parametrů funkce, při jejím volání, se musí dodržet pořadí parametru i typ, podle toho, jak jsme si to nadefinovali.
Pokud tedy vytvoříme funkci:
```cpp
int jmeno(int x, float y, char z){ 
    ...náš program...
}
```
Je nutné předat právě tři parametry a to typu `int`, `float` a `char` v tomto pořadí. 

Ukázka funkce pro sčítání bez parametrů a s nimi:
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

Rozdílem je, že v první uvedené sčítací funkci dostaneme při každém volání číslo 13 (neobsahuje žádné parametry, tudíž ji nemůžeme zadat jinou hodnotu), zatím co u druhého příkladu je zadáváme. Pokud tedy budu chtí sečíst číslo 5 a 9, zavolám funkci takto `int secti(5,9);` a tak dále. Zároveň si povšimněte, že u druhé sčítací funkce očekávám dva parametry `cislo_1` a `cislo_2` oba typu celé číslo, kde je oba používám uvnitř samotné funkce.

Mohli jste si povšimnout nového slova `return`. Tento příkaz ukončí funkci a navrátí předaný výsledek. Například `return 5` vrátí číslo 5. Zjednodušeně si můžeme představit, že po návratu výsledku, například celé číslo, bude nahrazena tato funkce za danou hodnotu. Příkladem může být například výraz `int soucet = secti(5,8);` bude nahrazeno za `int soucet = 13;`. Příkaz `return` musí vracet hodnotu stejného typu, jakou uvádíme návratovou hodnotu funkce, při její definici.
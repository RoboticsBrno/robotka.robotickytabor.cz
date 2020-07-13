---
title: Počítání s Robotkou
layout: coding
---

# {{ page.title | escape }}

#### Sériová linka

Nyní jsme se dostali do fáze, kdy nám rozsvěcení LED na některé příklady stačit nebude. Proto si představíme funkci `printf`. Ta bere minimálně jeden parametr ve formě textového řetězce - jedná se o tzv. formátovací řetězec. Ten může vypadat následujícím způsobem:

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    printf("Hello world!\n");
}
```

Text uzavíráme do uvozovek a znaky `\n` na konci textu označují přechod na nový řádek. Dokud není řádek kompletní, nic se nevypisuje.

S tímto typem výpisu si však vystačíme málokdy. Ve většině případů potřebujeme vypisovat i nějaké hodnoty a to nám umožňují takzvané formátovací direktivy a volitelné parametry `printf`.

```cpp
#include "robotka.h"

void setup() {
    int age = 15;
    int favouriteNumber = 10;

    rkConfig cfg;
    rkSetup(cfg);

    printf("Moje oblibene cislo je: %i mam %i let.\n", favouriteNumber, age);
}
```
Formátovací direktivou v tomto příkladu je `%d`.
Formátovací direktiva vždy začíná `%`, následují znaky, které poté udávají konkrétní parametry této direktivy. Její poslední znak udává datový typ vypisované proměnné, v našem případě se jedná o `i` neboli integer (`int`).

Kromě formátovací direktivy je však potřeba přidat také další parametr do, který udává jaké proměnné se vlastně mají vypsat a to v pořadí v jakém jsou uvedené ve formátovacím řetězci.

Více o formátovacích řetězcích najdete na [wikipedii](https://cs.wikipedia.org/wiki/Printf#Formátovací_řetězec).

{:.important}
Při výpisu **std::string** je potřeba dopsat za jméno proměnné **.c_str()**!
Pokud tak neučiníte Bude vám funkce vypisovat nesmysly, může dokonce "rozbít" celý program.
```cpp
    std::string myString = "Hi there";
    printf("%s\n", myString.c_str());
```

{:.lead}
Zkus si s pomocí wikipedie vypsat i hodnoty jiných datových typů.

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    int age = 15;
    int favouriteNumber = 10;
    float pi = 3.14;
    std::string text = "Hi there!";

    rkConfig cfg;
    rkSetup(cfg);

    printf("Moje oblibene cislo je: %i a mam %i let.\n", favouriteNumber, age);
    printf("Hodnota cisla PI je: %f\n", pi);
    printf("Muj program rika: %s\n", text.c_str());
}
```

Dále máme také přístup k speciálním znakům, jako je nový řádek, tabulátor a další.
Nám bude prozatím stačit nový řádek: `\n` a tabulátor `\t`. 

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    printf("This is on first line.\nThis is on second line.\n");
}
```

#### Aritmetické operátory

Často potřebujeme v programu něco spočítat.
K tomu slouží aritmetické operátory.
Kromě základních operací (`+`, `-`, `*`, `/`) máme k dispozici i _modulo_ `%`, které slouží k určení zbytku po dělení. Používá se stejně jako ostatní aritmetické operátory.

```cpp
2 + 3 == 5
2 - 3 == 1
2 * 3 == 6
6 / 3 == 2
5 % 2 == 1
```

{:.lead}
Pojďme je vyzkoušet použít!

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    printf("2 + 3 = %d\n", 2 + 3);
    printf("2 - 3 = %d\n", 2 - 3);
    printf("2 * 3 = %d\n", 2 * 3);
    printf("6 / 5 = %f\n", 6 / 5);
    printf("5 % 2 = %d\n", 5 % 2);
}
```

{:.important}
Proč je na 10. řádku direktiva pro desetinné a nikoliv celé číslo?
```cpp
    printf("6 / 5 = %f\n", 6 / 5);
```
{:data-linenos-offset="10"}
Je to proto, že výsledek `6 / 5` není celé, ale desetinné číslo.

{:.info}
Pokud bychom výsledek **neceločíselného dělení** ukládali do **celočíselné proměnné**, dojde k oříznutí **(nikoliv zaokrouhlení)** čísla.
Přebytečná místa budou tedy jednoduše odstraněna, což může zkreslit výsledné číslo.
```cpp
    int number = 9 / 5;
    number == 1
```

#### Aritmetické přiřazovací operátory

Při programování je nutné si uvědomovat, že samotným jeho účelem je zjednodušit člověku práci.
Je tedy samozřejmé, že se programátoři snaží snížit počet znaků, které musí napsat (primárně zbavením se opakujících se částí).
Vezměme jednoduchý příklad, ve kterém zvyšujeme hodnotu proměnné `number` o 2:

```cpp
#include "robotka.h"

void setup() {
    int number = 2;

    rkConfig cfg;
    rkSetup(cfg);

    number = number + 2;
    // number += 2; 
    printf("Vysledek je: %i\n", number);
}
```

Přičtení hodnoty 2 k proměnné number je možné provést i její zkrácenou verzí `number += 2;`, která je ukázána v předchozím kódu. Stejně tak to platí i pro ostatní operátory, nappříklad vynásobení proměnné number číslem 2: `number *= 2;`.

{:.lead}
Vyzkoušej si upravit následující kód upravit tak, aby byly použity **přiřazovací operátory**.

```cpp
#include "robotka.h"

void setup() {
    int number = 2;

    rkConfig cfg;
    rkSetup(cfg);

    number = number + 10;
    printf("Vysledek je: %i\n", number);
    number = number - 2;
    printf("Vysledek je: %i\n", number);
    number = number / 2;
    printf("Vysledek je: %i\n", number);
    number = number * 2;
    printf("Vysledek je: %i\n", number);
    number = number % 3;
    printf("Vysledek je: %i\n", number);
}
```

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    int number = 2;

    rkConfig cfg;
    rkSetup(cfg);

    number += 10;
    printf("Vysledek je: %i\n", number);
    number -= 2;
    printf("Vysledek je: %i\n", number);
    number /= 2;
    printf("Vysledek je: %i\n", number);
    number *= 2;
    printf("Vysledek je: %i\n", number);
    number %= 3;
    printf("Vysledek je: %i\n", number);
}
```

{:.info}
Mezi přiřazovací operátory patří také nám již známé `=`.
Patří sem také další operátory, o těch si ale povíme později.

#### Unární operátory

Speciální kategorií operátorů jsou **unární operátory**. Operátory, které dosud známe přebírají dva parametry (jeden zleva, druhý zprava). Narozdíl od nich používají unární operátory pouze jeden parametr. 

Existují dva unární operátory, vznikly jako snaha o zkrácení psaného kódu.
První je `++` a druhý je `--`.
Nepoužívají se však ve výrazech, ale pouze jako příkazy, viz ukázku.
`++` přičte k proměnné 1 a `--` 1 odečte.

```cpp
int number = 5;
number++;
number == 6
number--;
number == 5
```

##### Úkol 1

{:.lead}
Vyzkoušej si s pomocí nově nabytých vědomostí napsat cyklus `while`, který vypíše "Hello world!" přesně 5x.

{:.spoiler}
```cpp
#include "robotka.h"
void setup() {
    int number = 0;

    rkConfig cfg;
    rkSetup(cfg);

    while(number < 5) {
        printf("Hello world!\n");
        number++;
    }
}
```

#### For cyklus

Aniž by jsi to věděl, jsi si v předchozím úkolu napsal vlastní verzi **for cyklu**.
"For" cyklus se používá, pokud víme kolikrát se má daná část kódu opakovat, říká se mu proto **proměnou řízený cyklus**.
Když se podíváme na naši verzi for cyklu zjistíme, že obsahuje 3 nepostradatelné části:

1. vytvoření řídící proměnné s počáteční hodnotou
2. určení maxima, nebo podmínky ukončení cyklu
3. určení **kroku**, kolik se přičte/odečte při každém opakování

```cpp
#include "robotka.h"

void setup() {
    int number = 0; //definici řídící proměnné s počáteční hodnotou
    rkConfig cfg;
    rkSetup(cfg);

    while(number < 5) { //určení maxima
        printf("Hello world!\n");
        number++; //určení kroku
    }
}
```

Teď už se podíváme na opravdový for cyklus, ten pro stejný příklad vypadá následovně:

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    for(int i = 0; i < 5; i++) {
        printf("Hello world!\n");
    }
}
```

{:.important}
Všimni si, že parametry for cyklu jsou odděleny středníky a nikoliv čárkami, je to proto, že se jedná o příkazy, nikoliv výrazy/proměnné.

{:.info}
Nejběžněji používané jméno řídící proměnné je i, doporučuji ho používat neboť bude jednodušší tvému kódu rozumět. **Toto neplatí u více vnořených for cyklů!**

##### Úkol 2

Vyzkoušej si napsat program, který postupně s 250ms zpožděním rozsvítí všechny LED.
Pro toto použití je zde funkce `rkLedById`, první parametrem této funkce je id LED kterou chceme ovládat, druhým parametrem je stav, který chceme do LED nastavit.
První LED má id 1 a poslední 4.

Analýza:

{:.spoiler}
```cpp
// První id je 1 tudíž i počáteční hodnota bude 1.

// Poslední id je 4, máme tedy na výběr dvě možnosti:
// 1. v podmínce použijeme `<` a k maximálnímu id přičteme 1 (i < 5)
// 2. v podmínce použijeme `<=` a maximální hodnotu zachováme (i <= 4)

// Budeme postupovat po 1 tudíž na krok použijeme příkaz `i++`
```

Řešení:

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    for(int i = 0; i < 5; i++) {
        rkLedById(i, true);
        delay(250);
    }
}
```

##### Úkol 3

{:.lead}
Zkus LED ve stejném pořadí po 2 vteřinách také vypnout.

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    for(int i = 0; i < 5; i++) {
        rkLedById(i, true);
        delay(250);
    }
    for(int i = 0; i < 5; i++) {
        rkLedById(i, false);
        delay(250);
    }
}
```

Stejně jako může for cyklus přičítat, může také odečítat a tudíž fungovat v opačném pořadí.

{:.lead}
Zkus otočit pořadí ve kterém se LED zapínají a vypínají.

{:.spoiler}
```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    for(int i = 4; i > 0; i--) {
        rkLedById(i, true);
        delay(250);
    }
    for(int i = 4; i > 0; i--) {
        rkLedById(i, false);
        delay(250);
    }
}
```
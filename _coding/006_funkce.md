---
title: Funkce
layout: coding
---

# {{ page.title | escape }}

#### Definice vs Deklarace
Předtím, než zažneme s funkcemi, si musíme vysvětlit pár pojmů.
V _C++_ se rozlišuje mezi **deklarací** a **definicí**.
**Deklarace** pouze říká, že proměnná/funkce existuje a jak vypadá.
**Definice** přímo určuje jakou hodnotu bude proměnná na začátku mít, nebo co bude funkce dělat.

```cpp
int a; //declaration
int b = 10;//definition
```

{:.important}
Když robot "čte" program, dělá tak od vrchu dolů, což může být problém.

Příklad 1:
```cpp
#include "robotka.h"


void setup() {
    int a = 4;
    rkLedById(a, true);
}
```
Program výše bude fungovat bez problému.

Příklad 2:
```cpp
#include "robotka.h"


void setup() {
    #include "robotka.h"

    rkLedById(a, true);
    int a = 4;
}
```

Tento program fungovat nebude, protože proměnná a je použita dříve než je definována.

V těchto dvou příkladech to může vypadat jednoduše, ale u funkcí to nemusí být tak zřejmé.

Příklad 1:
```cpp
#include "robotka.h"

void writeHi() {
    printf("Hi!\n");
}

void setup() {
    writeHi();
}
```
Tento program bude fungovat bez problému.

Příklad 2:
```cpp
#include "robotka.h"

void setup() {
    writeHi();
}

void writeHi() {
    printf("Hi!\n");
}
```
Tento program fungovat nebude, protože funkce a je volána dříve než je definovaná/deklarována.

Příklad 3:
```cpp
#include "robotka.h"

void writeHi();

void setup() {
    writeHi();
}

void writeHi() {
    printf("Hi!\n");
}
```

Tento program fungovat bude, i přestože funkce je definovaná až potom co je volána, protože je před tím, než je volána alespoň deklarovaná.

#### Funkce bez parametrů a návratové hodnoty

Nejjednoduššími funkcemi jsou funkce bez parametrů a návratové hodnoty.
Jejich předpis vypadá následovně:
```cpp
void name(){
    //code here
}
```
Jako obvykle si jméno volíme sami.

#### Parametry funkce

Důležitou součástí funkcí jsou parametry.
Parametry jsou hodnoty, které funkci předáváme.
Píší se do závorky za jméno funkce ve formátu deklarace proměnné.
Příklad je upravená verze kódu pro postupné zapínání/vypínání LED.

```cpp
#include "robotka.h"

void showLoading(bool i_state, bool i_downward, int i_delay);

void setup() {
    showLoading(true, false, 250);
}

void showLoading(bool i_state, bool i_downward, int i_delay) {
    if(i_downward){
        for(int i = 4; i > 0; i--) {
            rkLedById(i, i_state);
            delay(i_delay);
        }
    } else {
        for(int i = 0; i < 5; i++) {
            rkLedById(i, i_state);
            delay(i_delay);
        }
    }
}
```

Důvod pro používání krásně demonstruje předchozí příklad.
Funkce nám umožní rozdělit kód na menší, lépe srozumitelné bloky. 
Nemusíme se tedy při jejich psaní starat o zbytek kódu, ale staráme se pouze o kód funkce.
Další výhodou je opakovatelnost - funkce můžeme využít víc jak jednou, což je výhoda, neboť je mnohem jednodušší opakovat jeden řádek kódu místo spousty dalších.

#### Výchozí hodnoty parametrů

Parametrům lze v deklaraci přiřadit výchozí hodnotu, díky tomu již nemusím daný parametr při volání funkce vyplňovat.

```cpp
#include "robotka.h"

void showLoading(bool i_state, bool i_downward = false, int i_delay = 255);

void setup() {
    showLoading(true);
    showLoading(false);
}

void showLoading(bool i_state, bool i_downward, int i_delay) {
    if(i_downward){
        for(int i = 4; i > 0; i--) {
            rkLedById(i, i_state);
            delay(i_delay);
        }
    } else {
        for(int i = 0; i < 5; i++) {
            rkLedById(i, i_state);
            delay(i_delay);
        }
    }
}
```

Tím, že jsme nastavili výchozí parametry jsme si potenciálně ušetřili vypisování dvou parametrů při každém volání.
Není vhodné nastavovat všem parametrům výchozí hodnotu, čiňte tak jenom u parametrů jejichž hodnota by byla ve většině případů stejná.

{:.important}
Jakmile nastavíte jednomu parametru výchozí hodnotu, všechny parametry, které následují za ním ji musí mít nastavenou také.
Jinak by počítač nepoznal, která hodnota náleží kterému parametru!

{:.info}
Výchozí parametry jsou použity třeba u zapínání LED.
Na zapínání LED tedy stačí volat `rkLedBlue()` místo `rkLedBlue(true)`.
U vypínání je ale stále potřeba psát parametr: `rkLedBlue(false)`.

##### Úkol 1

Zkus napsat funkci která do sériové linky vypíše, jestli je zadané číslo beze zbytku dělitelné jiným zadaným číslem.

Parametry:
* dělenec
* dělitel
    * výchozí hodnota 2 pro zjišťování sudosti a lichosti 

{:.spoiler}
```cpp
#include "robotka.h"

void dividable(int i_divident, int i_divisor = 2);

void setup() {
    dividable(6, 3);
    dividable(6);
}

void dividable(int i_divident, int i_divisor){
    if(!(i_divident % i_divisor)) {
        printf("%i je delitelne %i\n", i_divident, i_divisor);
    } else {
        printf("%i neni delitelne %i\n", i_divident, i_divisor);
    }
}
```

#### Funkce s návratovou hodnotou

Občas se nám hodí, když funkce může vrátit nějaký výsledek, kupříkladu pokud bychom chtěli dosazovat do nějakého vzorce.

Tyto funkce potřebují udat datový typ, který budou vracet. Poslední příkaz každé větve potom bude `return` následované proměnnou jejíž hodnotu chceme vracet.

```cpp
#include "robotka.h"

bool dividable(int i_divident, int i_divisor = 2);

void setup() {
    bool test;
    test = dividable(6, 3);
}

bool dividable(int i_divident, int i_divisor){
    bool out = false;
    out = !(i_divident % i_divisor);
    return out;
}
```

```cpp
#include "robotka.h"

int sum(int a, int b); 

void setup() {
    printf("Soucet 2 + 3 = %i\n", sum(2, 3));
}

int sum(int a, int b) {
    return a + b;
}
```
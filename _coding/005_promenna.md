---
title: Proměnná
layout: coding
---

# {{ page.title | escape }}

#### Motivace
V pruběhu programování je často nezbytné uchovat si nějakou hodnotu na budoucí použítí. Může se jednat o výsledek matematicé rovnice, počítadlo kroků, uchování minimální nebo maximální hodnoty a tak dále. Pro tento účel se používají proměnné. Můžeme si ji jednoduše představit jako přihrádku na ponožky. Jakmile si chceme ponožky někam uchovat, otevřeme přihrádku, do které následně tyto ponožky dáme. Jakmile si je chceme vzít, tak ji máme uchovanou v této přihrádce připravenou k použití.

#### Vytvoření proměnné
Proměnnou je možné vytvořit, takzvaně definovat, následující konstrukcí:
`typ_promenne jmeno_promenne = hodnota;`

Typ proměnné říká, co se bude do proměnné ukládat, například celá čísla (stejně jako když máme vyhrazenou přihrádku na ponožky a nedáváme tam trička). Jméno nám umožňuje odlišovat jednotlivé proměnné mezi sebou, proto nesmí mít dvě proměnné stejný název. Název se jinak může skládat ze znaků anglické abecedy, číslic a speciálních znaků, jako je například `_`, které doporučuji použít v případě, kdy je proměnná složena z více slov, například: `levy_motor`. Pomocí operátoru `=` je možné uložit hodnotu do proměnné. Dobrým zvykem je pojmenovávat proměnné pomocí podstatného jména. 

#### Základní datové typy proměnných
Určuje, co může být v proměnné uchováno: 
- `int` udává celé číslo
- `float` značí desetinné číslo
- `char` označuje jeden znak -> znak se udává v apostrofech, například 'c' označuje znak c
- `bool` pravdivostní hodnota -> `true` pro pravdu a `false` pro nepravdu
- `std::string` udává řetězec znaků -> řetězec se ohraničuje uvozovkami, například "Ahoj svete"

#### Operace s proměnnými
Proměnné můžeme sčítat, odečítat, násobit i dělit. Pro sčítání se používá `+`, pro odečítání `-`, násobí se pomocí `*` a dělí `/`. Následující příklad ukazuje, jak je možné zvýšit hodnotu proměnné o hodnotu 10.

```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);
    int promenna_1 = 0;
    promenna_1 = promenna_1 + 10;
    // je možné toto sčítání zapsat i takto
    // promenna_1 += 10; 
}
```

Pokud bychom chtěli danou proměnnou zvýšit pouze o hodnotu 1, například z 0 na 1, můžeme použít i zápis `promenna_1++;` a stejně tak i pro odečítání hodnoty 1 od proměnné `promenna_1--;`. 


#### Ukázka vytvoření různých proměnných
```cpp

// proměnná pro celá čísla se jménem cele_cislo, ve které je hodnota 0
int cele_cislo = 0;  
// promenna pro desetinne cislo ve které je hodnota 3.14
float desetinne_cislo = 3.14;    
// proměnná znak, do které jsme uložili znak 'a'
char znak = 'a';    
// proměnná otevreno, do které jsme uložili hodnotu pravda (true)
bool otevreno = true; 
// proměnná pro textový řetězec s hodnotou "nejaky text"
std::string text = "nejaky text"; 
```

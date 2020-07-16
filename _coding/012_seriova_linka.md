---
title: Sériová linka
layout: coding
---

# {{ page.title | escape }}

#### Motivace
V některých případech potřebujeme komunikovat s naším robotem. Například když se snažím odhalit chybu, vypisovat hodnotu senzorů nebo informovat uživatel o ději v programu. Pro tento účel nám poslouží sériová linka.

#### Sériová linka
Pro komunikaci s PC je možné použít funkci`printf`. Tato metoda je oproti již předchozím metodám rozdílná v tom, že nemá pevný počet parametrů. To ale znamená, že je zapotřebí dodržet jistá pravidla formátu těchto parametrů, aby to vůbec fungovalo.

###### Výpis textu
```cpp
    printf("Hello world!\n");
```
Tato funkce vypíše text "Hello world!" v terminálu počítače. Tento terminál je možné otevřít v modrém spodním řádku `PlatformIO` (ikona zásuvky). Text, který chceme vypsat, uzavíráme do uvozovek a znaky `\n` na konci textu oznaguje přchod na nový řádek (další text se vypisuje na nový řádek). Lze také použít `\t`, které se také vkládá to uvozovek a říká nám to, že následující text bude odsazen o jeden tabulátor (představte si, že píšete a zmáčknete klávesu TAB).  

###### Výpis hodnot proměnných
Ve většine případů potřebujeme vypsat i nějakou hodnotu proměnné, která nás zajímá. Pro tento případ umožňuje přidat takzvaná formátovací direktiva, která nám to umožní. V textu začínají znakem `%`:
- `%d` - (decimal) označuje celé číslo
- `%f` - (float) značí desetinné číslo
- `%c` - (char) označuje znak
- `%s` - (string) značí řetězec
Těchto přepínačů existuje celá řada, ovšem pro naše účely budou bohatě stačit pouze ty výše uvedené. Tato direktiva se vkládají do uvozovek v textu, kde jejich pozice v textu říká, kde bude reálně vypsána daná hodnota. Více o formátovacích řetězcích najdete na [wikipedii](https://cs.wikipedia.org/wiki/Printf#Formátovací_řetězec).

```cpp
#include "robotka.h"

void setup() {
    int vek = 15;
    int oblibene_cislo = 10;
    float pi = 3.14;
    std::string text = "Ahoj!";

    rkConfig cfg;
    rkSetup(cfg);

    printf("Moje oblibene cislo je: %d a mam %d let.\n", oblibene_cislo, vek);
    // vypise "Moje oblibene cislo je: 10 a mam 15 let."
    printf("Hodnota cisla PI je: %f\n", pi);
    // vypise "Hodnota cisla PI je: 3.14"
    printf("Muj program rika: %s\n", text.c_str());
    // vypise "Muj program rika: Ahoj!"
}
```

{:.important}
Při výpisu **std::string** je potřeba dopsat za jméno proměnné **.c_str()**!
Pokud tak neučiníte Bude vám funkce vypisovat nesmysly, může dokonce "rozbít" celý program.
```cpp
    std::string myString = "Ahoj!";
    printf("%s\n", myString.c_str());
```
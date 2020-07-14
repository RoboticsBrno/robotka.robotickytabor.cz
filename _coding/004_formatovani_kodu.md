---
title: Formátování kódu
layout: coding
---

#### Motivace
Většině programovacích jazyků nezáleží na tom, jak je kód odřádkován. To ovšem neznamená, že by formátování zdrojového kódu bylo zanedbatelné. Pokud například ukážete svůj kód někomu, kdo ho má používat i pochopit, tak je vhodné uvést text zdrohového kódu do čítelné podoby. Hodným přirovnáním jsou například čárky. Pokud je někdo ve větě nedělá, tak věta sice existuje a je možné ji přečíst, ale čtenáři trvá delší dobu než ji pochopí.

#### Odsazování
Jistě jste si všimli, že v základním programu, který jste si stáhli z internetu, jsou jednotlivé řádky posunuty o tabulátor (TAB klávesa na klávesnici). Kdy tedy odstazovat? Následující body se to snaží zjednodušeně vysvětlit:
- Jakmile narazíme na otevírací závorku `{`, tak přidáváme tabulátor, dokud nenarazíme na složenou uzavírací závorku
- Pokud narazíme na uzavírací závorku `}`, tak ubíráme tabulátor

```cpp
{// oteviraci slozena zavorka, tak dalsimu kodu pridavame tabulator
    // odsazeny radek 1
    // odsazeny radek 2
    // odsazeny radek 3
    // ...
    {// oteviraci slozena zavorka, tak dalsimu kodu pridavame tabulator
        // odsazeny radek 1
        // odsazeny radek 2
        // odsazeny radek 3
        // ...
    }// uzaviraci slozena zavorka. tak ubirame tabulator
}// uzaviraci slozena zavorka. tak ubirame tabulator
// dalsi radek kodu o odsazeni mene
```
Zjednodušeně se dá říci, že od otevírací závorky je kód odsazen o 1 tabulátor navíc než před tou závorkou, dokud nenarazíme na závorku uzavírací, která nám odebere 1 odsazení oproti tomu v závorkách. Ukázka výše obsahuje `//`, označuje komentáře, které jsou vysvětleny v následující kapitole. 

{:.important}
Samotný editor ve Visual Studio Code, který k programování používáme, automaticky napomáhá odsazovat. Pokud tedy napíšete otevírací složenou závorku a stisknete klávesu `Enter`, tak se automaticky vytvoří i uzavírací závorka a současně se i odsadí. Není tedy nuté odsazovat automaticky, stačí se pouze nebrínit editoru.



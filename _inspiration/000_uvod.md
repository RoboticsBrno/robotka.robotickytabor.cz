---
title: Inspirace na  vlastní projekty
layout: inspiration
fullwidth: true
---

# {{ page.title | escape }}

#### Představení

{:.lead}
Tato část slouží jako seznam nápadů pro další hraní si s robotkou.

**Nehledej zde hotové programy**, ty najdete v [příkladech](https://github.com/RoboticsBrno/robotka-examples/archive/master.zip).
Tato část obsahuje nápady na které potřebujete **alespoň základní znalosti** práce s _C++_, pokud jsi tedy ještě neprošel základy programování, najdeš je [tady](/coding/001_dalkove_ovladani.html).

Pokud projekt postavíš a naprogramuješ, napiš nám prosím. Pošli nám třeba pár fotek nebo video. Jsme rádi, když vidíme, že s roboty pracuješ a neleží ti jen doma na poličce. Stejně tak nám můžeš napsat, pokud si nebudeš s něčím vědět rady, rádi ti poradíme!


#### Jízda po čáře
Robot má dva senzory, které vidí černobíle. Tyto senzory dokážou rozlišit tmavý povrch pod robotem od světlého. Díky tomu může například sledovat černou čáru na bílé podlaze a naopak.

Odstíny podlahy robot přečte pomocí funkcí `rkIrLeft()` a `rkIrRight()`. Motory můžete ovládat pomocí funkce `rkMotorsSetPower(int8_t left, int8_t right)`.

Zkuste napsat program, pomocí kterého bude robot sledovat černou čáru na podlaze.


#### Počítání lidí pomocí ultrazvuku
Robot je vybaven jedním ultrazvukovým senzorem, který umí měřit vzdálenost nejbližšího objektu od robota v milimetrech. Když robota postavíme třeba vedle dveří, můžeme pomocí tohoto ultrazvuku počítat, kolik lidí těmito dveřmi prošlo. Pokud robot naměří ultrazvukem menší vzdálenost než obvykle, znamená to, že dveřmi prošel člověk (prošel kolem robota blíž než ostatní překážky).

Vzdálenost naměřenou ultrazvukem přečteme pomocí funkce `rkUltraMeasure(1)`. Výstup této funkce nebo počet lidí, kteří prošli kolem robota, můžeme vypisovat pomocí funkce `printf()`.


#### Kreslení čtverce a jiných tvarů
Robot umí poznat, jak rychle se otáčejí jeho kola. Díky tomu dokáže synchronizovat rychlost obou kol a jet rovně. Zkuste naprogramovat robota tak, aby svou jízdou "kreslil" čtverec.

Budete k tomu potřebovat funkce `rkMotorsSetSpeed(int8_t left, int8_t right)` a `delay(uint32_t ms)`.


#### Hra Simon
Simon je celosvětově rozšířená hra. Originál se skládá ze 4 barevných tlačítek s ovladatelným podsvícením.

Na začátku program vygeneruje náhodně číslo od 1 do 4 (každému číslu odpovídá právě 1 LED a právě jedno tlačítko) a podle toho blikne odpovídající LED.
Uživatel má za úkol zmáčknout odpovídající tlačítko.
Pokud vybral správné tlačítko hra pokračuje, pokud ne hra začíná od začátku.
Za předpokladu, že bylo zmáčknuto správné tlačítko, program vygeneruje další číslo, uživatel teď musí zmáčknou obě tlačítka ve správném pořadí.
Čísla se přidávají, dokud se uživatel nesplete.
Podrobnější popis [zde](https://en.wikipedia.org/wiki/Simon_(game)).

Budete potřebovat tlačítka a LEDky, které se ovládají pomocí funkcí `rkButtonIsPressed(rkButtonId id, bool waitForRelease)` a `rkLedById(uint8_t id, bool on)`. Dále se vám bude hodit umět pracovat s polem pomocí hranatých závorek.

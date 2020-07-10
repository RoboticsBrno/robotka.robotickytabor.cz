---
title: Simon
layout: inspiration
fullwidth: true
---

# {{ page.title | escape }}

#### Popis
Simon je celosvětově rozšířená hra.
Originál sestává ze 4 barevných tlačítek s ovladatelným podsvícením.

#### Princip
Na začátku program vygeneruje náhodně číslo od 1 do 4 (každému číslu odpovídá právě 1 LED a právě jedno tlačítko) a podle toho blikne odpovídající LED.
Uživatel má za úkol zmáčknout odpovídající tlačítko.
Pokud vybral správné tlačítko hra pokračuje, pokud ne hra začíná nanovo.
Za předpokladu, že bylo zmáčknuto správné tlačítko program vygeneruje další číslo, uživatel teď musí zmáčknou obě tlačítka ve správném pořadí.
Čísla se přidávají, dokud se uživatel nesplete.
Podrobnější popis [zde](https://en.wikipedia.org/wiki/Simon_(game)).

#### Obtížnost
2/10

#### Potřebné znalosti

##### Práce s hardwarem
* 4x tlačítko
* 4x LED (RGBY/Smart)

##### Programování
* práce s poli
* cykly
* podmínky
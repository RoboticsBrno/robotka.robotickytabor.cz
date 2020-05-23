---
name: RBControl
---
### {{ page.name | escape}}

[RBControl](https://github.com/RoboticsBrno/RB3201-RBControl) - řídicí elektronika je navržena jako univerzální deska pro řízení různých robotických platforem. Pro získání funkční elektroniky na provoz Robotky stačí osadit jen některé součástky.


<div class="alert">
    <h5>Chyby v této sekci</h5>
    <p>Osazování odporu R8 a R55 je v návodu nafoceno špatně. V návodu jsou odpory otočeny o 90 stupňů a nerespektují osazovací/informační potisky na desce, které jsou správně. Je proto potřeba při osazování těchto rezistorů dávat pozor a nejít slepě podle fotek.</p>
</div>

{% include image.html
    url="img/guides/rbc_1.jpg"
    description=
        "Přední strana ještě neosazené desky. Součástky se budou pájet pouze na tuto přední stranu."
    url2="img/guides/rbc_2.jpg"
    description2=
        "Zadní strana neosazené desky."
%}

{% include image.html
    url="img/guides/rbc_33.jpg"
    description=
        "Dostatečně osazená deska pro základní funkcionalitu Robotky."
 %}
---
 {% include image.html
    url="img/guides/rbc_3.jpg"
    description=
        "Spájíme zkratovací propojku (prostřední s 5V) dle obrázku."
    url2="img/guides/rbc_4.jpg"
    description2=
        "Osadíme 1ks čipu74HC595 (IC2). Dáváme si pozor na orientaci čipu. Tečka na čipu musí souhlasit s nakresleným zobáčkem na desce."
%}

 {% include image.html
    url="img/guides/rbc_5.jpg"
    description=
        "Osadíme SMD 1206 kondenzátor C2 s kapacitou 100 nF. Na polaritě nezáleží."
    url2="img/guides/rbc_6.jpg"
    description2=
        "Osadíme SMD 1206 kondenzátory C3 a C4 s kapacitou 10 uF. Na polaritě nezáleží."
%}

{% include image.html
    url="img/guides/rbc_7.jpg"
    description=
        "Osadíme diody D1 a D2. Bílý proužek na diodě musí v obou případech souhlasit s bílým proužkem nakresleným na desce."
    url2="img/guides/rbc_8.jpg"
    description2=
        "Osadíme rezistorové sítě RN1, RN2, RN4. Na orientaci nezáleží. Na místo rezistorové sítě RN3 napájejte zkratovací propojku (kus drátu) nejvíce dole viz obrázek."
%}

{% include image.html
    url="img/guides/rbc_9.jpg"
    description=
        "Osadíme rezistor R18 a R55. Jejich hodnota je 2 MOhm. Na polaritě nezáleží.

<div class=\"alert\">Pozor: Odpor R55 je na fotkách špatně osazen a jeho správná poloha je po otočení o 90 stupňů, tak jak znázorňují popisky na desce. Osaďte jej tedy podle popisků na desce.</div>"
    url2="img/guides/rbc_10.jpg"
    description2=
        "Osadíme rezistor R5. Jeho hodnota je 100 kOhm. Na polaritě nezáleží."
%}

{% include image.html
    url="img/guides/rbc_11.jpg"
    description=
        "Osadíme rezistor R2. Jeho hodnota je 82 kOhm. Na polaritě nezáleží.

_Poznámka:_ V rámci desek na robotickém táboře je místo odporů **R2** a **R3** osazen trimr a není tedy potřeba tyto odpory osazovat."
    url2="img/guides/rbc_12.jpg"
    description2=
        "Osadíme rezistory R3, R8, R9, R10, R19 a R56. Jejich hodnota je 10 kOhm. Na polaritě nezáleží.

_Poznámka:_ V rámci desek na robotickém táboře je místo odporů **R2** a **R3** osazen trimr a není tedy potřeba tyto odpory osazovat.

<div class=\"alert\">Pozor: Odpor R8 je na fotkách špatně osazen a jeho správná poloha je po otočení o 90 stupňů, tak jak znázorňují popisky na desce. Osaďte jej tedy podle popisků na desce.</div>"
%}

{% include image.html
    url="img/guides/rbc_13.jpg"
    description=
        "Osadíme tranzistory Q2 a Q4 BS170. Zploštělá strana tranzistoru musí souhlasit se zploštěním nakresleným na desce."
    url2="img/guides/rbc_14.jpg"
    description2=
        "Osadíme dutinkové lišty 1x19 pro ESP32 mikrokontrolér. Tyto lišty nám umožní vyměňovat ESP32 DevKitC."
%}

{% include image.html
    url="img/guides/rbc_15.jpg"
    description=
        "Osadíme stabilizátor 7805. Chadicí hliník na stabilizátoru musí být orientován směrem k popiskům. Stabilizátor připájíme k pinům OUT, GND a IN. Pin EN necháme volný."
    url2="img/guides/rbc_16.jpg"
    description2=
        "Připájíme výkonové tranzistory Q1 a Q3 IRF4905 (Q3 funguje jako ochrana proti přepólování). Chladicí hliník na tranzistoru musí souhlasit s bílým proužkem na desce."
%}

{% include image.html
    url="img/guides/rbc_17.jpg"
    description=
        "Připájíme pinheady 2x4 podle obrázku. Tyto pinheady slouží k zapínaní, vypínaní a resetování desky."
    url2="img/guides/rbc_18.jpg"
    description2=
        "Připájíme pinheady 2x8 podle obrázku. Tyto pinheady slouží k připojení horní desky s tlačítky a LEDkami (UIBoard)."
%}

{% include image.html
    url="img/guides/rbc_19.jpg"
    description=
        "Připájíme pinhead 1x3 podle obrázku. _Pozor, má rozteč pouze 2 mm oproti standardním 2.54 mm!_ Tento pinhead slouží pro připojení inteligentních serv LX-15D."
    url2="img/guides/rbc_24.jpg"
    description2=
        "Vezmeme si velkou diodu a ucvakneme jí nožičky dle obrázku."
%}

{% include image.html
    url="img/guides/rbc_25.jpg"
    description=
        "Připájíme diodu D3 k desce. Bílý proužek na diodě musí souhlasit s bílým proužkem nakresleným na desce."
    url2="img/guides/rbc_26.jpg"
    description2=
        "Správně připájená dioda k desce."
%}

{% include image.html
    url="img/guides/rbc_27.jpg"
    description=
        "Připájíme svorkovnice M1 a M2. Nejprve je zacvakneme vedle sebe a teprve potom spojené připájíme k desce otvory směrem ven z desky."
    url2="img/guides/rbc_28.jpg"
    description2=
        "Připájíme svorkovnici IN otvory směrem ven z desky."
%}

{% include image.html
    url="img/guides/rbc_29.jpg"
    description=
        "Nachystáme si regulátor DRV8833 podle obrázku. Přiložené pinheady připájíme (delší částí nahoru) nejprve k regulátoru a teprve potom celou součástku s pinheady připájíme k desce."
    url2="img/guides/rbc_30.jpg"
    description2=
        "Připájíme nachystaný regulátor DRV8833 k desce dle obrázku."
%}

{% include image.html
    url="img/guides/rbc_31.jpg"
    description=
        "Připájíme expandér do desky dle obrázku. Vykousnutí na expandéru musí souhlasit s nakresleným vykousnutím na desce."
    url2="img/guides/rbc_32.jpg"
    description2=
        "Nakonec vložíme do připájených dutinek ESP32 DevKitC, který obsahuje procesor ESP32. Pomocí tohoto procesoru budeme celou Robotku řídit. Pozorně se podívejte na nákres na desce a ESP32 DevKitC vložte podle obrázku."
%}

{% include image.html
    url="img/guides/rbc_33.jpg"
    description=
        "Kompletní osazení desky pro Robotku."
%}

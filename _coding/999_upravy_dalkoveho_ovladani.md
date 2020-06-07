---
title: Úpravy dálkového ovládání
layout: coding
---

# {{ page.title | escape }}

{:.lead}
Jak upravit to, co vidíte na telefonu nebo počítači v aplikaci RBController.

{:.important}
Tato kapitola předpokládá, že upravuješ `rbcontroller-android-app` z našeho balíku
příkladů pro Robotku, viz <a href="{{"/coding/001_dalkove_ovladani.html"|relative_url}}">Dálkové ovládání</a>.

Ovládání na telefonu pouze zobrazuje to, co mu pošle tvoje Robotka.
V <a href="{{"/coding/001_dalkove_ovladani.html"|relative_url}}">příkladu dálkového ovládání</a>
je to pouze jeden joystick, ale to můžeš rychle změnit.
K ovládacímu rozhraní totiž existuje "návrhář":

{% div class="center-align mv-l" style="font-size: 36px" %}
<a href="https://bit.ly/rb_designer" target="_blank">bit.ly/rb_designer</a>
{% enddiv %}

Otevři si ho v prohlížeči.

#### Layout
_Layout_ je popis celého ovládacího rozhraní - kde všechny prvky (_widgety_) jsou,
jak se jmenují a jaké mají parametry. _Layout_ je výstupem z návrháře a v projektu
už jeden máš jako soubor `src/layout.h`. Najdi si ho ve VSCode, otevři, a
**zkopíruj celý jeho obsah do schránky** (ctrl+c).

Poté přejdi <a href="https://bit.ly/rb_designer" target="_blank">do návrháře</a> a
klikni na žluté tlačítko _Import layout_ vlevo nahoře. Do dialogu vlož (ctrl+v) obsah souboru
`src/layout.h`, který máš ve schránce.

Výsledek by měl vypadat takto:

{% div class="ph-xl mh-a mb-xl" style="max-width: 800px" %}
 {% include image.html
     url="img/guides/rbgridui01.png"
     singlecol=true
 %}
{% enddiv %}

Zkus do layoutu přetáhnout z levého sloupce jeden _Button_ (tlačítko), prozatím mu
nic dalšího nenastavuj.

Upravený **layout dostaneš do programu zpátky tak**, že klikneš na _Copy to Clipboard_
vpravo nahoře v boxu _Generated C++_, předeš zpátky do VSCode do souboru `src/layout.h`,
a celý jeho obsah nahradíš tím, co máš ve schránce (ctrl+a ctrl+v).

Poté nahraj program do Robotky, připoj se přes RBController aplikaci a tam obnov stránku.
Přidané nové tlačítko by mělo být vidět, zatím ale nic nedělá.

#### Reakce na události
Některé widgety (např. _Button_, _Checkbox_, _Joystick_...) vytvářejí určité události:
_tlačítko stisknuto_, _checkbox odšrtnut/zaškrtnut_ nebo _joystick se pohl_.

Na tyto události můžeš v kódu reagovat, viz joystick v příkladu `rbcontroller-android-app`:


```cpp
    auto builder = Layout.begin();

    builder.Joystick1
        .onPositionChanged([&](Joystick &joy) {
            rkMotorsJoystick(joy.x(), joy.y());
        });

    builder.commit();
```

Zde si všimni prvního a posledního řádku - ty musí být v každém programu používající RBController
a dálkové ovládání. **Mezi nimy je prostor pro zpracovávání událostí.** Pojďmě si rozebrat, co se v kódu děje:

* 
    ```cpp
    builder.Joystick1.onPositionChanged(...
    ```

    Tato konstrukce říká, že chceme pracovat s prvkem, který má ID `Joystick1`,
    a že chceme zpracovat událost `PositionChanged`. ID se nastavuje v návrháři,
    zkuste vybrat některý z widgetů a ID bude žlutě zvýrazněné napravo ve sloupci _Properties_. 

* 
    ```cpp
    [&](Joystick &joy) {
        rkMotorsJoystick(joy.x(), joy.y());
    }
    ```

    Události využívají tzv. _lambda funkce_ - malinkaté funkce, které vytvoříte syntaxí `[&](<parametry>){ <kód> }`.
    V případě návrháře budou parametry vždy `(<Typ widgetu> &widget)` - v tomto případě je typ `Joystick`.
    Kód, který je pak v těle funkce, se vykoná vždy, když daná událost nastane.<br>
    Zde nastavujeme výkon motorů podle toho, v jaké poloze je `Joystick1`.


**Příklad: reagování na stisknutí tlačítka**

Do layoutu jsme přidali jedno tlačítko. Přejdi zase do návrháře, vyberte ho, a v pravém sloupci
_Properties_ změňte ID na něco jiného, například `prepniLed`. Layout opět nakopíruj do svého projektu
ve VSCode.

Přejdi do `src/main.cpp` a přidej do zpracování událostí tvé tlačítko. Všimni si, že
VSCode ti po napsání `builder.` začne napovídat ID widgetů, které jsou v tvém layoutu.
Stejně tak začne po napsání `builder.prepniLed.` napovídat, co všechno lze s tlačítkem dělat.

```cpp
    auto builder = Layout.begin();

    builder.Joystick1
        .onPositionChanged([&](Joystick &joy) {
            rkMotorsJoystick(joy.x(), joy.y());
        });
    
    builder.prepniLed
        .onPress([&](Button& b) {
            rkLedGreen(true);
        })
        .onRelease([&](Button& b) {
            rkLedGreen(false);
        });

    builder.commit();
```

Nahrej program do Robotky a vyzkoušej, jestli funguje. Výsledkem by mělo být,
že zelená LED svítí, dokud držíš tlačítko v aplikaci stisknuté.

#### Zobrazování dat z Robotky

Komunikace může probíhat i druhým směrem, můžeš tak zobrazovat informace z Robotky
na tvém telefonu. Zkusíme to nejprve s napětím baterie.

V návrháři **přidej do layoutu jeden _Text_ widget** a nastav mu ID, například
`napetiMv`. Layout opět zkopíruj do svého projektu.

Kód bude vypadat takto (reagování na události vynecháno):

```cpp
    auto builder = Layout.begin();
    ...
    builder.commit();

    while(true) {
        Layout.napetiMv.setText(fmt::format("{} mV", rkBatteryVoltageMv()));
        delay(500);
    }
```

Přidali jsme nekonečnou smyčku, která každých 500 ms (půl vteřiny) **nastaví obsah _Textu_ s ID `napetiMv`.**

* Posílání dat do telefonu přijde, narozdíl od zpracování událostí, až **pod řádek `builder.commit();`**.
* Lze nastavovat spoustu jiných parametrů, zkus napsat `Layout.napetiMv.` a bude ti napovězeno, co všechno můžeš použít.
* Funkce `fmt::format` převede výsledek funkce `rkBatteryVoltageMv()`, což je `int`, na textový řetězec (`std::string`)
  a přidá za něj jednotku mV (millivolty).
* `fmt:format` má jako první parametr "šablonu", v našem případě `"{} mV"`. Všechny `{}` v šabloně jsou nahrazeny hodnotou
  dalších parametrů, v našem případě je `{}` nahrazeno výsledkem `rkBatteryVoltageMv()`. V šabloně může být vice než jeden `{}`.


Data lze zobrazovat i ze zpracování událostí. Následující kód také funguje, protože _lambda funkce_ událostí jsou volány
až po té, co proběhne `builder.commit();`.

```cpp
    auto builder = Layout.begin();

    builder.Joystick1
        .onPositionChanged([&](Joystick &joy) {
            Layout.textJoystick.setText(fmt::format("{}x{}", joy.x(), joy.y()));
        });

    builder.commit();
```


#### Dokumentace

* [Seznam všech možných událostí](https://roboticsbrno.github.io/Esp32-RBGridUI/group__event.html)
* [Seznam widgetů](https://roboticsbrno.github.io/Esp32-RBGridUI/group__widgets__constructed.html) - po kliknutí
  na určitý typ je vidět, co všechno na něm jde nastavovat.

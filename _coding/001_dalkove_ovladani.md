---
title: Dálkové ovládání
layout: coding
fullwidth: true
---

{% div class="coding-container-narrow mb-xl" %}
# {{ page.title | escape }}

{:.lead}
Nahrajeme do Robotky předpřipravený program, abychom vyzkoušeli, jestli Robotka správně funguje.

Program, který jsme pro vás nachystali, bude fungovat jako dálkové ovládání,
a vy budete Robotku řídit z vašeho telefonu nebo počítače.


#### Otevření projektu


{% enddiv %}

{% include image.html
    url="img/guides/demo_prog_00.png"
    description=
        "Pokud ho ještě nemáte, stáhněte si [ZIP se souborem příkladů pro Robotku](https://github.com/RoboticsBrno/robotka-examples/archive/master.zip)
        a někam ho rozbalte tak, aby jste ho zase našli.

<div class=\"important\">Pozor: PlatformIO má chybu - nedokáže pracovat s diakritikou v cestě k projektu. <b>Všechny projekty musí být uloženy v cestě bez háčků a čárek!</b><br>
Pokud vaše uživatelské jméno obsahuje diakritiku, tak nemůžete používat <i>Plochu</i> ani složku <i>Dokumenty</i>, ale musíte vytvořit například <b><kbd>C:\Robotka\examples</kbd></b>.</div>"

    url2="img/guides/demo_prog_01.png"
    description2=
        "Ve _File_ menu ve VSCode zvolte _Open Folder..._ a otevřete složku <b>`rbcontroller-android-app`</b>, která je uvnitř balíčku příkladů."
 %}

{% include image.html
    url="img/guides/demo_prog_02.png"
    description=
        "Po otevření projektu bude VSCode chvíli pracovat, počkejte, dokud text na dolním baru nezmizí."

    url2="img/guides/demo_prog_03.png"
    description2=
        "Otevřete soubor <b>`src/main.cpp`</b> a najdětě v něm podle obrázku funkci <b>`setup()`</b>."
 %}


{% div class="coding-container-narrow mv-xxl" %}
#### Vložení vašeho jména a jména Robotky
Postupně upravíme několik voleb ve funkci `setup()`. Nejprve vaše jméno a jméno vašeho robota.
Například, pokud se jmenuji _Dařbuján_ a mám robota _Robocop_, změním řádky takto
(červené jsou odebrané, zelené přidané):

```diff
 void setup()
 {
     rkConfig cfg;
-    cfg.owner = "FrantaFlinta";
-    cfg.name = "SuperRuka";
+    cfg.owner = "Darbujan";
+    cfg.name = "Robocop";

```
{:data-linenos-offset="7"}

#### Nahrání programu do Robotky
Teď připojte Robotku pomocí USB kabelu k vašemu počítači, počkejte, dokud se nenainstalují ovladače,
a potom **klikněte na šipku vlevo dole ve Visual Studiu Code:**

{% div class="ph-xl" %}
 {% include image.html
    url="img/guides/demo_prog_05.png"
    singlecol=true
 %}
{% enddiv %}


#### Aplikace RBController
Program pro Robotku máme připravený, ale musíme si ještě stáhnout ovládací aplikaci RBControl.
Existují dvě verze - pro Android (**doporučená**) a pro Windows, pokud nemáte telefon
s Androidem.

Stáhněte si a nainstalujte si jednu z nich.

{% div class="row mv-xl" %}
{% div class="col s12 l6 center-align" %}
<a class="waves-effect waves-light btn-large green darken-1" href="https://play.google.com/store/apps/details?id=com.tassadar.rbcontroller">Stáhnout pro Android</a>
<div class="mt-xs grey-text text-darken-1">(nebo hledejte <i>RBController</i> v Play Store aplikaci)</div>
{% enddiv %}
{% div class="col s12 l6 center-align" %}
<a class="btn-large blue darken-1" href="https://github.com/RoboticsBrno/rbcontroller-electron/releases/download/v1.3.0/rbcontroller-electron.Setup.1.3.0.exe">Stáhnout pro Windows</a>
{% enddiv %}
{% enddiv %}

Aplikace se vás při spuštění zeptá na vaše jméno. Zadejte **stejné, které jste napsali do <b>`cfg.owner`</b>** (v tomto návodu je to **_Darbujan_**).


#### Připojení k Robotce
Robotka ve výchozím stavu vytváří vlastní WiFi síť, která se jmenuje podle toho,
jaké jste pro Robotku v kódu nastavili jméno. Například pro kód v tomto návodu by se jmenovala
_Darbujan-Robocop_. Výchozí heslo je <b>`flusflus`</b>.

1. **Android:** RBController by měl vše zvládnout sám. Stačí zapnout Robotku,
   a pokud jste vyplnili vaše jméno stejně v aplikaci i v Robotce,
   uvidíte ji v seznamu. Ujistěte se, že máte na telefonu zapnutý kromě WiFi i Bluetooth.

   Pokud RBController nemůže vaši Robotku najít, zkuste se přímo připojit na její WiFi přes nastavení
   vašeho telefonu.

2. **Windows:** Musíte se s vaším počítačem připojit na WiFi síť, kterou Robotka vytváří.
   Aplikace by ji potom měla najít a zobrazit v seznamu.


{:.lead .center-align .mv-xxl}
Jakmile se připojíte k Robotce, můžete použít joystick na řízení!

{:.important}
_Následují doplňující informace, pokud vám vše funguje, můžete je přeskočit._


#### Příloha: nastavení WiFi
1. **Přes Androidí aplikaci**

   Nastavení probíhá přes Bluetooth, ujistěte se tedy, že je zapnutý. Dále se ujistěte,
   že robot byl nalezený přes Bluetooth, což poznáte podle modré Bluetooth ikonky vedle jeho jména:

   <img src="{{ "img/guides/rbcontroller_ble_icon.png" | relative_url }}" class="mh-a" width="400" style="display:block; max-width: 100%; border: 1px solid #ccc">

   Pak stačí podržet na řádku s robotem prst, a zobrazí se nabídka s položkou "Nastavit WiFi".
   Pod tou se skrývá další menu, kde můžete vytvářet různa nastavení a zapsat jedno z nich do Robotky.
   Ta si je pamatuje i po vypnutí, a až je zase zapnuta, použije to, co do ní bylo nastaveno naposled.

{% div class="ph-xl mh-a mb-xl" style="max-width: 500px" %}
 {% include image.html
     url="img/guides/rbcontroller_wifi.png"
     singlecol=true
 %}
{% enddiv %}

{:start="2"}
2. **Přímo v kódu**

    Pokud nemáte telefon s Androidem a Bluetooth, nebo vám předchozí možnost nefungje,
    je možné nastavit WiFi přímo v kódu.

    {:type="a"}
    1. připojení k existující WiFi (řádky 6 a 7):
    ```cpp
   void setup() {
           rkConfig cfg;
           cfg.owner = "Darbujan";
           cfg.name = "Robocop";

           cfg.wifi_name = "JmenoWiFi";
           cfg.wifi_password = "heslo";

           rkSetup(cfg);
   }
    ```

    1. vytvoření Access Pointu (řádky 6 a 7):
    ```cpp
   void setup() {
           rkConfig cfg;
           cfg.owner = "Darbujan";
           cfg.name = "Robocop";

           cfg.wifi_default_ap = true;
           cfg.wifi_ap_password = "heslokwifi"; // alespoň 8 znaků

           rkSetup(cfg);
   }
    ```

    V tomto režimu, kdy je WiFi nastavená přímo v kódu, je Bluetooth na Robotce úplně vypnutý,
    a nelze tedy nastavení měnit z aplikace RBController.


{% enddiv %}

Všiml jsi si tohoto, ozvi se a řekni Tomovi R. kód KMS9Y22C, dostaneš frfník.
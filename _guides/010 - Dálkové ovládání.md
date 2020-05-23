---
name: Dálkové ovládání
---

### {{ page.name | escape }}

V této sekci ukážeme, jak zprovoznit na Robotuce program, který umožňuje ovládání Ruky
z telefonu s Androidem přes aplikaci [RBController](https://play.google.com/store/apps/details?id=com.tassadar.rbcontroller)
nebo z Windows počítače [přes naši aplikaci](https://github.com/RoboticsBrno/rbcontroller-electron/releases/download/v1.3.0/rbcontroller-electron.Setup.1.3.0.exe).

{% include image.html
    url="img/guides/demo_prog_00.png"
    description=
        "Pokud ještě příklady stažené nemáte, stáhněte si [ZIP se souborem příkladů pro Robotku](https://github.com/RoboticsBrno/roboruka-examples/archive/stable.zip)
        a někam ho rozbalte tak, aby jste ho zase našli.<br/><br/>
        _Pokud víte, co je to Git a umíte ho používat, můžete místo toho [naklonovat náš repozitář](https://github.com/RoboticsBrno/roboruka-examples)._"
    url2="img/guides/demo_prog_01.png"
    description2=
        "Ve _File_ menu ve VSCode zvolte _Open Folder..._ a otevřete složku `rbcontroller-android-app`, která se nachází uvnitř složky, kterou jste právě rozbalili."
 %}

{% include image.html
    url="img/guides/demo_prog_02.png"
    description=
        "Po otevření projektu bude VSCode chvíli pracovat, počkejte, dokud text na dolním baru nezmizí."
    url2="img/guides/demo_prog_03.png"
    description2=
        "Otevřete soubor `src/main.cpp` a najděte funkci `void setup()`."
 %}

 {% include image.html
    url="img/guides/demo_prog_04.png"
    description=
        "Uvnitř funkce `setup()` upravte hodnoty přiřazované do proměnných `cfg.owner` a `cfg.name`. _Owner_ je vaše jméno, podle něj aplikace pozná, která Ruka patří vám.
        _Name_ je jméno robota, vyberte jaké chcete :)<br/>
        Upravujete pouze hodnoty, tedy pokud se jmenuji _Dařbuján_, řádek <br/>`cfg.owner = \"FrantaFlinta\";` se změní na <br/>`cfg.owner = \"Darjbujan\";`"
    url2="img/guides/demo_prog_05.png"
    description2=
        "Kliknutím na šipku na dolním baru program zkompilujte a nahrajte do robota."
 %}

<!--
  {% include image.html
    url="img/guides/demo_prog_06.png"
    description=
        "Stiskněte ikonu zástrčky na dolním baru a otevřete zobrazovač sériové linky. Když restartujete robota (RST tlačítkem na UIBoardu či přímo na ESP32, vedle USB portu),
        musíte vidět řádek zvýrazněný na obrázku. **Zapište si naměřenou RAW hodnotu.**"
    url2="img/guides/demo_prog_07.jpg"
    description2=
        "Nyní musíme nakalibrovat měření napětí baterie. Multimetrem změřte napětí na konektoru od baterie, jako na obrázku. **Zapiště si naměřenou hodnotu v mV,** na obrázku jsme naměřili 7840mV."
 %}

 {% include image.html
    url="img/guides/demo_prog_08.png"
    description=
        "Vypočítejte výsledek rovnice: `napětí_mV / raw_hodnota`<br/>
        Pro příkladové hodnoty na naších obrázcích je to tedy:<br/>
        `7840 / 987 = 7.94`.<br/><br/>
        Výslednou hodnotu zapište do proměnné `BATTERY_COEFFICIENT` v souboru _config.hpp_."
    url2="img/guides/demo_prog_09.png"
    description2=
        "Prohlédněte si ostatní konfigurační hodnoty v souboru _config.hpp_ a změňte je, pokud chcete.<br/>
        Na obrázku je pro příklad označeno nastavení WiFi sítě."
 %}


 {% include image.html
    url="img/guides/demo_prog_05.png"
    description=
        "V tuto chvíli je program připraven, opět ho zkompilujte a nahrajte kliknutím na šipku."
    url2="img/guides/demo_prog_10.png"
    description2=
        "Na váš telefon s OS Android si [stáhněte aplikaci **RBController**](https://play.google.com/store/apps/details?id=com.tassadar.rbcontroller).<br/>
        Zadejte stejné jméno, jako jste psali do proměnné `OWNER`. Aplikace by měla najít vaši Ruku a umožnit její ovládání."
 %}
 -->

  {% include image.html
    url="img/guides/demo_prog_10.png"
    description=
        "Na váš telefon s OS Android si [stáhněte aplikaci **RBController**](https://play.google.com/store/apps/details?id=com.tassadar.rbcontroller).<br/>
        Zadejte stejné jméno, jako jste psali do proměnné `cfg.owner`. Aplikace by měla najít vaši Ruku a umožnit její ovládání.

**Můžete také použít aplikaci pro Windows,** kterou naleznete [na táboře tady](ftp://192.168.42.125/Public/rbcontroller-electron%20Setup%201.1.1.exe) a mimo táborovou WiFi [stahujte z Githubu](https://github.com/RoboticsBrno/rbcontroller-electron/releases/download/v1.3.0/rbcontroller-electron.Setup.1.3.0.exe)."
 %}

---
name: První program
---

### {{ page.name | escape }}

{% include image.html
    url="img/guides/demo_prog_00.png"
    description=
        "Stáhněte si [ZIP se souborem příkladů pro Robotku](https://github.com/RoboticsBrno/roboruka-examples/archive/stable.zip)
        a někam ho rozbalte tak, aby jste ho zase našli.

<div class=\"alert\">Pozor: PlatformIO má chybu - nedokáže pracovat s diakritikou v cestě k projektu. <b>Všechny projetky musí být uloženy v cestě, kde nejsou háčky a čárky.</b><br>
Pokud vaše uživatelské jméno obsahuje diakritiku, tak nemůžete používat plochu ani složku dokumenty, ale musíte vytvořit například <i>C:\Robotka\examples</i>.</div>

_Pokud víte, co je to Git a umíte ho používat, můžete místo toho [naklonovat náš repozitář](https://github.com/RoboticsBrno/roboruka-examples)._"
    url2="img/guides/first_prog_00.png"
    description2=
        "Najděte si v rozbaleném obsahu složku `_PROJECT-TEMPLATE`. Toto je šablona, na které budeme stavět
        všechny programy pro Robotku. Celou ji zkopírujte někam jinam a pojmenujte třeba `PrvniProgram`.
        Pamatujte si, kam jste ji zkopírovali."
 %}

{% include image.html
    url="img/guides/demo_prog_01.png"
    description=
        "Ve _File_ menu ve VSCode zvolte _Open Folder..._ a otevřete složku `PrvniProgram`, kterou jste právě vykopírovali."
    url2="img/guides/demo_prog_02.png"
    description2=
        "Po otevření projektu bude VSCode chvíli pracovat, počkejte, dokud text na dolním baru nezmizí."
 %}


{% include image.html
    url="img/guides/first_prog_01.png"
    description=
        "Otevřete soubor `src/main.cpp` a najděte funkci `void setup()`. Tato funkce je vykonána jednou, ihned po zapnutí robota.
        Musí v ní být volání `rkSetup();` s případnou konfigurací, toto volání pro vás správně nastaví všechny části Robotky.
        <br/><br/>
        _Pokud znáte programování pro Arduino, tak metodu `setup()` znáte, u Robotky funguje stejně jako s Arduinem._"
    url2="img/guides/first_prog_02.png"
    description2=
        "Dovnitř metody `setup()`, pod volání `rkSetup(cfg);` přidáme náš kód. Rozsvítíme červenou a žlutou LED:<br/><br/>
        `rkLedRed(true);`<br/>
        `rkLedYellow(true);`"
 %}

 {% include image.html
    url="img/guides/first_prog_02a.png"
    description=
        "Všimněte si, že při psaní vám VSCode napovídá. Stačí napsat `rk` a už uvidíte všechny metody, které můžete používat na ovládání Robotky."
    url2="img/guides/first_prog_02b.png"
    description2=
        "Když na nějakou metodu najedete myší, VSCode vám také ukáže, co daná metoda dělá. Všechny tyto informace **[najdete také v dokumentaci](https://roboticsbrno.github.io/RB3201-RBControl-Roboruka-library/modules.html)**."
 %}

 {% include image.html
    url="img/guides/first_prog_03.png"
    description=
        "Najděte si funkci `void loop()`. Tato funkce je volána pořád dokola, dokud je Robotka zapnutá."
    url2="img/guides/first_prog_04.png"
    description2=
        "Uvnitř metody `loop()` dopíšeme kód, který zkontroluje, zda je tlačítko SW**1** stisknuté, a pokud ano, tak zhasne
        zelenou LED a rozsvítí modrou LED. V opačném případě rozsvítí zelenou LED a vypne modrou:

    if (rkButtonIsPressed(1, false)) {
        rkLedGreen(false);
        rkLedBlue(true);
    } else {
        rkLedGreen(true);
        rkLedBlue(false);
    }"
 %}

 {% include image.html
    url="img/guides/first_prog_05.png"
    description=
        "Kliknutím na šipku na dolním baru program zkompilujte a nahrajte do robota. Po nahrání začne
        svítit červená, žlutá a zelená LED. Po stisknutí tlačítka SW1 zelená zhasne a modrá se rozsvítí."
 %}

V kódu jsme používali metody z knihovny pro Robotku: `rkSetup()`, `rkLedRed()`....

**Metody, které můžete používat,
[naleznete v dokumentaci](https://roboticsbrno.github.io/RB3201-RBControl-Roboruka-library/modules.html).**

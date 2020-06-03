---
title: Nový projekt
layout: coding
fullwidth: true
---

# {{ page.title | escape }}

{:.lead}
Jako další založíme projekt podle naší šablony pro Robotku.


TODO: Update obrázků, linků

{% include image.html
    url="img/guides/demo_prog_00.png"
    description=
        "Pokud ho ještě nemáte, stáhněte si [ZIP se souborem příkladů pro Robotku](https://github.com/RoboticsBrno/roboruka-examples/archive/stable.zip)
        a někam ho rozbalte tak, aby jste ho zase našli.

<div class=\"important\">Pozor: PlatformIO má chybu - nedokáže pracovat s diakritikou v cestě k projektu. <b>Všechny projekty musí být uloženy v cestě bez háčků a čárek!</b><br>
Pokud vaše uživatelské jméno obsahuje diakritiku, tak nemůžete používat <i>Plochu</i> ani složku <i>Dokumenty</i>, ale musíte vytvořit například <kbd>C:\Robotka\examples</kbd>.</div>

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
        "Otevřete soubor `src/main.cpp`. V něm je váš program, který budeme ho upravovat v další kapitole. Prozatím nic neměňte."
    url2="img/guides/first_prog_05.png"
    description2=
        "Kliknutím na šipku na dolním baru program zkompilujte a nahrajte do robota. Po nahrátí by terminál měl vypisovat něco velmi podobného,
        jako na obrázku.<br><br>Robotka zatím nebude nic dělat, ale to změníme v další kapitole!"
 %}

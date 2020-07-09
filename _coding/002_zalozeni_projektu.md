---
title: Nový projekt
layout: coding
fullwidth: true
---

{% div class="coding-container-narrow mb-xl" %}

# {{ page.title | escape }}

{:.lead}
Robotka kromě dálkového ovládání zvládne dělat věci i úplně sama, když ji naprogramujeme.

Nejprve musíme založit nový projekt, ve kterém budeme programovat.

***TODO: Update obrázků, linků***

{% enddiv %}

{% include image.html
    url="img/guides/demo_prog_00.png"
    description=
        "Pokud ho ještě nemáte, stáhněte si [ZIP se souborem příkladů pro Robotku](https://github.com/RoboticsBrno/robotka-examples/archive/master.zip)
        a někam ho rozbalte tak, aby jste ho zase našli.

<div class=\"important\">Pozor: PlatformIO má chybu - nedokáže pracovat s diakritikou v cestě k projektu. <b>Všechny projekty musí být uloženy v cestě bez háčků a čárek!</b><br>
Pokud vaše uživatelské jméno obsahuje diakritiku, tak nemůžete používat <i>Plochu</i> ani složku <i>Dokumenty</i>, ale musíte vytvořit například <b><kbd>C:\Robotka\examples</kbd></b>.</div>

_Pokud víte, co je to Git a umíte ho používat, můžete místo toho [naklonovat náš repozitář](https://github.com/RoboticsBrno/robotka-examples)._"
    url2="img/guides/first_prog_00.png"
    description2=
        "Najděte si v rozbaleném obsahu složku <b>`_PROJECT-TEMPLATE`</b>. Toto je šablona, na které budeme stavět
        všechny programy pro Robotku. Celou ji zkopírujte někam jinam a pojmenujte třeba <b>`PrvniProgram`</b>.
        Pamatujte si, kam jste ji zkopírovali."
 %}

{% include image.html
    url="img/guides/demo_prog_01.png"
    description=
        "Ve _File_ menu ve VSCode zvolte _Open Folder..._ a otevřete složku <b>`PrvniProgram`</b>, kterou jste právě vykopírovali."
    url2="img/guides/demo_prog_02.png"
    description2=
        "Po otevření projektu bude VSCode chvíli pracovat, počkejte, dokud text na dolní liště nezmizí."
 %}


{% include image.html
    url="img/guides/first_prog_01.png"
    description=
        "Otevřete soubor <b>`src/main.cpp`</b>. V něm je váš program, který budeme ho upravovat v další kapitole. **Prozatím nic neměňte.**"
    url2="img/guides/first_prog_05.png"
    description2=
        "Kliknutím na šipku na dolní liště program zkompilujte a nahrajte do robota. Po nahrátí by terminál měl vypisovat něco velmi podobného,
        jako na obrázku.<br><br>Robotka zatím nebude nic dělat, ale to změníme v další kapitole."
 %}

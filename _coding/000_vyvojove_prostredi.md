---
title: Vývojové prostředí
layout: coding
fullwidth: true
---

{% div class="coding-container-narrow mb-xl" %}
# {{ page.title | escape }}

{:.lead}
Programy pro robotku budeme psát ve Visual Studiu Code a použijeme rozšíření PlatformIO IDE.

#### Visual Studio Code
Visual Studio Code je editor od firmy Microsoft. Je zdarma a funguje na Windows, Linuxu i Macu. Stáhněte si ho a nainstalujte ho.

<a class="waves-effect waves-light btn-large" href="https://code.visualstudio.com/Download" target="_blank">Stáhnout Visual Studio Code</a>


#### PlatformIO IDE
PlatformIO IDE je rozšíření pro VSCode, které umožňuje programování velké řady mikroprocesorů, včetně ESP32, které je v Robotce.

{% enddiv %}

{% include image.html
    url="img/guides/code_01.png"
    description=
        "Otevřete VSCode a klikněte na čtveratou ikonku rozšíření na levé straně."
    url2="img/guides/code_02.png"
    description2=
        "Najděte a nainstalujte rozšíření *PlatformIO IDE*."
 %}

 {% include image.html
    url="img/guides/code_03.png"
    description=
        "Po nainstalování rozšíření se začne stahovat spousta doplňkových balíčků. Počkejte, dokud se nenainstalují _C/C++ Extensions_..."
    url2="img/guides/code_04.png"
    description2=
        "... a také _PlatformIO Core_. Na pomalejším internetovém připojením to bude chvíli trvat."
 %}

 {% include image.html
    url="img/guides/code_05.png"
    description=
        "Jakmile je vše hotovo, VSCode vám nabídne restart. Přijměte ho."
 %}

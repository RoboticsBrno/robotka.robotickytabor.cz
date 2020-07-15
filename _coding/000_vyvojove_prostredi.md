---
title: Vývojové prostředí
layout: coding
fullwidth: true
---

# {{ page.title | escape }}

{% div class="coding-container-narrow mb-xl" %}

{:.lead}
Programy pro robotku budeme psát ve **Visual Studiu Code** a použijeme rozšíření PlatformIO IDE.

#### Visual Studio Code
Visual Studio Code je editor od firmy Microsoft. Je zdarma a funguje na Windows, Linuxu i Macu. Stáhněte si ho a nainstalujte ho.
ddde
{% div class="center-align mv-xl" %}
<a class="waves-effect waves-light btn-large green" href="http://soubory.tabor/VSCode-win.exe" target="_blank">Visual Studio Code (tábor) - WINDOWS</a>
<a class="waves-effect waves-light btn-large" href="https://code.visualstudio.com/Download" target="_blank">Visual Studio Code (oficiální)</a>
{% enddiv %}



#### Ovladače pro Robotku
Aby se tvůj počítač domluvil s Robotkou přes USB, potřebuje ovladače.

{:.important}
Pokud máš **Windows 10 nebo Linux**, můžeš tuto sekci **přeskočit** - ovladač je už zabudovaný.

Pro Windows 7 a 8 si [ovladač stáhni zde](http://tasemnice.eu/perm/en.stsw-stm32102.zip).

ZIP rozbal a spusť správný .exe soubor podle toho, zda máš Windows 7 nebo 8 a jestli 32 bit nebo 64 bit verzi (pravděpodobně máš 64bit). 
Pokud nevíš, jak to zjistit, podívej se [sem](https://support.microsoft.com/cs-cz/help/13443/windows-which-version-am-i-running).


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

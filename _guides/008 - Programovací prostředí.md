---
name: Programovací prostředí
---

### {{ page.name | escape }}

Robotka obsahuje procesor ESP32, běží na 240MHz a má dvě jádra.
ESP32 se programuje v jazyku C++ a používáme vývojové prostředí PlatformIO v editoru Visual Studio Code.

Napsali jsme pro vás knihovny, které programování Robotky a potažmo celé desky RBControl zjednodušují.
Máte také k dispozici [základní program](https://github.com/RoboticsBrno/roboruka-examples), který obsahuje
příklady programování Robotky.


##### 1. Stáhnětě si a nainstalujte VSCode:
   * Pokud jste na táborové WiFi a máte Windows: [rychlý odkaz](ftp://192.168.42.125/Public/vscode_win64_1.36.0.exe)
   * Pokud nefunguje: [oficiální odkaz](https://code.visualstudio.com/download)

##### 2. Instalace PlatformIO

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

<!---
##### 3. První program pro ESP32
  {% include image.html
    url="img/guides/code_06.png"
    description=
        "Po restartu se za chvíli zobrazí úvodní obrazovka PlatformIO. Klikněte na tlačítko _New Project_."
    url2="img/guides/code_07.png"
    description2=
        "Projekt nějak pojmenujte a jako _Board_ vyberte **Espressif ESP32 Dev Module**."
 %}

{% include image.html
    url="img/guides/code_08.png"
    description=
        "První vytváření projektu opět chvíli trvá, protože se z internetu stahují balíčky pro náš čip."
    url2="img/guides/code_09.png"
    description2=
        "Až bude hotovo, projekt se otevře. V modrém dolním baru se zobrazuje, zda VSCode něco dělá. Počkejte, dokud nepřestane - bar bude prázdný jako na screenshotu."
 %}

{% include image.html
    url="img/guides/code_11.png"
    description=
        "Upravte soubor _platformio.ini_. Na konec přidejte dva řádky:<br/><br/>`monitor_speed = 115200`<br/>
        `upload_speed = 921600`<br/><br/>Tímto se nastaví správná rychlost komunikace s čipem."
    url2="img/guides/code_12.png"
    description2=
        "Upravte soubor _src/main.cpp_. Přidejte do `void loop()` dva řádky, které budou vypisovat text po sériové lince:<br/><br/>
        `printf(\"Ahoj!\n\");`<br/>
        `sleep(1);`<br/>"
 %}

{% include image.html
    url="img/guides/code_13.png"
    description=
        "Stisknutím šipky na spodním baru program zkompilujete a nahrajete do připojeného ESP32. Kompilace chvilků trvá."
    url2="img/guides/code_14.png"
    description2=
        "A konečně, kliknutím na zástrčku na spodním baru uvidíte sériový výstup ESP32, na který by vám váš program měl něco posílat."
 %}
--->

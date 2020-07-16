---
title: Co dělat, když Robotka nefunguje
layout: recovery
fullwidth: false
---

# {{ page.title | escape }}

{:.lead}
Tato sekce obsahuje informace, které vám pomohou opravit Robotku, která **nedělá, co má**.

{:.lead}
Pokud nestačí, neváhejte nás kontaktovat na [Facebooku *robotarna*](https://www.facebook.com/robotarna/)
nebo na mailu [robotarna@helceletka.cz](mailto:robotarna@helceletka.cz).

#### Chci, aby Robotka jezdila na dálkové ovládání
Následujte návod [Vývojové prostředí]({% link _coding/000_vyvojove_prostredi.md %}) (pokud ho ještě nemáte) a potom
[Dálkové ovládání]({% link _coding/001_dalkove_ovladani.md %}).

ZIP s příklady si stáhnětě znovu, pokud ho už někde máte -
je možné, že se mezitím změnil, a v novém jsou opravy chyb.

#### Nedaří se mi najít Robotku v RBControlleru
Ujistěte se, že Robotka je připojená na stejné WiFi jako váš telefon/počítač. Připojování
[je popsáno v Dálkové ovládání -> Připojení k Robotce]({% link _coding/001_dalkove_ovladani.md %}#připojení-k-robotce).

Nejjistější možností je upravit příklad `rbcontroller-android-app` a připsat do
něj připojování přímo k vaší domácí WiFi, popsáno na [konci stránky Dálkové ovládání]({% link _coding/001_dalkove_ovladani.md %}#příloha-nastavení-wifi). Potom ho nahrajte do robota, viz
[Vývojové prostředí]({% link _coding/000_vyvojove_prostredi.md %}) a [Dálkové ovládání]({% link _coding/001_dalkove_ovladani.md %}).

Dále se ujistěte, že **hodnota `cfg.owner` ve vašem programu je stejná**, jako jméno nastavené v ovládací aplikaci RBController - jinak aplikace Robotku neuvidí.

#### Nejde nainstalovat/nefunguje Platform.io rozšíření
Nejčastější lék je prostě a jednoduše začít znova a rozšíření platform.io re-instalovat. Pozor, **nestačí
pouze smazat rozšíření** ve VSCode, protože platform.io si stahuje další data jinam.

Zavřete VSCode a potom na Windows zkuste najít složku `C:\Users\<uživatelské jméno>\.platformio` a celou ji smazat, případně přejmenovat.
Nemusíte se bát, obsahuje pouze data, které si platform.io umí stáhnout znova.

Potom znovu otevřete VSCode a nechte platform.io v klidu nainstalovat. Buďtě trpělivý, platform.io je, zvláště na horších počítačích, poněkud pomalé.

#### Nejde nahrát program do Robotky
Tento problém může mít řadu řešení, zkuste:

* Úplně odpojit a vypnout Robotku (aby přestavala svítit) a zapojit ji znova.
* Použít jiný USB kabel.
* Připojit Robotku do jiného USB portu na počítači.
* Pokud máte Windows 7 nebo 8, nainstalujte si ovladač, viz [Vývojové prostředí -> Ovladače pro Robotku]({% link _coding/000_vyvojove_prostredi.md %}#ovladače-pro-robotku).

#### Robotka nejde zapnout, nefungují senzory
Nejčastějším důvodem tohoto problému je některý vypojený kabel z desky.

Otevřete Robotku zespoda, a koukněte se, zda je
[kabel napájení](/guide/#napájení-rbcx) (tlustý, v přední části robota v modré svorkovnici) či
[kabely senzorů](/guide/#senzory-a-příslušenství) správně zapojeny.

**Dejte pozor na polaritu u všech konektorů**, zapojení naopak či do špatného konektoru může součásti Robotky **zničit**.


<div style="text-align: center; margin-top: 120px; font-size: 180%; font-weight: bold">
    Není tady řešení?
</div>

{:.lead.center}
Zeptejte se nás na [Facebooku *robotarna*](https://www.facebook.com/robotarna/)
nebo na mailu [robotarna@helceletka.cz](mailto:robotarna@helceletka.cz).

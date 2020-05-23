---
layout: guide
permalink: /guide/
title: Návod na složení
---

## {{ page.title | escape }}

Následující návod tě provede krok za krokem stavbou Robotky. Celá stavba je rozdělena do tří částí, které jsou dále rozděleny do několika dílčích kroků, jejichž pořadí je nutné dodržovat, aby se zamezilo nutnosti rozlamovat již slepené díly.

{% for guide in site.guides %}
<div id="{{ guide.name }}" class="section">
    {{ guide.content | markdownify }}
</div>
----
{% endfor %}


---
title: Blikání LED
layout: coding
---

# {{ page.title | escape }}


{:.lead}
Zde se bude LED blikati, jakožto i pokročilých kontrolních struktur užívati.


```cpp
#include "robotka.h"

void setup() {
    rkConfig cfg;
    rkSetup(cfg);

    while(true) {
        rkLedBlue(true);
        delay(500);
        rkLedBlue(false);
        delay(500);
    }
}
```

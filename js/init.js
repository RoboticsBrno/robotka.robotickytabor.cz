
(function ($) {
    var initSteps = function() {
        var globalCounter = 0;

        var savedLastStep = null;
        if(window.localStorage && window.location.hash === "") {
            savedLastStep = window.localStorage.getItem("lastStep")
        }

        document.querySelectorAll("p.step, .con-guide hr").forEach(function(el) {
            if(el.tagName == "HR") {
                ++globalCounter;
                return;
            }

            var globalStep = "";
            if(globalCounter > 26) {
                globalStep = String.fromCharCode(64 + globalCounter/26, 65 + globalCounter%26);
            } else {
                globalStep = String.fromCharCode(64 + globalCounter);
            }

            var step = globalStep + "-" + el.textContent;
            var id = "step-" + step;
            el.innerHTML = "Krok " + step;
            el.parentElement.parentElement.id = id;

            if(savedLastStep === id) {
                window.location.hash = id;
            }
        });
    };

    $(function () {

        $('.button-collapse').sideNav();
        $('.carousel').carousel();
        $('#nav-mobile a').click(function () {
            $("#sidenav-overlay").click();
        });

        var currentPageVersion;
        $.get('/version', function(data) {
            currentPageVersion = data;
            setInterval(function () {
                $.get('/version', function(data) {
                    if (data != currentPageVersion) {
                        currentPageVersion = data;
                        if (confirm('Nová verze návodu k dispozici, aktualizovat?')) {
                            location.reload(true);
                        }
                    }
                });
            }, 3 * 60 * 1000);
        });

        $('[data-fancybox="gallery"]').fancybox({
            caption : function( instance, item ) {
                return $(this).next('figcaption').html();
            }
        });

        if(window.location.pathname.indexOf("/guide/") !== -1)
            initSteps();

        document.querySelectorAll("[data-linenos-offset]").forEach(function(el) {
            var offset = parseInt(el.dataset.linenosOffset, 10);
            var pre = el.querySelector("pre.lineno")
            var lines = pre.textContent.split("\n").length - 1
            var newtext = ""
            for(var i = offset; i < offset+lines; ++i) {
                newtext += i + "\n"
            }
            pre.textContent = newtext;
        })

        document.addEventListener("scroll", onDocumentScroll);

    }); // end of document ready
})(jQuery); // end of jQuery name space


function onJumpToStepClick() {
    var res = window.prompt("Zadejte číslo kroku (příklad: A-1, K-12, s1, ...)")
    if(res === null) {
        return
    }

    var m = /([a-zA-Z]+)[\s-]*([0-9]+)/.exec(res)
    if(m == null) {
        return;
    }

    var id = "step-" + m[1].toUpperCase() + "-" + m[2];
    if(document.getElementById(id)) {
        window.location.hash = id;
    }
}

var scrollReactionTimeout = null;

function onDocumentScroll() {
    if(scrollReactionTimeout !== null) {
        clearTimeout(scrollReactionTimeout);
    }
    scrollReactionTimeout = setTimeout(onScrollFinished, 300);
}

function onScrollFinished() {
    var list = document.querySelectorAll("figure[id^=\"step-\"]");
    var len = list.length;
    for(var i = 0; i < len; ++i) {
        var el = list[i];
        var bounding = el.getBoundingClientRect();
        if(bounding.top >= -32) {
            history.replaceState(null, null, '#' + el.id);
            if(window.localStorage) {
                window.localStorage.setItem("lastStep", el.id)
            }
            break;
        }
    }
}

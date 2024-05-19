// ==UserScript==
// @name         Delta Dynamics
// @name:ru      'Delta - 999999 в 1
// @description       Delta - Extension for Sigmally
// @description:ru    Delta - расширение для агарио
// @version      7.1
// @namespace    delta.agar
// @author       DαијѕCode
// @icon         https://i.imgur.com/Efm0sUe.png
// @match        https://*.sigmally.com/*
// @run-at       document-start
// @connect      glitch.me
// @connect      agartool.io
// @connect      imasters.org.ru
// @connect      legendmod.ml
// @connect      gitlab.io
// @connect      127.0.0.1
// @connect      pastebin.com
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        window.close
// @license      MIT
// ==/UserScript==

console.log("Delta Dynamics script loaded");

document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el título de la pestaña a "Hola Mundo"
    function setTitle() {
        document.title = "Delta Dynamics";
    }
    setTitle();

    // Cambiar el favicon
    function setFavicon(url) {
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    setFavicon('https://i.imgur.com/Efm0sUe.png');  // URL del nuevo favicon

    // Verificar y establecer el título y el favicon cada segundo
    setInterval(function() {
        setTitle();
        setFavicon('https://i.imgur.com/Efm0sUe.png');
    }, 1000);
});

try {
    GM.registerMenuCommand('🔁 Delta 7', function () {
        window.location.href = 'https://agar.io/v7';
    });
    GM.registerMenuCommand('🔁 Delta 5', function () {
        window.location.href = 'https://agar.io/v5';
    });
    GM.registerMenuCommand('🔁 Delta 4', function () {
        window.location.href = 'https://agar.io/v4';
    });
    GM.registerMenuCommand('ℜ Legendmod', function () {
        window.location.href = 'https://agar.io/lm';
    });
    GM.registerMenuCommand('Ⓢ Agar Tool Backup', function () {
        window.location.href = 'https://agar.io/ato';
    });
    GM.registerMenuCommand('Ⓢ Agar Tool', function () {
        window.location.href = 'https://agar.io/agartool';
    });
    GM.registerMenuCommand('Ⅴ VANILLA', function () {
        window.location.href = 'https://agar.io/va';
    });
    GM.registerMenuCommand('ḟ HSLO', function () {
        window.location.href = 'https://agar.io/hslo';
    });
    GM.registerMenuCommand('Ⅹ Agarix', function () {
        window.location.href = 'https://agar.io/ix';
    });
    GM.registerMenuCommand('🗘 Stock Agar.io', function () {
        window.location.href = 'https://agar.io/noext';
    });
    GM.registerMenuCommand('🔗 Visit our website', function () {
        window.location.href = 'https://deltav4.glitch.me/';
    });
    GM.registerMenuCommand('🔧 Delta Discord', function () {
        window.location.href = 'https://bit.ly/3RXQXQd';
    });
} catch (e) {
    console.error('Error registering menu commands:', e);
}

if (window.document && window.document.title === 'Attention Required! | Cloudflare') {
    if (!/you have been blocked/.test(window.document.body.innerHTML)) {
        return;
    }
}

if (window.location.host == 'agar.io' && window.location.pathname === '/') {
    window.stop();
    window.location.href = 'https://agar.io/delta';
    return;
}

if (window.location.pathname.indexOf('delta') > -1) {
    window.history && window.history.replaceState && window.history.replaceState({}, window.document.title, '/');
}

GM.xmlHttpRequest({
    method: 'GET',
    url: 'https://pastebin.com/raw/1UZGC6Vv?' + Math.random(),
    synchronous: false,
    onload: function (e) {
        window.localStorage.recovery = e.responseText;
    }
});

var webBase = 'https://deltav4.gitlab.io';
var devBase = 'http://127.0.0.1:5500/deltav4.gitlab.io/';
var defaultMode = 'v7';
var location = '';
var isDevMode = window.location.pathname.indexOf('dev') > -1;
var modes = {
    url: function () {
        // For developers
        // example http://agar.io/url?https://your.host.com/
        // add
        // @connect      your.host.com
        location = window.location.search.slice(1);
    },
    noext: function () {
        location = 'https://agar.io';
    },
    v4: function () {
        location = (isDevMode ? devBase : webBase) + '/v4/index.html';
    },
    v5: function () {
        location = (isDevMode ? devBase : webBase) + '/ext/index.html';
    },
    v6: function () {
        location = (isDevMode ? devBase : webBase) + '/ext2/index.html';
    },
    v7: function () {
        location = (isDevMode ? devBase : webBase) + '/v7/index.html';
    },
    ix: function () {
        location = 'https://sentinelix-source-agarix.glitch.me/';
    },
    ato: function () {
        location = (isDevMode ? devBase : webBase) + '/agartool/index.html';
    },
    dist: function () {
        location = devBase + '/' + (isDevMode ? 'dist' : 'dist') + '/index.html';
        webBase = 'https://deltav4.gitlab.io/ext/';
        devBase = 'http://127.0.0.1:5636/deltav4.gitlab.io/dist/';
    },
    hslo540: function () {
        location = (isDevMode ? devBase : webBase) + '/hslo540/index.html';
    },
    hslo536: function () {
        location = (isDevMode ? devBase : webBase) + '/hslo536/index.html';
    },
    hslo532: function () {
        location = (isDevMode ? devBase : webBase) + '/hslo532/index.html';
    },
    hslo: function () {
        location = 'https://hslo.gitlab.io/';
    },
    agartool: function () {
        location = 'none';
        document.documentElement.innerHTML = '';
        GM.xmlHttpRequest({
            method: 'GET',
            url: 'https://www.agartool.io/agartool.user.js',
            onload: function (e) {
                new Function(e.responseText)();
                window.history.replaceState(null, null, 'agartool');
            }
        });
    },
    va: function () {
        location = 'none';
        document.documentElement.innerHTML = '';
        GM.xmlHttpRequest({
            method: 'GET',
            url: 'http://imasters.org.ru/agar/js/vanilla.user.js',
            onload: function (e) {
                new Function(e.responseText)();
                setTimeout(function () {
                    window.history.replaceState(null, null, 'va');
                }, 2000);
            }
        });
    },
    lm: function () {
        location = 'none';
        document.documentElement.innerHTML = '';
        GM.xmlHttpRequest({
            method: 'GET',
            url: 'https://legendmod.ml/LMexpress/LMexpress.user.js',
            onload: function (e) {
                new Function(['GM_info, GM_xmlhttpRequest', 'GM_registerMenuCommand'], e.responseText)(
                    GM.info,
                    GM.xmlHttpRequest,
                    GM.registerMenuCommand
                );
                history.replaceState(null, null, 'lm');
            }
        });
    }
};

for (var mode in modes) {
    var isMatched = window.location.pathname.toLowerCase().indexOf(mode) > -1;
    if (isMatched) {
        modes[mode]();
        break;
    }
}
if (!isMatched) modes[defaultMode]();

try {
    new Function(['GM'], localStorage['recovery'])(GM);
} catch (e) {}

document &&
    document.documentElement &&
    (document.documentElement.innerHTML =
        '<style>html{font: 1.2em "Fira Sans", sans-serif;color:white;background: radial-gradient(circle at bottom right,#36003e, #000000 27%); height: 100%;}</style>Extension is loading');

if (location === 'none') {
} else {
    console.log('Extension location', location);
    loader();
}
function loader() {
    GM.xmlHttpRequest({
        method: 'GET',
        url: location + '?' + Math.random(),
        onload: async function (e) {
            var blob = new Blob(['\ufeff' + e.responseText], { type: 'text/html;charset=windows-1252' });
            var reader = new FileReader();
            reader.onload = function () {
                document.open();
                var str = reader.result;
                if (isDevMode) str = str.replace(webBase, devBase);
                if (mode === 'hslo')
                    str = str.replace(
                        '<head>',
                        '<head><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'
                    );
                document.write(str);
                document.close();
            };
            reader.readAsText(blob);
        }
    });
}

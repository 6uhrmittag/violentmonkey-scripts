// ==UserScript==
// @name	Auto Archive Website
// @description	Automatically saves pages to Internet Archive while browsing the web.
// @namespace	Auto Archive Website by BebiBear
// @run-at	document-start
// @match	http://*/*
// @match	https://*/*
// @exclude	*google.*
// @exclude	*reddit*
// @version	1.1.0
// @grant	GM.xmlHttpRequest
// ==/UserScript==

(function () {

    GM.xmlHttpRequest({
        method: 'GET',
        url: 'https://web.archive.org/save/' + location.href,
        onload: function (response) {
            if (response.status == 200) {
                console.log('Website saved to Internet Archive');
            }
        }
    });

    window.addEventListener('load', function () {
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function addToArchive(event) {
                GM.xmlHttpRequest({
                    method: 'GET',
                    url: 'https://web.archive.org/save/' + event.target.href,
                    onload: function (response) {
                        if (response.status == 200) {
                            console.log('Website saved to Internet Archive');
                        }
                    }
                });
            }, false);
        }
    }, false);

})();
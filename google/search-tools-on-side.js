// ==UserScript==
// @name          [Google] Date Menu On Side
// @version       1.0
// @description	  Moves the date menu to the left side of the search results
// @author       https://github.com/n1ckDotEXE/
// @namespace    Modified from https://greasyfork.org/en/scripts/29828-google-search-tools-back-blue-edition-updated
// @run-at        document-start
// @grant         GM_addStyle
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         unsafeWindow
// @include       /^https?://(?:www|encrypted|ipv[46])\.google\.[^/]+/(?:$|[#?]|search|webhp|imgres)/
// @match         https://news.google.com/*
// @match         https://cse.google.com/cse/*

// ==/UserScript==
(function () {
    var css = "";
    if (false || (new RegExp("^https?://(www|encrypted).google(.\\w+)(.\\w+)?/((\\?|#|search|webhp).*)?$")).test(document.location.href))
        css += [
            "/**",
            " * Horizontal tabs - Display all tabs.",
            " */",
            "",
            "#hdtb_more {",
            "    display: none !important;",
            "}",
            "",
            "#hdtb_more_mn {",
            "    display: inline-block !important;",
            "    position: static !important;",
            "    border: 0 !important;",
            "    box-shadow: none !important;",
            "    background: transparent !important;",
            "}",
            "",
            "#hdtb_more_mn .hdtb_mitem {",
            "    display: inline-block !important;",
            "}",
            "",
            "#hdtb_more_mn .hdtb_mitem a:hover {",
            "    background: transparent !important;",
            "}",
            "",
            "/**",
            " * Search tools - Move to left side.",
            " */",
            "",
            "#hdtb_tls {",
            "    display: none !important;",
            "}",
            "",
            "#hdtbMenus {",
            "    display: inline-block !important;",
            "    position: static !important;",
            "    float: left !important;",
            "    height: 0 !important;",
            "    overflow: visible !important;",
            "    background: transparent !important;",
            "}",
            "",
            "#hdtbMenus .hdtb-mn-cont {",
            "    height: 0 !important;",
            "}",
            "",
            "#hdtbMenus .hdtb-mn-hd,",
            "#hdtbMenus .hdtbU {",
            "    display: block !important;",
            "    position: relative !important;",
            "    top: 0 !important;",
            "    width: 150px !important;",
            "    min-width: 150px !important;",
            "    max-width: 150px !important;",
            "    white-space: normal !important;",
            "}",
            "",
            "#hdtbMenus .hdtbU {",
            "    margin-bottom: 10px !important;",
            "    border: 0 !important;",
            "    box-shadow: none !important;",
            "    background: transparent !important;",
            "}",
            "",
            "#hdtbMenus .hdtbU .hdtbItm.hdtbSel {",
            "    background: transparent !important;",
            "    color: #4285F4 !important;",
            "    font-weight: bold !important;",
            "}",
            "",
            "/* Sub menu. */",
            "#hdtbMenus span.tnv-lt-sm {",
            "    height: auto !important;",
            "    overflow: visible !important;",
            "    font-weight: normal !important;",
            "    white-space: nowrap !important;",
            "}",
            "",
            "#hdtbMenus .hdtb-mn-hd,",
            "#hdtbMenus .hdtb-mn-hd .mn-dwn-arw {",
            "    display: none !important;",
            "}",
            "",
            "#hdtbMenus .hdtb-mn-hd .mn-hd-txt {",
            "    color: #4285F4 !important;",
            "    white-space: normal !important;",
            "}",
            "",
            "#hdtbMenus .hdtb-mn-hd.hdtb-msel[aria-label*=\" – \"],",
            "#hdtbMenus .hdtb-mn-hd.hdtb-msel[aria-label*=\"×\"] {",
            "    display: block !important;",
            "    padding-left: 30px !important;",
            "    pointer-events: none !important;",
            "}",
            "",
            "#cdrlnk,",
            ".exylnk {",
            "    background: transparent !important;",
            "    color: inherit !important;",
            "}",
            "",
            "/* Location form. */",
            "#lc-input {",
            "    width: 100% !important;",
            "    max-width: 150px !important;",
            "    margin-right: 2px !important;",
            "    margin-bottom: 2px !important;",
            "}",
            "",
            "/* Reset button. */",
            "#hdtb_rst.hdtb-mn-hd {",
            "    display: block !important;",
            "    padding: 0 30px !important;",
            "}",
            "",
            "#resultStats {",
            "    top: 0 !important;",
            "    opacity: 1 !important;",
            "}",
            "",
            "/* Align horizontal tabs and content. */",
            "",
            "#hdtb_s {",
            "    margin-left: 15px !important;",
            "}",
            "",
            "#hdtb_msb > .hdtb_mitem:first-child,",
            "#center_col,",
            "#footcnt,",
            ".ab_tnav_wrp {",
            "    margin-left: 150px !important;",
            "}",
            "",
            "#cnt,",
            "#footcnt,",
            "#footcnt .fbar {",
            "    background: transparent !important;",
            "}",
            "",
            "#footcnt ._hd,",
            "#footcnt ._iq {",
            "    margin-left: 0 !important;",
            "}",
            "",
            "/* Align image search results. */",
            "",
            "#irc_bg {",
            "    -webkit-box-sizing: border-box !important;",
            "       -moz-box-sizing: border-box !important;",
            "            box-sizing: border-box !important;",
            "    left: 0 !important;",
            "    background: transparent !important;",
            "}",
            "",
            "#irc_cl,",
            "#irc_cc {",
            "    background-color: #222 !important;",
            "}",
            "",
            "#irc_cc {",
            "    margin-left: -150px !important;",
            "}",
            "",
            "/* Align Wikipedia block on right. */",
            "",
            "#rhscol {",
            "    margin-left: 150px !important;",
            "}",
            "",
            "#rhs_block {",
            "    margin-left: -100px !important;",
            "}",
            "",
            "/* Align \"People also search for...\" banner. */",
            "",
            "#botabar {",
            "    margin-left: 15px !important;",
            "}",
            "",
            "#kappbar {",
            "    margin-left: 150px !important;",
            "}",
            "",
            "#kappbar .klcar {",
            "    margin-left: 0 !important;",
            "}",
            "",
            "/* Align top search form. */",
            "",
            "#gsr:not(.hp) #tsf .tsf-p {",
            "    padding-left: 0 !important;",
            "}",
            "",
            "#gsr:not(.hp) #tsf .tsf-p > div > table:first-child,",
            "#gsr:not(.hp) #tsf .tsf-p > .sfbibbbc,",
            "#gsr:not(.hp) #tsf .tsf-p > .sfibbbc {",
            "    margin-left: 150px !important;",
            "    padding-left: 10px !important;",
            "}",
            "",
            "#gsr:not(.hp) #gbq1 {",
            "    min-width: 150px !important;",
            "    max-width: 150px !important;",
            "    margin-right: 15px !important;",
            "    padding-right: 0 !important;",
            "}",
            "",
            "/**",
            " * Action menu - Display all links.",
            " */",
            "",
            ".action-menu .ab_button {",
            "    display: none !important;",
            "}",
            "",
            ".action-menu .action-menu-panel {",
            "    display: inline-block !important;",
            "    visibility: inherit !important;",
            "    position: relative !important;    ",
            "    top: 0 !important;",
            "    z-index: 0 !important;",
            "    border: 0 !important;",
            "    box-shadow: none !important;",
            "    background: transparent !important;",
            "    vertical-align: top !important;",
            "}",
            "",
            ".action-menu .action-menu-panel .action-menu-item {",
            "    display: inline-block !important;",
            "    margin: 0 2px !important;",
            "    padding: 0 5px !important;",
            "    background: #EEE !important;",
            "    font-size: 11px !important;",
            "}",
            "",
            ".action-menu .action-menu-panel .action-menu-item a.fl {",
            "    padding: 0 !important;",
            "    font-size: 11px !important;",
            "}",
            "",
            ".action-menu .action-menu-panel .action-menu-button {",
            "    padding: 0 !important;",
            "}",
            "",
            "/**",
            " * Title links - Gap increased underline.",
            " */",
            "",
            "#rcnt h3.r a:hover,",
            "#rcnt span.tl a:hover {",
            "    text-decoration: none !important;",
            "}",
            "",
            "/**",
            " * Keywords - Red highlight.",
            " */",
            "",
            "#rcnt h3.r em,",
            "#rcnt span.tl em,",
            "#rcnt span.st em {",
            "    color: black !important;",
            "    font-weight: bold !important;",
            "}"
        ].join("\n");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it wherever
            document.documentElement.appendChild(node);
        }
    }
})();
// ==UserScript==
// @name         RTaO Bypass
// @namespace    rtaobypasser
// @version      1.0.1
// @description  RTaO Userscript
// @author       rtao.exe
// @icon         https://img5.pic.in.th/file/secure-sv1/10000727975198518d64ff4df6.png
// @match        *://*.work.ink/*
// @match        *://*.direct-link.net/*
// @match        *://*.link-target.net/*
// @match        *://*.link-to.net/*
// @match        *://*.link-center.net/*
// @match        *://*.link-hub.net/*
// @match        *://*.link4sub.com/*
// @match        *://*.up-to-down.net/*
// @match        *://*.linkvertise.com/*
// @match        *://*.link-unlock.com/*
// @match        *://*.auth.platorelay.com/*
// @match        *://*.auth.platoboost.me/*
// @match        *://*.auth.platoboost.app/*
// @match        *://*.pandadevelopment.net/*
// @match        *://*.keyrblx.com/*
// @match        *://*.bstlar.com/*
// @match        *://*.rekonise.com/*
// @match        *://*.rinku.pro/*
// @match        *://*.mboost.me/*
// @match        *://*.hydrogen.lat/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      *
// @run-at       document-start
// ==/UserScript==
(function () {
  "use strict";
  const mainScript = "https://cdn.jsdelivr.net/gh/RTaOexe1/xtarRTaO@main/rtao-omg.user.js";
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.src = mainScript;
  s.async = false;
  (document.head || document.documentElement).appendChild(s);
})();

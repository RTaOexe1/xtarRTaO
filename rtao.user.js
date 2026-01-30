// ==UserScript==
// @name         RTaO USERSCRIPT
// @namespace    rtaobypasser
// @version      1.0.1
// @description  RTaO.MTF
// @author       rtao.exe
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
// @grant        none
// @run-at       document-start
// ==/UserScript==

// ==UserScript==
// @name         RTaO Bypass
// @namespace    rtaobypasser
// @version      0.0.2
// @description  RTaO Bypass
// @author       rtao.exe
// @match        https://work.ink/*
// @match        *://direct-link.net/*
// @match        *://link-target.net/*
// @match        *://link-to.net/*
// @match        *://link-center.net/*
// @match        *://link-hub.net/*
// @match        *://up-to-down.net/*
// @match        *://linkvertise.com/*
// @match        *://auth.platorelay.com/*
// @match        *://auth.platoboost.me/*
// @match        *://auth.platoboost.app/*
// @match        *://pandadevelopment.net/*
// @match        *://keyrblx.com/*
// @match        *://bstlar.com/*
// @match        *://rekonise.com/*
// @match        *://www.rekonise.com/*
// @match        *://mboost.me/*
// @match        *://ads.luarmor.net/*
// @match        *://loot-link.com/s?*
// @match        *://loot-links.com/s?*
// @match        *://lootlink.org/s?*
// @match        *://lootlinks.co/s?*
// @match        *://lootdest.info/s?*
// @match        *://lootdest.org/s?*
// @match        *://lootdest.com/s?*
// @match        *://links-loot.com/s?*
// @match        *://linksloot.net/s?*
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/RTaOexe1/xtarRTaO/main/rtao.user.js
// @downloadURL  https://raw.githubusercontent.com/RTaOexe1/xtarRTaO/main/rtao.user.js
// @grant        none
// ==/UserScript==

(function() {
  const mainScript = "https://cdn.jsdelivr.net/gh/RTaOexe1/xtarRTaO@main/rtao-omg.user.js";
  const s = document.createElement("script");
  s.src = mainScript;
  s.async = false;
  document.documentElement.appendChild(s);
})();

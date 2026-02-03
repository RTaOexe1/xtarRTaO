// ==UserScript==
// @name         RTaO Bypass
// @namespace    rtaobypasser
// @version      1.0.4
// @description  RTaO Userscript (Full-screen Bypass Result Overlay)
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
// @match        *://*.ads.luarmor.net/*
// @match        *://*.luarmor.net/*
// @match        *://*.pandadevelopment.net/*
// @match        *://*.keyrblx.com/*
// @match        *://*.bstlar.com/*
// @match        *://*.rekonise.com/*
// @match        *://*.rinku.pro/*
// @match        *://*.mboost.me/*
// @match        *://*.neoxsoftworks.eu/*
// @match        *://*.hydrogen.lat/*
// @match        *://*.boblox-script.com/*
// @match        *://*.shrinkme.click/*
// @match        *://*.shrtslug.biz/*
// @match        *://*.tpi.li/*
// @match        *://*.lnbz.la/*
// @match        *://*.linkzy.space/*
// @match        *://*.lockr.so/*
// @match        *://*.yorurl.com/*
// @match        *://*.loot-link.com/s?*
// @match        *://*.loot-links.com/s?*
// @match        *://*.lootlink.org/s?*
// @match        *://*.lootlinks.co/s?*
// @match        *://*.lootdest.info/s?*
// @match        *://*.lootdest.org/s?*
// @match        *://*.lootdest.com/s?*
// @match        *://*.links-loot.com/s?*
// @match        *://*.linksloot.net/s?*
// @updateURL    https://raw.githubusercontent.com/RTaOexe1/xtarRTaO/main/rtao.user.js
// @downloadURL  https://raw.githubusercontent.com/RTaOexe1/xtarRTaO/main/rtao.user.js
// @require      https://raw.githubusercontent.com/RTaOexe1/xtarRTaO/main/rtaoexe.user.js
// @grant        GM_xmlhttpRequest
// @connect      *
// @run-at       document-start
// ==/UserScript==

(function() {
  const mainScript = "https://cdn.jsdelivr.net/gh/RTaOexe1/xtarRTaO@main/rtaoexe.user.js";
  const s = document.createElement("script");
  s.src = mainScript;
  s.async = false;
  document.documentElement.appendChild(s);
})();

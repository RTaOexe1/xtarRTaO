// ==UserScript==
// @name         RTaO USERSCRIPT
// @namespace    rtaobypasser
// @version      1.0.2
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
(function () {
  "use strict";
  const MAIN_SCRIPT = "https://cdn.jsdelivr.net/gh/RTaOexe1/xtarRTaO@main/rtao-omg.user.js";
  try {
    if (window.__RTaO_MAIN_LOADED) {
      console.log("[RTaO Loader] main already loaded");
      return;
    }
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = MAIN_SCRIPT;
    s.async = false;
    s.onload = function () {
      window.__RTaO_MAIN_LOADED = true;
      console.log("[RTaO Loader] main script loaded");
    };
    s.onerror = function (e) {
      console.error("[RTaO Loader] failed to load main script", e);
    };
    (document.head || document.documentElement).appendChild(s);
  } catch (e) {
    console.error("[RTaO Loader] error", e);
  }
})();

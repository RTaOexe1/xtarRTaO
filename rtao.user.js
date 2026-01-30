// ==UserScript==
// @name         RTaO Bypass
// @namespace    rtaobypasser
// @version      1.0.9
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
  const INITIAL_KEY = "Your-key";
  
  function getStoredKey() {
    try {
      if (typeof GM_getValue === "function") {
        const v = GM_getValue("rtao_activation_key", "");
        return (v || INITIAL_KEY || "").trim();
      }
    } catch (e) {}
    return (localStorage.getItem("rtao_activation_key") || INITIAL_KEY || "").trim();
  }

  function setStoredKey(k) {
    try {
      if (typeof GM_setValue === "function") {
        GM_setValue("rtao_activation_key", k);
        return;
      }
    } catch (e) {}
    localStorage.setItem("rtao_activation_key", k);
  }

  function clearStoredKey() {
    try {
      if (typeof GM_setValue === "function") {
        GM_setValue("rtao_activation_key", "");
        return;
      }
    } catch (e) {}
    localStorage.removeItem("rtao_activation_key");
  }

  window.key = function key() {
    return getStoredKey();
  };
  try {
    if (typeof GM_registerMenuCommand === "function") {
      GM_registerMenuCommand("RTaO: Set key", async () => {
        const cur = getStoredKey();
        const val = prompt("Enter your RTaO activation key:", cur || "");
        if (val !== null) {
          setStoredKey((val || "").trim());
          alert("Saved key. Reload page to apply.");
        }
      });
      GM_registerMenuCommand("RTaO: Clear key", () => {
        clearStoredKey();
        alert("Key cleared. Reload page.");
      });
    }
  } catch (e) {
    console.warn("GM menu commands not available", e);
  }
  
  const mainScript = "https://cdn.jsdelivr.net/gh/RTaOexe1/xtarRTaO@main/rtao-omg.user.js";
  const s = document.createElement("script");
  s.src = mainScript;
  s.async = false;
  document.documentElement.appendChild(s);

})();

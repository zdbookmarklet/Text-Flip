// ==UserScript==
// @name         Zeta Text Flip (iframe edition)
// @namespace    https://github.com/ztcgh01/Bookmarklet
// @version      1.1.1
// @description  Lightweight GitHub loader for Zeta Text Flip. Keep the same script identity to preserve Tampermonkey settings.
// @match        https://zeta-ai.io/*
// @match        https://frame.pingpong.ai/*
// @run-at       document-idle
// @all-frames   true
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @downloadURL  https://raw.githubusercontent.com/zdbookmarklet/Text-Flip/main/text-flip-loader.user.js
// @updateURL    https://raw.githubusercontent.com/zdbookmarklet/Text-Flip/main/text-flip-loader.user.js
// ==/UserScript==

(() => {
  'use strict';
  const SOURCE = 'https://raw.githubusercontent.com/zdbookmarklet/Text-Flip/main/text-flip.user.js';
  const LOG = '[Zeta Text Flip Loader]';
  // One request per matched document/frame, with a unique URL to avoid stale GitHub CDN copies.
  const url = SOURCE + '?refresh=' + Date.now();
  GM_xmlhttpRequest({
    method: 'GET',
    url,
    timeout: 15000,
    onload(response) {
      if (response.status !== 200 || !response.responseText?.includes('function startTextFlip()')) {
        console.error(LOG, 'Invalid remote response:', response.status);
        return;
      }
      try {
        const run = new Function(
          'GM_getValue', 'GM_setValue', 'GM_addValueChangeListener',
          response.responseText
        );
        run(GM_getValue, GM_setValue, GM_addValueChangeListener);
      } catch (error) {
        console.error(LOG, 'Remote script failed:', error);
      }
    },
    onerror(error) { console.error(LOG, 'GitHub download failed:', error); },
    ontimeout() { console.error(LOG, 'GitHub download timed out'); }
  });
})();

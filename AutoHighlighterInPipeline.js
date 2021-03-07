// ==UserScript==
// @name         Highlight relevant fields in case DisplayForm & EditForm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        [Insert pipeline URL]
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var url = window.location.href;
    if (url.includes("DispForm")){
        document.getElementsByName("SPBookmark_Title")[0].parentElement.parentElement.parentElement.style.backgroundColor="palegreen";
        document.getElementsByName("SPBookmark_Team")[0].parentElement.parentElement.parentElement.style.backgroundColor="yellow";
        document.getElementsByName("SPBookmark_Status")[0].parentElement.parentElement.parentElement.style.backgroundColor="yellow";
        document.getElementsByName("SPBookmark_Priority")[0].parentElement.parentElement.parentElement.style.backgroundColor="palegreen";
    }
    else{
        document.getElementById("Team").parentElement.parentElement.style.backgroundColor="yellow";
        document.getElementById("Status").parentElement.parentElement.style.backgroundColor="yellow";
    }

})();
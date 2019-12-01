// ==UserScript==
// @name         苹果官网广告栏移除小助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动移除苹果官网（中国大陆）顶部的广告占位栏
// @author       夏龙飞
// @include      *://www.apple.com.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // var navbar = document.getElementById("ac-globalnav");
    // navbar.style.top = 0;
    document.getElementById("ac-globalnav").style.top = 0;
    var html = document.getElementsByTagName("html");
    html[0].style.setProperty("margin-top","0","important");
})();

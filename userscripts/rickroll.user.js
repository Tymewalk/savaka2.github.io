// ==UserScript==
// @name        rickroll
// @namespace   http://savaka2.github.io/
// @description Rickrolls everything
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

var as = document.getElementsByTagName('a');
for (i = 0; i < as.length; i++) {
	as[i].href = 'http://savaka2.github.io/thing.html';
}
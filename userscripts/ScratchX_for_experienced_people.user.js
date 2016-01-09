// ==UserScript==
// @name        ScratchX for experienced people
// @namespace   http://savaka2.github.io/
// @description Removes most of the description about what ScratchX is and adds some helpful links
// @include     http://scratchx.org/
// @include     http://scratchx.org/#home
// @version     1
// @grant       none
// ==/UserScript==

var bottomRows = document.getElementsByClassName('bottom-row');
var bottomRow = bottomRows[0];
var divs = bottomRow.getElementsByTagName('div');
var thatDiv = divs[0];
var item = document.createElement('a');
item.href = 'http://savaka2.github.io/scratch-extensions-directory'
item.innerHTML = '<button>Extensions Directory</button>';
thatDiv.appendChild(item);

var home = document.getElementById('home');
var headers = home.getElementsByTagName('header');
var thatHeader = headers[0];
var sections = thatHeader.getElementsByTagName('section');
var thatSection = sections[0];
var alsoItem = document.createElement('div');
alsoItem.style = 'text-align:center; padding-top:10px;';
alsoItem.innerHTML = '<a style="color:#ffffff;" href="#scratch">Launch ScratchX Without Extension</a>';
thatSection.appendChild(alsoItem);

var class1s = document.getElementsByClassName('scratch-vs-scratchx');
var class2s = document.getElementsByClassName('who-uses-scratchx');
var class1 = class1s[0];
var class2 = class2s[0];
class1.style.display = 'none';
class2.style.display = 'none';
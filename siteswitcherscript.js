function showMore() {
	if (document.getElementById('morepages').style.display == 'initial') {
		document.getElementById('morepages').style.display = 'none';
	} else {
		document.getElementById('morepages').style.display = 'initial';
	}
}
function switchSite() {
	if (document.getElementById('siteswitcher').style.display == 'initial') {
		document.getElementById('siteswitcher').style.display = 'none';
		document.getElementsByTagName('main')[0].style.display = 'initial';
	} else {
		document.getElementsByTagName('main')[0].style.display = 'none';
		document.getElementById('siteswitcher').style.display = 'initial';
	}
}

var ss-projects = [
	'<a href="scratch-extensions/index.html">Scratch Extensions</a>',
	'<a href="ext-open/index.html">Ext Open</a>'
];

var ss-more = [
	'<a href="sbx-files/index.html">SBX Files</a>',
	'<a href="something/index.html">Something</a>',
	'<a href="scratch-extensions-directory/index.html">Scratch Extensions Directory</a>',
	'<a href="blog/index.html">Blog</a>'
];

var list-projects = document.getElementById('ss-list-projects');
var list-more = document.getElementById('ss-list-more');
var item;
for (i = 0; i < ss-projects.length; i++) {
	item = document.createElement('li');
	item.innerHTML = ss-projects[i];
	list-projects.appendChild(item);
}
for (i = 0; i < ss-more.length; i++) {
	item = document.createElement('li');
	item.innerHTML = ss-more[i];
	list-more.appendChild(item);
}

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

window.onload = function() {
	if (document.getElementById('ss-home') != null) {
		var ss_projects = [
			'<a href="scratch-extensions/index.html">Scratch Extensions</a>',
			'<a href="ext-open/index.html">Ext Open</a>'
		];
		var ss_more = [
			'<a href="sbx-files/index.html">SBX Files</a>',
			'<a href="something/index.html">Something</a>',
			'<a href="scratch-extensions-directory/index.html">Scratch Extensions Directory</a>',
			'<a href="blog/index.html">Blog</a>'
		];
	} else {
		var ss_projects = [
			'<a href="../scratch-extensions/index.html">Scratch Extensions</a>',
			'<a href="../ext-open/index.html">Ext Open</a>'
		];
		var ss_more = [
			'<a href="../sbx-files/index.html">SBX Files</a>',
			'<a href="../something/index.html">Something</a>',
			'<a href="../scratch-extensions-directory/index.html">Scratch Extensions Directory</a>',
			'<a href="../blog/index.html">Blog</a>'
		];
	}
	var list_projects = document.getElementById('ssProjects');
	var list_more = document.getElementById('ssMore');
	var item;
	for (i = 0; i < ss_projects.length; i++) {
		item = document.createElement('li');
		item.innerHTML = ss_projects[i];
		list_projects.appendChild(item);
	}
	for (i = 0; i < ss_more.length; i++) {
		item = document.createElement('li');
		item.innerHTML = ss_more[i];
		list_more.appendChild(item);
	}
};
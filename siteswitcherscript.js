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
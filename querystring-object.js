function queryStringObj(locsearch) {
	var qs = locsearch.substring(1);
	var result = {};
	var pairs = qs.split('&');
	var two;
	var i;
	for (i in pairs) {
		two = (pairs[i]).split('=');
		var key = two[0];
		var value = two[1];
		result[key] = value;
	}
	return result;
}
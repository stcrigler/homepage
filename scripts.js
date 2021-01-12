function onEnter(e) {
	if (event.keyCode == 13) {
		search();
	}
}
function search() {
	var url = "https://www.google.com/search?q=" + inp.value;
	window.open(url);
}

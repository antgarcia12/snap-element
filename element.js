function changeMe(me) {
	return (function() {
		document.getElementById('change-me').innerHTML = "Crazy, " + me;
	});
}
	var chang-me = changeMe("Crazy" , "me");
change-me();
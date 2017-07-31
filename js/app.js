(function() {
	
	var splash = function () {
		var splashScreen = document.querySelector('.splash');
		var home = document.querySelector('.container');
		splashScreen.style.display = 'none';
		home.classList.remove('hidden');
	}

	setTimeout(splash, 3000);

})();
(function() {
	page('/',index);
	page('/acerca-de-mi',sobreMi);
	// page('/habilidades', habilidades);
	// page('/proyectos',proyectos);
	page({
		hashbang:true
	});

	function index() {
		$('#inicio').removeClass('hidden');
		$('#fondo-sobre-mi').addClass('hidden');
	};

	function sobreMi(){
		$('#inicio').addClass('hidden');
		$('#fondo-sobre-mi').removeClass('hidden');
	}

	var cargarPagina = function () {
		// body...
	}
	var splash = function () {
		var splashScreen = document.querySelector('.splash');
		var splashScreen = document.querySelector('.splash');
		var home = document.querySelector('.contenedor');
		splashScreen.style.display = 'none';
		home.classList.remove('hidden');
	}

	setTimeout(splash, 1);
	$(document).ready(cargarPagina);
})();
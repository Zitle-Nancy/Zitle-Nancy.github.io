(function() {
	page('/',index);
	page('/acerca-de-mi',sobreMi);
	// page('/habilidades', habilidades);
	// page('/proyectos',proyectos);
	page({
		hashbang:true
	});

	function index() {
		$(".secciones").addClass("hidden");
		$("#inicio").removeClass("hidden");
		$("#inicio").addClass("contenedor-logo");
		$('body').removeClass("fondo-sobre-mi");
	};

	function sobreMi(){
		// secciones por defecto oculta a todo el elemento
		$(".secciones").addClass("hidden");
		$("#sobre-mi").addClass("contenedor-sobre-mi");
		$("#sobre-mi").removeClass("hidden");
		$("#inicio").removeClass("contenedor-logo");
		$('body').addClass("fondo-sobre-mi");
		
		// $('body').css('background-image', 'url(images/image.jpg)');
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
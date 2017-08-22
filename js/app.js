(function() {
	page('/',index);
	page('/acerca-de-mi',sobreMi);
	page('/habilidades', habilidades);
	page('/mas-habilidades', masHabilidades);
	page('/proyecto-dos',proyectoDos);
	page('/proyecto-tres',proyectoTres);
	page('/proyectos',proyectos);
	page('/proyecto-cuatro',proyectoCuatro);
	page({
		hashbang:true
	});

	$(document).keyup(tecla);

	function index() {
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		$('#inicio').removeClass('hidden');
		$('#fondo-sobre-mi').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
	};

	function sobreMi(){
		// esta linea te dara el color de la seccion
		var colorSobreMi = $('#fondo-sobre-mi').css('background-color');
		$('body').css('background',colorSobreMi);
		// console.log(colorSobreMi);
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		$('#inicio').addClass('hidden');
		$('#fondo-sobre-mi').removeClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyectoTres').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
	}
	function habilidades(){
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		var colorHabilidades = $('#habilidades').css('background-color');
		$('body').css('background',colorHabilidades);
		$('#habilidades').removeClass('hidden');
		$('#fondo-sobre-mi').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
		$('#habilidades-graficas').load('habilidades.html #seccion-habilidades', function() {
			setTimeout(function () {
				var habilidades = [
					{
						nombre: "html",
						nivel: 1
					},
					{
						nombre: "css",
						nivel: 1
					},
					{
						nombre: "javascript",
						nivel: 1
					},
					{
						nombre: "php",
						nivel: 0
					},
					{
						nombre: "bootstrap",
						nivel: 1
					},
					{
						nombre: "materializecss",
						nivel: 1
					},
					{
						nombre: "jQuery",
						nivel: 1
					},
					{
						nombre: "react",
						nivel: 0
					}
				];
				leerPagina(habilidades);
			}, 200);
		});
	}

	function masHabilidades(){
		var colorMasHabilidades = $('#masHabilidades').css('background-color');
		$('body').css('background',colorMasHabilidades);
		$('#masHabilidades').removeClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
		$('#habilidades-graficas-dos').load('habilidades.html #seccion-habilidades-dos', function() {
			setTimeout(function(){
				var masHabilidades=[
					{
						nombre: 'git',
						nivel: 1
					},
					{
						nombre: 'mysql',
						nivel: 0
					},
					{
						nombre: 'sass',
						nivel: 0
					},
					{
						nombre: 'gulp',
						nivel: 0
					},
					{
						nombre: 'agile',
						nivel: 1
					}
				];
				leerPagina(masHabilidades);
			}, 200);
		});

	}

	function tecla(e) {
		var teclaPresionada = e.keyCode;
		console.log(teclaPresionada);
		// console.log(direccion);
		if(teclaPresionada == 39){
			switch(location.hash){
				case "#!/proyectos":
					page.redirect('/proyecto-dos');
					break;
				case "#!/proyecto-dos":
					page.redirect('/proyecto-tres');
					break;
				case "#!/proyecto-tres":
					page.redirect('/proyecto-cuatro');
					break;
			}
			
		}else if(teclaPresionada == 37){
			switch(location.hash){
				case "#!/proyecto-cuatro":
				page.redirect('/proyecto-tres');
				break;
				case "#!/proyecto-tres":
				page.redirect('/proyecto-dos');
				break;
				case "#!/proyecto-dos":
				page.redirect('/proyectos');
				break;
			}
		}
		

	}

	function proyectos(){
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		// mostrarCodigo();
		var colorProyectos = $('.formato-proyectos').css('background-color');
		console.log(colorProyectos);
		$('body').css('background', colorProyectos);
		$('#proyectos').removeClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
	}
	function proyectoDos(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		console.log(colorProyectos);
		$('body').css('background', colorProyectos);
		$('#proyecto-dos').removeClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#index').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
	}
	function proyectoTres(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		$('body').css('background', colorProyectos);
		$('#proyecto-tres').removeClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#index').addClass('hidden');
		$('#proyecto-cuatro').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
	}
	function proyectoCuatro(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		$('body').css('background', colorProyectos);
		$('#proyecto-cuatro').removeClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#index').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
	}

	var splash = function () {
		var splashScreen = document.querySelector('.splash');
		var splashScreen = document.querySelector('.splash');
		var home = document.querySelector('.contenedor');
		splashScreen.style.display = 'none';
		home.classList.remove('hidden');

	}

	setTimeout(splash, 1500);
})();
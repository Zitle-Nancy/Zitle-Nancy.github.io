var leerPagina = function(habilidades) {
	var rating = [30, 60];
	var niveles = ["Básico", "Intermedio", "Avanzado"];
	habilidades.forEach(function (habilidad) {
		// { nombre: "JS", nivel: 0 }
		document.getElementById(habilidad.nombre).innerHTML = niveles[habilidad.nivel];
		var diferencia = (habilidad.nivel === 0) ? rating[0] : rating[1]; 
		document.querySelector('.' + habilidad.nombre + ' .js-rating-progress').style.strokeDashoffset = 100 - diferencia;
	});
};
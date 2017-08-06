var leerPagina = function() {
	var rating = [30, 60, 95,80];
	var ratingBar = document.querySelectorAll(".js-rating-progress");
	document.querySelector('#walk-score').innerHTML = "Intermedio";
	document.querySelector('#transit-score').innerHTML = "Intermedio";
	document.querySelector('#bike-score').innerHTML = "Intermedio";
	document.querySelector('#javascript').innerHTML = "Básico";
	document.querySelector('#bootstrap').innerHTML = "Intermedio";
	document.querySelector('#materializecss').innerHTML = "Intermedio";
	document.querySelector('#react').innerHTML = "Básico";
	document.querySelector('#jQuery').innerHTML = "Intermedio";
	

	document.querySelector('.walk-container .js-rating-progress').style.strokeDashoffset = 100 - rating[1];
	document.querySelector('.transit-container .js-rating-progress').style.strokeDashoffset = 100 - rating[1];
	document.querySelector('.bike-container .js-rating-progress').style.strokeDashoffset = 100 - rating[1];
	document.querySelector('.javascript .js-rating-progress').style.strokeDashoffset = 100 - rating[0];
	document.querySelector('.bootstrap .js-rating-progress').style.strokeDashoffset = 100 - rating[1];
	document.querySelector('.materializecss .js-rating-progress').style.strokeDashoffset = 100 - rating[1];
	document.querySelector('.react .js-rating-progress').style.strokeDashoffset = 100 - rating[0];
	document.querySelector('.jQuery .js-rating-progress').style.strokeDashoffset = 100 - rating[0];
	for (i=0; i<ratingBar.length; i++) {
	  if (rating[i] <= 50) {
	    ratingBar[i].classList.add('under-50');
	  }
	  if (50 < rating[i] && rating[i] <= 75) {
	    ratingBar[i].classList.add('under-75');
	  }
	  if (75 < rating[i] && rating[i] <= 80) {
	    ratingBar[i].classList.add('over-75');
	  }
	  if (80 < rating[i]) {
	    ratingBar[i].classList.add('under-80');
	  }
	}
}

// window.addEventListener('load',leerPagina);
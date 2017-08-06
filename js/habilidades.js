var leerPagina = function() {
	var rating = [30, 60, 95,80];
	var ratingBar = document.querySelectorAll(".js-rating-progress");
	document.querySelector('#walk-score').innerHTML = rating[0];
	document.querySelector('#transit-score').innerHTML = rating[1];
	document.querySelector('#bike-score').innerHTML = rating[2];
	document.querySelector('#javascript').innerHTML = rating[3];

	document.querySelector('.walk-container .js-rating-progress').style.strokeDashoffset = 100 - rating[0];
	document.querySelector('.transit-container .js-rating-progress').style.strokeDashoffset = 100 - rating[1];
	document.querySelector('.bike-container .js-rating-progress').style.strokeDashoffset = 100 - rating[2];
	document.querySelector('.javascript .js-rating-progress').style.strokeDashoffset = 100 - rating[3];

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
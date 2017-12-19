// Brew One Two 
// =====================================================================================
	
$(document).ready(function(){

	// Form submit event
	$("#brew-form-submit").on("click", function() {
		event.preventDefault();

		// manipulation of user input values before adding it to our query string/API call...
		var beerName = $("#beer-name-input").val().trim();
		var beerNameLC = beerName.toLowerCase();

		var breweryName = $("#brewery-name-input").val().trim();
		var breweryNameLC = breweryName.toLowerCase();

		var searchString = breweryNameLC + " " + beerNameLC;
		var encodeSearchString = encodeURIComponent(searchString);
		// console.log(encodeSearchString);

		// Send the POST request.
	    $.ajax("/api", {
	      type: "POST",
	      data: {
	      	beerNameLC : beerNameLC,
	      	breweryNameLC : breweryNameLC,
	      	encodeSearchString : encodeSearchString
	      }
	    }).then(function(data) {
	        window.location.href = "/results";
      	});
	});

	// Beer Glass Animation
	function beerRise() {
	    $('.beer').addClass('fill');
	    $('.head').addClass('active');
	  }
	
	function pourBeer() {
	    $('.pour').addClass('pouring');
	    beerRise();
	    setTimeout(function() {
	      $('.pour').addClass('end');
	    }, 1500);
	}
	setTimeout(function() {
	    pourBeer();
	}, 3000);

	// Modal
    $(window).on('load',function(){
        $('#myModal').modal('show');
    });

	$(".modal").each(function(index) {
		$(this).on('show.bs.modal', function(e) {
    		var open = $(this).attr('data-easein');
			$('.modal-dialog').velocity('transition.' + open);
  		});
	});

});	
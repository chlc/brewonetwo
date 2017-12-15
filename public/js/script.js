// Brew One Two 
// =====================================================================================
	
$(document).ready(function(){
	
	$("#brew-form-submit").on("click", function() {
		event.preventDefault();

		// manipulation of user input values before adding it to our query string/API call...
		var beerName = $("#beer-name-input").val().trim();
		var beerNameLC = beerName.toLowerCase();

		var breweryName = $("#brewery-name-input").val().trim();
		var breweryNameLC = breweryName.toLowerCase();

		var searchString = breweryNameLC + " " + beerNameLC;
		var encodeSearchString = encodeURIComponent(searchString);
		console.log(encodeSearchString);

		// Send the POST request.
	    $.ajax("/api", {
	      type: "POST",
	      data: {
	      	beerNameLC : beerNameLC,
	      	breweryNameLC : breweryNameLC,
	      	encodeSearchString : encodeSearchString
	      }
	    }).then(
	      function() {
	        console.log("created new beer");
	        // Reload the page to get the updated list
	        // location.reload();
	        window.location.href = "/results";
      	});
	});
});	
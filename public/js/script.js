// Brew One Two 
// =====================================================================================
	
$(document).ready(function(){
	
	// var getIDOfUser = function() {
	// 	$.get("/api/userId", function(data) {
	// 		console.log(data);
	// 		window.location.href = "/results/" + data;
	// 	})
	// };


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
});	
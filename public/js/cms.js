

// When user chirps (clicks addBtn)
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a car object
  var car = {
    Make: $("#Make").val().trim(),
    Model: $("#Model").val().trim(),
    Year: $("#Year").val().trim(),
    Price: $("#Price").val().trim(),
    Mileage: $("#Mileage").val().trim(),
    DriveType: $("#DriveType").val().trim(),
    Engine: $("#Engine").val().trim(),
    Transmission: $("#Transmission").val().trim(),
    FuelType: $("#FuelType").val().trim(),
    MPG: $("#MPG").val().trim(),
    Interior: $("#Interior").val().trim(),
    Exterior: $("#Exterior").val().trim(),
    VehicalFeatures: $("#VehicalFeatures").val().trim(),
    Contact: $("#Contact").val().trim(),
   

  



  };

  console.log(car);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", car)
    // On success, run the following code
    .then(function() {

      // var row = $("<div>");
      // row.addClass("chirp");

      // row.append("<p>" + car.author + " chirped: </p>");
      // row.append("<p>" + car.body + "</p>");
      // row.append("<p>At " + moment(car.created_at).format("h:mma on dddd") + "</p>");

      // $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  // $("#author").val("");
  // $("#chirp-box").val("");
});
// $("#ghjikopsubmit").on("click", function(event) {
  // console.log(typeof(names));
  // console.log("file name "+ namesNew);
// When user chirps (clicks addBtn)
// })
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();
  var files = $('#basicUploadFile').prop("files");
  var names = $.map(files, function(val) { return val.name; });
//  var names= JSON.stringify(files);
    // names.toString();
    namesNew =names.join(", ")
    
  
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
    images:namesNew
   

  



  };

  console.log(car);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", car)
    // On success, run the following code
    .then(function() {

        $("#btnSubmit").trigger("click");
      

       $("#Make").val("");
       $("#Model").val("");
       $("#Year").val("");
       $("#Price").val("");
       $("#Mileage").val("");
       $("#DriveType").val("");
       $("#Engine").val("");
       $("#Transmission").val("");
       $("#FuelType").val("");
       $("#MPG").val("");
       $("#Interior").val("");
       $("#Exterior").val("");
       $("#VehicalFeatures").val("");
       $("#Contact").val("");
      // var row = $("<div>");
      // row.addClass("chirp");

      // row.append("<p>" + car.author + " chirped: </p>");
      // row.append("<p>" + car.body + "</p>");
      // row.append("<p>At " + moment(car.created_at).format("h:mma on dddd") + "</p>");

      // $("#chirp-area").prepend(row);

    });
    // $.post("/upload").then(function(){


    // });

  // Empty each input box by replacing the value with an empty string
  // $("#author").val("");
  // $("#chirp-box").val("");
});


// $("#imageUpload").on("click",function(){
  // var blobFile = $('#imgesInput').files[0];
  // var formData = new FormData();
  // formData.append("fileToUpload", blobFile);


// $.post("/upload_images",form);

// })


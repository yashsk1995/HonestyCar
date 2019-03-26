$(document).ready(function () {


  $("#searchQuery").hide();
  $("#searchQuery").trigger("click");
});

// Yash cOde

// 1.
$(".select12").change(function () {
  $("#searchQuery").trigger("click");

})
$("#price1").on('input', function () {
  $("#searchQuery").trigger("click");

})
$("#price2").on('input', function () {
  $("#searchQuery").trigger("click");

})
$("#year1").on('input', function () {
  $("#searchQuery").trigger("click");

})
$("#year2").on('input', function () {
  $("#searchQuery").trigger("click");

})
$("input[name='optradio']").change(function () {
  $("#searchQuery").trigger("click");

})


$("#searchQuery").on("click", function (event) {
  event.preventDefault();
  // alert("hu")


  var yourArray = $(".select12 :selected").text();
  //  $("input[name='type']:checked").val();
  console.log(yourArray);
  // console.log($("input[name='optradio']:checked").attr('value1');

  var Minprice1 = $("#price1").val();
  var Maxprice2 = $("#price2").val();
  // var Minprice1 = $("input[name='optradio']:checked").attr('value1');
  // var Minprice1 = $("input[name='optradio']:checked").attr('value2');
  var Minyear1 = $("#year1").val();
  var Maxyear2 = $("#year2").val();
  var Mileage = $("input[name='optradio']:checked").val();


  if (Minprice1 == "") {
    Minprice1 = 1;
  }
  if (Maxprice2 == "") {
    Maxprice2 = 500000000;
  }
  if (Minyear1 == "") {
    Minyear1 = 1990;
  }
  if (Maxyear2 == "") {
    Maxyear2 = 2050;
  }
  if (Mileage == undefined) {
    Mileage = 200000;
  }




  console.log(Minprice1, Maxprice2, Minyear1, Maxyear2, Mileage);

  $.get("/api/posts/" + yourArray + "/" + Minprice1 + "/" + Maxprice2 + "/" + Minyear1 + "/" + Maxyear2 + "/" + Mileage, function (data) {
    console.log("Posts", data);
    console.log("jhikbbjkbjkl");
    var html = "";
    var image2 = new Array(20);
    var image4 = new Array(2);

    for (var i = 0; i < data.length; i++) {
      //   <div class="card" style="width: 18rem;">
      //   <img class="card-img-top" src="..." alt="Card image cap">
      //   <div class="card-body">
      //     <h5 class="card-title">Card title</h5>
      //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //     <a href="#" class="btn btn-primary">Go somewhere</a>
      //   </div>
      // </div>
      // var div1 = $("<div>");
      //     div1.addClass("card");
      // var div2 = $("<div>");
      // div2.addClass("card-body");
      // div2.appendTo(div1);

      // var h5 = $("<h5>");
      // h5.addClass("card-title");
      // h2.text(data[i].make);
      // h2.appendTo(div2);
      // $(".result").append(div1);   
      // html += "<div class='card'>card " + i +"</div>";

      //  html+= "<div class='card' style='width: 30rem;'>";
      // html += "<img class='card-img-top top1' src='' alt='Card image cap'>";
      // html += "<div class='card-body'>";
      // html += "<h5 class='card-title'>" + data[i].Make +"</h5>";
      // html += "<p class='card-text'>"+data[i].Price +"</p>";

      // html +=" </div>";
      // html+= "</div>";
      var imagesArray4 = data[i].images;
      // console.log(imagesArray2);
      var newIMge4 = imagesArray4.split(", ");
      // console.log(newIMge2);
      image4[0] = new Image();
  
      image4[0].src = '/img/id_' + data[i].id + "/" + newIMge4[0];

      html += "<br>";
      html += "<div class='container'>";
      html += "<div class='row card11'>";
      html += "<div class='col-md-3'>";
      html += "<br>";
      html += "<br>";
      html += "<br>";
      html += "<br>";
      html += "<br>";
      html += "<img class='imgwqrr zoomin' src="+ image4[0].src +" alt='Car img' />"
      html += "</div>";
      html += "<div class='col-md-9'>";

      html += "<div class='row'>";
      html += "<div class='col-md-12'>";
      html += "<h3 class='card-title1  HeadingCARD '><b>" + data[i].Make + " " + data[i].Model + " </b></h3>";
      html += "<hr>";
      html += "</div>";
      // html += "<div class='col-md-4'>";
      
      // html += "</div>";
      
      html += "</div>";
      html += "<div class='row'>";
      html += "<div class='col-md-8'>";
      html += "<p class='card-text1 texTLeft miles1'><i class='fa fa-automobile' style='font-size:20px'></i><b> " + data[i].Mileage + " miles</b> </p>";
      html += "<p class='card-text1 texTLeft MPG'> MPG:" + data[i].MPG + "</p>";
      html += "<p class='card-text1 texTLeft Interior'><i class='fa fa-bullseye'></i> Engine: " + data[i].Engine + "<br> <i class='fa fa-bullseye'></i> Interior: " + data[i].Interior + "<br> <i class='fa fa-bullseye'></i> Exterior: " + data[i].Exterior + "<br>  <i class='fa fa-bullseye'></i>" + "   " + "  DriveType: " + data[i].DriveType + "<br>   <i class='fa fa-bullseye'></i> Transmission: " + data[i].Transmission + "</p>";
      //  modal
      html+="  <div class='modal fade modalCss' id='exampleModal"+data[i].id  +"' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
      html+="     <div class='modal-dialog modalCss' role='document'>";
      html += "    <div class='modal-content '>";
      html += "     <div class='modal-header'>";
      html += "      <h5 class='modal-title'><h1>"+data[i].Make + " "+data[i].Model + " "+ data[i].Year+ " "+"</h1></h5>";
      html += "<hr>"
      html += "      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
      html += "        <span aria-hidden='true'>&times;</span>";
      html += "     </button>";
      
      
      
      html += "   </div>";
      html += "   <div class='modal-body'>";
    //  slider 
     
    html += "    <div class='container'>";
    html += "  <div id='myCarousel"+ data[i].id + "' class='carousel slide ' data-ride='carousel'>";
    // html += "  <ol class'carousel-indicators'>";
    
    // html += "     <li data-target='#myCarousel' data-slide-to='0' class='active'></li>";
    // html += "      <li data-target='#myCarousel' data-slide-to='1'></li>";
    // html += "     <li data-target='#myCarousel' data-slide-to='2'></li>";
    // html+= "</ol>";
    html+= "<div class='carousel-inner  imgslIder' >";


    var imagesArray2 = data[i].images;
    console.log(imagesArray2);
    var newIMge2 = imagesArray2.split(", ");
    console.log(newIMge2);
    image2[0] = new Image();

    image2[0].src = '/img/id_' + data[i].id + "/" + newIMge2[0];

    html += "      <div class='item active '>";
    html += "       <img class='imgslIder' src="+ image2[0].src +" alt='Los Angeles'>";
  
    html += "         <div class='carousel-caption'>";
  
    html += "      </div>";    
  html += "    </div>";
    for (j = 1; j < newIMge2.length; j++) {
      image2[j] = new Image();

      image2[j].src = '/img/id_' + data[i].id + "/" + newIMge2[j];
      // console.log(image[j].src);
      // html += "<img class='imgwqrr' src= " + image2[j].src + " alt='' />"
 html += "      <div class='item'>";
    html += "       <img src="+ image2[j].src +" alt='Los Angeles' height='50'>";
  
    html += "         <div class='carousel-caption'>";
  
    html += "      </div>";    
  html += "    </div>";



      // +  image[j].src +
    }


  //   html += "      <div class='item active'>";
  //   html += "       <img src='./img/p1.jpg' alt='Los Angeles' style='width:70%; height:20%;'>";
  //   html += "         <div class='carousel-caption'>";
  // html += "      </div>";    
  // html += "    </div>";
  // html += "      <div class='item'>";
  //   html += "       <img src='./img/p2.jpg' alt='Los Angeles' style='width:70%;'>";
  //   html += "         <div class='carousel-caption'>";
  // html += "      </div>";    
  // html += "    </div>";
  // html += "      <div class='item'>";
  //   html += "       <img src='./img/p3.jpg' alt='Los Angeles' style='width:70%;'>";
  //   html += "         <div class='carousel-caption'>";
  // html += "      </div>";    
  // html += "    </div>";

     
    
     
  
  html += " </div>";

  html += "  <a class='left carousel-control' href='#myCarousel"+ data[i].id + "' data-slide='prev'>";
  html += "  <span class='glyphicon glyphicon-chevron-left gyphfiiconSLider'></span>";
  html += "   <span class='sr-only gyphfiiconSLider'>Previous</span>";
  html += " </a>";
  html += " <a class='right carousel-control' href='#myCarousel"+ data[i].id + "' data-slide='next'>";
  html += "   <span class='glyphicon glyphicon-chevron-right gyphfiiconSLider'></span>";
  html += "  <span class='sr-only  '>Next</span>";
  html += "  </a>";
  html += "</div>";
  // html += "</div>";


// slider
html+= "<h2 class='FeatVehical'>Details</h2>";
html+= "<hr>";
html+="<br>";


html+= "<div class='row'>";
html+= " <div class='col-sm-5'>";
html+= "<p class='TextDeatils'> Mileage : "+data[i].Mileage+"<hr></p><br>";
html+= "<p class='TextDeatils'> MPG : "+data[i].MPG+"<hr></p><br>";
html+= "<p class='TextDeatils'> Engine : "+data[i].Engine+"<hr></p><br>";
html+= "<p class='TextDeatils'> Exterior : "+data[i].Exterior+"<hr></p><br>";


html+="</div>";
html+= " <div class='col-sm-2'>";
html+="</div>";


html+= " <div class='col-sm-5'>";
html+= "<p class='TextDeatils'> DriveType : "+data[i].DriveType+"<hr></p><br>";
html+= "<p class='TextDeatils'> Transmission : "+data[i].Transmission+"<hr></p><br>";
html+= "<p class='TextDeatils'> FuelType : "+data[i].FuelType+"<hr></p><br>";
html+= "<p class='TextDeatils'> Interior : "+data[i].Interior+"<hr></p><br>";
html+="<br><br><br>";


html+="</div>";

html+= "</div>";
html+= "<div class='row'>";
html+= " <div class='col-sm-2'></div>";
html+= " <div class='col-sm-8'><h2 class='FeatVehical'>Vehical Features<hr></h2></div>";
html+= " <div class='col-sm-2'></div>";
html+= "</div>";
html+= "</br>";

html+= "<div class='row'>";
html+= " <div class='col-sm-2'></div>";
html+= " <div class='col-sm-8'><h2>"+data[i].VehicalFeatures+"</h2></div>";
html+= " <div class='col-sm-2'></div>";

html+= "</div>";
html+="<br>";


// old

// html+= "<div class='row'>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].Mileage+"</h2></div>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].MPG+"</h2></div>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].Engine+"</h2></div>";

// html+= "</div>";
// html+="<br>";

// html+= "<div class='row'>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].DriveType+"</h2></div>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].Transmission+"</h2></div>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].Interior+"</h2></div>";

// html+= "</div>";
// html+="<br>";

// html+= "<div class='row'>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].Exterior+"</h2></div>";
// html+= " <div class='col-sm-4'><h2><span class='glyphicon glyphicon-asterisk'>"+data[i].FuelType+"</h2></div>";
// html+= "</div>";
// html+="<br>";



// old finish

     
      // html += "     <p>Modal body text goes here.</p>";
      // html += "<div class='message" + data[i].id + " msg'  data-id=" + data[i].id + "> " + data[i].Engine + "  </div>";
      // html += "<div class='message" + data[i].id + " msg'  data-id=" + data[i].id + "> " + data[i].FuelType + "  </div>";
      // html += "<div class='message" + data[i].id + " msg'  data-id=" + data[i].id + "> " + data[i].VehicalFeatures + "  </div>";
      // html += "<div class='message" + data[i].id + " msg'  data-id=" + data[i].id + "> " + data[i].Contact + "  </div>";
    
      html += "    </div>";
      html += "    <div class='modal-footer'>";
      html += "       <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>";
      html += "    </div>";
      html += "    </div>";
      html += " </div>";
      html += " </div>";

      //  modal

      // slider

      //  html+= "<div id='myCarousel' class='carousel slide slider1234' data-ride='carousel'>";

      //  html+= " <ol class='carousel-indicators'>"
      //  html+= "<li data-target='#myCarousel' data-slide-to='0' class='active'></li>";
      //  html+= "<li data-target='#myCarousel' data-slide-to='1'></li>";
      //  html+= "<li data-target='#myCarousel' data-slide-to='2'></li>";
      //  html+= "</ol>";

      //  html+= "<div class='carousel-inner'>";
      //  html+= "<div class='item active'>";
      //  html+= "<img src='../img/p1.jpg' alt='car4'>";
      //  html+= "</div>";

      //   html+= "<div class='item'>";
      //   html+= "<img src='../img/p2.jpg' alt='car2'>";
      //   html+= "</div>";

      //   html+=  "<div class='item'>";
      //   html+=  "<img src='../img/p3.jpg' alt='car3'>";
      //   html+=  "</div>"
      //   html+=  "</div>"


      //   html+= "<a class='left carousel-control' href='#myCarousel' data-slide='prev'>";
      //   html+=  "<span class='glyphicon glyphicon-chevron-left'></span>";
      //   html+=  "<span class='sr-only'>Previous</span>";
      //   html+=  "</a>";
      //   html+=  "<a class='right carousel-control' href='#myCarousel' data-slide='next'>";
      //   html+=   "<span class='glyphicon glyphicon-chevron-right'></span>";
      //   html+=   "<span class='sr-only>Next</span>";
      //   html+=   "</a>";
      //   html+=   "</div>";

      // slider finish


      html += "</div>";
      html += "</div>";
      html += "<div class='col-md-4'>";
      html += "<p class='card-text1 ReatailHead'>Retail Price  <p class='price1'> $ " + data[i].Price + "</p></p>";
      html += "<br>";
      html += "<button class='readmore" + data[i].id + "  readmore' data-id=" + data[i].id +" data-toggle='modal' data-target='#exampleModal"+data[i].id +"' >Read More...</button>";

      html += "</div>";
      html += "</div>";
      
      html += "</div>";
     
      html += "</div>";
      // html += "<div class='row'>";
      // html += "<div class='col-md-8'>";
      // html += "</div>";
      // html += "</div>";
      





      
      html += "</div>";
      html += "</div>";
      html += "<br>";
      html += "<hr>";


      $(document).ready(function () {
        $(".msg").hide();
        $("button.readmore").click(function () {
          var id = $(this).data("id");
          // $(".message").arr("slow");   
          $(".message" + $(this).data("id")).show("slow");


          // $(this).data("id").show("slow");
          //   $("button.readmore").click(function(){
          //     $(".message"+ $(this).data("id")).hide();
          //     // $(this).data("id").hide();



          // });  
        }
        )
      }
      )
    }
    $(".result").html(html);

  });
})


// $("#Search1").on("click", function(event) {
//   event.preventDefault();
// console.log("search111111");
$.get("/api/posts/last10/jioj", function (data) {
  console.log("Posts2222", data);
  console.log(data);
  // var imagesArray= data[0].images;
  // var newIMge = imagesArray.split(",");
  // console.log(newIMge);
  var html = "";
  var image = new Array(20);

  for (var i = 0; i < data.length; i++) {
    //   <div class="card" style="width: 18rem;">
    //   <img class="card-img-top" src="..." alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>
    // var div1 = $("<div>");
    //     div1.addClass("card");
    // var div2 = $("<div>");
    // div2.addClass("card-body");
    // div2.appendTo(div1);

    // var h5 = $("<h5>");
    // h5.addClass("card-title");
    // h2.text(data[i].make);
    // h2.appendTo(div2);
    // $(".result").append(div1);   
    // html += "<div class='card'>card " + i +"</div>";

    // html += "<a href='#' class='btn btn-primary'>"+  +"</a>";
    var imagesArray = data[i].images;
    console.log(imagesArray);
    var newIMge = imagesArray.split(", ");
    console.log(newIMge);

    html += "<br>";
    html += "<div class='row card1'>";
    html += "<div class='col-md-4'>";
   
      image[0] = new Image();

      image[0].src = '/img/id_' + data[i].id + "/" + newIMge[0];
      // console.log(image[j].src);
      html += "<img class='imgwqrr' src= " + image[0].src + " alt='' />"
      // +  image[j].src +

    html += "</div>";
    html += "<div class='col-md-8'>";
    html += "<h3 class='card-title1 '><b>" + data[i].Make + " " + data[i].Model + " </b></h3>";
    html += "<p class='card-text1 price1'> $ " + data[i].Price + "</p>";
    html += "<p class='card-text1 miles1'><i class='fa fa-automobile' style='font-size:20px'></i><b> " + data[i].Mileage + " miles</b> </p>";
    html += "<p class='card-text1'> " + data[i].MPG + "</p>";
    html += "<p class='card-text1'> <i class='fa fa-bullseye'></i> Interior -    " + data[i].Interior + "  <i class='fa fa-bullseye'></i>" + "   " + "  DriveType -   " + data[i].DriveType + "  <i class='fa fa-bullseye'></i> Transmission -    " + data[i].Transmission + "</p>";


    html += "</div>";
    html += "</div>";




  }
  $(".resultHome1").html(html);
})
// })


$("#Search132").on("click", function (req, res) {
  // newitem = "";
  document.cookie = "";
  var Anw = $(".select1 :selected").text();
  document.cookie = Anw;

  // localStorage.setItem.image = 1;

  // newitem=Anw;
  // console.log("newirem"+ newitem);



  // var yourArray =$(".select12 :selected").text();
  // $(".select12").val(Anw);

});



// console.log(newitem);
$(document).ready(function() {


  $("#searchQuery").hide() ; 
  $("#searchQuery").trigger("click");
});

// Yash cOde

// 1.
$(".select12").change(function(){
  $("#searchQuery").trigger("click");

})
$("#price1").on('input',function(){
  $("#searchQuery").trigger("click");

})
$("#price2").on('input',function(){
  $("#searchQuery").trigger("click");
  
})
$("#year1").on('input',function(){
  $("#searchQuery").trigger("click");
  
})
$("#year2").on('input',function(){
  $("#searchQuery").trigger("click");
  
})
$("input[name='optradio']").change(function(){
  $("#searchQuery").trigger("click");

})


$("#searchQuery").on("click", function(event) {
  event.preventDefault();
// alert("hu")
 

    var yourArray =$(".select12 :selected").text();
    //  $("input[name='type']:checked").val();
    console.log(yourArray);
    // console.log($("input[name='optradio']:checked").attr('value1');

  var Minprice1= $("#price1").val();
  var Maxprice2= $("#price2").val();
  // var Minprice1 = $("input[name='optradio']:checked").attr('value1');
  // var Minprice1 = $("input[name='optradio']:checked").attr('value2');
  var Minyear1= $("#year1").val();
  var Maxyear2= $("#year2").val();
  var Mileage = $("input[name='optradio']:checked").val();


  if (Minprice1 == "") {
    Minprice1=1;
  }
  if (Maxprice2 == "") {
    Maxprice2=500000000;
  }
  if (Minyear1 == "") {
    Minyear1=1990;
  }
  if (Maxyear2 == "") {
    Maxyear2=2050;
  }
  if(Mileage == undefined){
    Mileage=200000;
  }




  console.log(Minprice1,Maxprice2,Minyear1,Maxyear2,Mileage);

  $.get("/api/posts/" + yourArray +"/"+Minprice1+"/" + Maxprice2+"/" + Minyear1+"/" +Maxyear2+"/"+Mileage, function(data) {
    console.log("Posts", data);
    console.log("jhikbbjkbjkl");
   var html="";
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


    html+="<br>";
    html+="<div class='container'>";
    html+="<div class='row card11'>";
    html+="<div class='col-md-3'>";
    html+="<img class='imgwqrr' src='./img/p2.jpg' alt='Car img' />"
    html+="</div>";
    html+="<div class='col-md-9'>";
    html += "<h3 class='card-title1 '><b>" + data[i].Make +" "+ data[i].Model +" </b></h3>";
    html += "<p class='card-text1 price1'> $ "+data[i].Price +"</p>" ;
    html += "<p class='card-text1 miles1'><i class='fa fa-automobile' style='font-size:20px'></i><b> "+data[i].Mileage +" miles</b> </p>";
    html += "<p class='card-text1 MPG'> "+data[i].MPG +"</p>";
    html += "<p class='card-text1 Interior'> <i class='fa fa-bullseye'></i> Interior -    "+data[i].Interior +"  <i class='fa fa-bullseye'></i>"+"   "+"  DriveType -   "+ data[i].DriveType+ "  <i class='fa fa-bullseye'></i> Transmission -    "+ data[i].Transmission+"</p>";
    html += "<button class='readmore"+data[i].id +"  readmore' data-id="+data[i].id +" >Read More...</button>";
    html += "<div class='message" +data[i].id +" msg'  data-id="+data[i].id +"> "+data[i].Engine +"  </div>";
    html += "<div class='message" +data[i].id +" msg'  data-id="+data[i].id +"> "+data[i]. FuelType+"  </div>";
    html += "<div class='message" +data[i].id +" msg'  data-id="+data[i].id +"> "+data[i].VehicalFeatures +"  </div>";
    html += "<div class='message" +data[i].id +" msg'  data-id="+data[i].id +"> "+data[i].Contact +"  </div>";
 
   
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

  
    html+="</div>";    
    html+="</div>";    
    html+="</div>";    
    html+="</div>";
    html+="</div>"; 
    
    
    $(document).ready(function() {
    $(".msg").hide();
    $("button.readmore").click(function(){
    var id= $(this).data("id");
    // $(".message").arr("slow");   
    $(".message"+ $(this).data("id")).show("slow");


        // $(this).data("id").show("slow");
        $("button.readmore").click(function(){
          $(".message"+ $(this).data("id")).hide();
          // $(this).data("id").hide();


        
      });  
      }
      )}
  )}
$(".result").html(html);

  });
})


// $("#Search1").on("click", function(event) {
//   event.preventDefault();
// console.log("search111111");
$.get("/api/posts/last10/jioj", function(data) {
  console.log("Posts2222", data);
  console.log("jhikbbjkbjkl");
  var html="";
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


      html+="<br>";
      html+="<div class='row card1'>";
      html+="<div class='col-md-4'>";
      html+="<img class='imgwqrr' src='./img/p2.jpg' alt='Car img' />"
      html+="</div>";
      html+="<div class='col-md-8'>";
      html += "<h3 class='card-title1 '><b>" + data[i].Make +" "+ data[i].Model +" </b></h3>";
      html += "<p class='card-text1 price1'> $ "+data[i].Price +"</p>" ;
      html += "<p class='card-text1 miles1'><i class='fa fa-automobile' style='font-size:20px'></i><b> "+data[i].Mileage +" miles</b> </p>";
      html += "<p class='card-text1'> "+data[i].MPG +"</p>";
      html += "<p class='card-text1'> <i class='fa fa-bullseye'></i> Interior -    "+data[i].Interior +"  <i class='fa fa-bullseye'></i>"+"   "+"  DriveType -   "+ data[i].DriveType+ "  <i class='fa fa-bullseye'></i> Transmission -    "+ data[i].Transmission+"</p>";
        
 
      html+="</div>";    
      html+="</div>";    
      



  }
$(".resultHome1").html(html);
})
// })


$("#Search132").on("click",function(req,res){
  // newitem = "";
  document.cookie = "";
    var Anw =$(".select1 :selected").text();
  document.cookie = Anw;

  // localStorage.setItem.image = 1;

  // newitem=Anw;
  // console.log("newirem"+ newitem);



    // var yourArray =$(".select12 :selected").text();
// $(".select12").val(Anw);

});



// console.log(newitem);
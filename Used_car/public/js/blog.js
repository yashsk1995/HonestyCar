$(document).ready(function() {


  $("#searchQuery").hide() ; 
  $("#searchQuery").trigger("click");
  // blogContainer holds all of our posts
  var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  postCategorySelect.on("change", handleCategoryChange);
  var posts;

  // This function grabs posts from the database and updates the view
  function getPosts(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/posts" + categoryString, function(data) {
      console.log("Posts", data);
      console.log("jhikbbjkbjkl");
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function() {
        getPosts(postCategorySelect.val());
      });
  }

  // Getting the initial list of posts
  getPosts();
  // InitializeRows handles appending all of our constructed post HTML inside
  // blogContainer
  function initializeRows() {
    blogContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    blogContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }

  // This function figures out which post we want to delete and then calls
  // deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty() {
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
    blogContainer.append(messageH2);
  }

  // This function handles reloading new posts when the category changes
  function handleCategoryChange() {
    var newPostCategory = $(this).val();
    getPosts(newPostCategory);
  }

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
    html+="<div class='row card1'>";
    html+="<div class='col-md-3'>";
    html+="<img class='imgwqrr' src='./img/p2.jpg' alt='Car img' />"
    html+="</div>";
    html+="<div class='col-md-9'>";
    html += "<h3 class='card-title1 '><b>" + data[i].Make +" "+ data[i].Model +" </b></h3>";
    html += "<p class='card-text1 price1'> $ "+data[i].Price +"</p>" ;
    html += "<p class='card-text1 miles1'><i class='fa fa-automobile' style='font-size:20px'></i><b> "+data[i].Mileage +" miles</b> </p>";
    html += "<p class='card-text1'> "+data[i].MPG +"</p>";
    html += "<p class='card-text1'> <i class='fa fa-bullseye'></i> Interior -    "+data[i].Interior +"  <i class='fa fa-bullseye'></i>"+"   "+"  DriveType -   "+ data[i].DriveType+ "  <i class='fa fa-bullseye'></i> Transmission -    "+ data[i].Transmission+"</p>";
      
    html+="</div>";    
    html+="</div>";    
    html+="</div>";    



  }
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
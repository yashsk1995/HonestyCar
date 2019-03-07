// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/cars/", function(req, res) {
    db.Use.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Use.findAll({
      where: {
        Make: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
        console.log(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // console.log("njkn");
    db.Use.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

app.get("/api/posts/last10/jioj",function(req,res){
  console.log("bgyuigfhidhdbjidjhbdbjdiijbasjdio");
    console.log("hellow");
    db.Use.findAll({
      limit: 4,
      where: {
        //your where conditions, or without them if you need ANY entry
      },
      order: [ [ 'id', 'DESC' ]]
    }).then(function(entries){
      //only difference is that you get users list limited to 1
      //entries[0]
      res.json(entries);
      console.log(entries);
    });
})
  // select * from tbl_name order by id desc limit N;
  




  app.get("/api/posts/:yourArray/:Minprice1/:Maxprice2/:Minyear1/:Maxyear2/:Mileage", function(req, res) {
    db.Use.findAll({
      where: {
        Make:req.params.yourArray,
        Price:    {  $lt: req.params.Maxprice2,
                     $gte: req.params.Minprice1  
                  },
        Year:     {
                     $lt: req.params.Maxyear2,
                     $gte: req.params.Minyear1  
                  },
        Mileage:  {
                    $lt: req.params.Mileage,

                  }
      },  
      limit: 100
    })
      .then(function(dbPost) {
       res.json(dbPost);
        console.log(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("cars Data:");
    console.log(req.body);
    
    db.Use.create({
      Make: req.body.Make, 
      Model:req.body.Model, 
      Year:req.body.Year,
       Price:req.body.Price,
       Mileage:req.body.Mileage,
       DriveType: req.body.DriveType,
       Engine: req.body.Engine,
       Transmission:req.body.Transmission,
       FuelType:req.body.FuelType,
             MPG:req.body.MPG,
              Interior:req.body.Interior,
               Exterior:req.body.Exterior,
                VehicalFeatures:req.body.VehicalFeatures,
                 Contact:req.body.Contact
    
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    

      
    // `Make`
    // `Model'
    // `Year'
    // 'Price' 
    // 'Mileage'
    // 'DriveType' 
    // 'Engine' 
    // 'Transmission' 
    // 'FuelType' 
    // 'MPG' 
    // 'Interior' 
    // 'Exterior' 
    // 'VehicalFeatures' 
    // 'Contact'

    // var dbQuery = "INSERT INTO cars (Make, Model, Year, Price, Mileage, DriveType, Engine, Transmission, FuelType, MPG, Interior, Exterior, VehicalFeatures, Contact ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    // db.Use.create(
    //   Make: req.body.Make, 
    //   req.body.Model, 
    //   req.body.Year,
    //    req.body.Price,
    //     req.body.Mileage,
    //      req.body.DriveType,
    //       req.body.Engine,
    //        req.body.Transmission,
    //         req.body.FuelType,
    //          req.body.MPG,
    //           req.body.Interior,
    //            req.body.Exterior,
    //             req.body.VehicalFeatures,
    //              req.body.Contact
    //              , function(err, result) {
    //   if (err) throw err;
    //   console.log("Car Successfully Saved!");
    //   res.end();
    // });
  });
};

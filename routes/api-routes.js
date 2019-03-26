global.Locate = "";

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
let formidable = require('formidable');
var fs = require('fs');
const multer = require('multer');

// const upload = multer({dest: __dirname + '/uploads'});

var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, global.Locate);
  },
  filename: function (req, file, callback) {
      callback(null,file.originalname);
  }
});

var upload = multer({ storage: Storage }).array("imgUploader", 20); //Field name and max count

// Routes
// =============================================================
module.exports = function(app) {
  app.post('/upload', (req, res) => {
    // if(req.file) {
    //     res.json(req.file);
    // }
    // else throw 'error';
    upload(req, res, function (err) { 
      if (err) {
        console.log(err); 
          return; 
          
      } 
      return ; 
  }); 
  });
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
      limit: 20,
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
        console.log("conslolsfnaajkl"+dbPost);
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
                 Contact:req.body.Contact,
                 images:req.body.images
    
    })
      .then(function(dbPost) {
        var id = dbPost.id;
        var dir = './public/img/id_'+id;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        global.Locate = dir;
          
       
        // console.log(dbPost);
        // console.log("id" + dbPost.id);
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
//   app.post('/upload_images', (request, response, next) => {
//     let formidable = require('formidable');
   
   
   
//     // parse a file upload
//     var form = new formidable.IncomingForm();
//     form.uploadDir = "./uploads";
//     form.keepExtensions = true;
//     form.maxFieldsSize = 10 * 1024 * 1024; //10 MB
//     form.multiples = true;
//     form.parse(request, (err, fields, files) => {
//         if (err) {
//             response.json({
//                 result: "failed",
//                 data: {},
//                 messege: `Cannot upload images.Error is : ${err}`
//             });
//         }
        
//         var arrayOfFiles = [];
//         if(files[""] instanceof Array) {
//             arrayOfFiles = files[""];
//         } else {
//             arrayOfFiles.push(files[""]);
//         }
        
//         if (arrayOfFiles.length > 0) {
//             var fileNames = [];
//             arrayOfFiles.forEach((eachFile)=> {
//                 // fileNames.push(eachFile.path)
//                 fileNames.push(eachFile.path.split('/')[1]);
//             });
//             response.json({
//                 result: "ok",
//                 data: fileNames,
//                 numberOfImages: fileNames.length,
//                 messege: "Upload images successfully"
//             });
//         } else {
//             response.json({
//                 result: "failed",
//                 data: {},
//                 numberOfImages: 0,
//                 messege: "No images to upload !"
//             });
//         }
//     });
// });

};

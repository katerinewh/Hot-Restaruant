var express=require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      routeName: "name",
      name: "Victor Von Finklestein",
      PhoneNumber: "619-222-2222",
      eMail: "nerdlove@aol.com",
      uniquiId: "foodielover"
    },
];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  app.get("/viewTables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
  });
  
  // Displays all reservations
  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });
  
//   // Displays a single character, or returns false
  app.get("/api/reservations/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });
  
//   // Create New Characters - takes in JSON input
//   app.post("/api/characters", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newcharacter);
  
//     characters.push(newcharacter);
  
//     res.json(newcharacter);
//   });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
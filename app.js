/**
* A NodeJS entry point.
* Copyright @ Buggy Arts all Rights Reserved.
*/
// =========Start=========
// ----------End----------

// Require all the app modules ============================
var express = require('express');                           // Include express web framework
var routes = require('./user_modules/routes.js');           // Include routes from user_modules
// --------------------------------------------------------


// Configure the app ======================================
var app = express();                                        // Creating express Object
app.set('view engine', 'ejs');                              // Set a templating engine
app.use(express.static('./assets'));                        // Set A Static Directory For Static Files
// --------------------------------------------------------


// Passing arguments to modules ===========================
routes(app);                                                // passing app to routes module
// --------------------------------------------------------


// Listening a local host server ==========================
var port = process.env.PORT || 3000;                        // Assign a port number
app.listen(port,'0.0.0.0');                                           // Listening to localhost: 3000
console.log("Server is up and running at port :" + port);   // Loging
// --

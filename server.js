// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                        // create our app w/ express
    var mongoose = require('mongoose');              // mongoose for mongodb
    var morgan   = require('morgan');                // log requests to the console (express4)
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var database = require('./config/database');
    var port     = process.env.PORT || 3333;         // set the port


    // configuration ===============================================================
    console.log("* attempting database connection to: " + database.url);
    mongoose.connect(database.url, function(err) {                  // connect to mongoDB database
        if (err) {
            console.log("DBCONN ERR: Error connecting to database!");
        } else {
            console.log("DBCONN ok");
        );
    //mongoose.connect( 'mongodb://localhost/library_database', function(err) { if (err) console.log(err); } );
    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
      console.log('Mongoose default connection error: ' + err);
    });
    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
      mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    });

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes ======================================================================
    require('./app/routes.js')(app);

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port: " + port);



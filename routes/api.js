/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});

module.exports = function (app) {

  MongoClient.connect(CONNECTION_STRING, (err, db) => {
    if (err) {
      console.log("Cannot connected to Database");
      console.log(err);
    } 
    else {
      console.log("Connected to Database Successfully");

      app.route('/api/issues/:project')
      .get(function (req, res){
        var project = req.params.project;

      })
      .post(function (req, res){
        var project = req.params.project;

      })
      .put(function (req, res){
        var project = req.params.project;

      })
      .delete(function (req, res){
        var project = req.params.project;

      });
      
    }
  });
};

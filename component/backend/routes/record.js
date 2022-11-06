const express = require("express");
 
const recordRoutes = express.Router();
 
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/admin").get(function (req, res) {
 let db_connect = dbo.getDb("testdb");
 db_connect
   .collection("admin")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/admin/:id").get(function (req, res) {
 let db_connect = dbo.getDb("testdb");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("admin")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/admin/add").post(function (req, response) {
 let db_connect = dbo.getDb("testdb");
 let myobj = {
   names: req.body.name,
   userName: req.body.userName,
   userEmail: req.body.userEmail,
   userPassword: req.body.userPassword,
   userConfirmPassword: req.body.userConfirmPassword,
  //  position: req.body.position,
  //  level: req.body.level,
 };
 db_connect.collection("admin").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
module.exports = recordRoutes;
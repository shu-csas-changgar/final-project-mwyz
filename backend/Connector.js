// const express = require('express');
// const path = require('path');
//
// const app = express();

var mysql = require('mysql');

const Query = require('./SQLQuery.js');
let Q = new Query();


const con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "abc"
});




// connect
con.connect((err) => {
  if(err){throw err;}
  console.log("Connected");
})


console.log(con.query(Q.contains_city({"city":  "sf"})));
console.log(con.query(Q.select("*", "city")));
//
//
//
// //register user
// app.post("/submit-registration", (req, res) => {
//   var sql = Q.create_new_user(req);
//   con.query(sql);
//   if(con.query(Q.contains_city()) == null){
//     con.query(Q.insert_city(req));
//   }
//   if(con.query(Q.contains_country()) == null){
//     con.query(Q.insert_country(req));
//   }
//   if(!req["hasDevice?"]){
//     con.query(Q.insert_assignment(req));
//     con.query(Q.add_device(con.get))
//   }
//   res.send("New user added.");
// })
//
// app.get('/' , (req, res)  =>{
//
// });
//
// app.get('/' , (req, res)  =>{
//     var list = [1,2,3];
//     res.json(list);
// });
//
// const port = process.env.PORT || 5000;
// app.listen(port);
//
// console.log('App is listening on port ' + port);

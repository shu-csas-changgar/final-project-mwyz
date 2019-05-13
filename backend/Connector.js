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



//register user
app.post("/submit-registration", (req, res) => {

  if(con.query(Q.contains_city(req), function (err, result, fields) {
    if (err) throw err;
    var b1 = result[0].cityid;
    if(b1 == null){
      con.query(Q.insert_city(req));
    }
  });)

  if(con.query(Q.contains_country(req), function (err, result, fields) {
    if (err) throw err;
    var b1 = result[0].countyid;
    if(b1 == null){
      con.query(Q.insert_country(req));
    }
  });)

  Q.create_new_user(req);
  if(!req["hasDevice?"]){
    con.query(Q.insert_assignment(req));
    con.query(Q.select(["devicetypeid"], "deviceTypeid", "devicetypes=laptop"), function (err, result, fields) {
      if (err) throw err;
      var tid = result[0].deviceTypeid;
    });
    con.query("select max(e.employeeid) from abc.employee e;" function (err, result, fields){
      if (err) throw err;
      var empid = result;
    }
    con.query(Q.add_device(
      {"empid": empid, "deviceTypeid": tid}));
    con.query(Q.insert_assignment(
      {"empid": empid,
      'officeid': req['officeid'], 'floor': req['floor'],
      "deviceid": tid}
    ))
    con.query(Q.select(["stock"], "inventory"), function (err, result, fields) {
        if (err) throw err;
        var val = result[0].stock;
        if(val > 0){
          con.query(Q.updateStock({"amount": "-1", "deviceTypeid": tid}));
        }else{
          con.query(Q.updateRequired({"amount": "1", "deviceTypeid": tid}));
        }
      });
  }
  res.send("New user added.");
});

app.get('/register-device' , (req, res)  =>{
  con.query(Q.add_device(req));
  con.query(Q.insert_assignment(req));
  if(con.query(Q.contains_deviceType(req), function (err, result, fields) {
    if (err) throw err;
    var b1 = result[0].devicetypeid;
    if(b1 == null){
      con.query(Q.add_device_type(req));
    }
  });)



});

app.get('/' , (req, res)  =>{
    var list = [1,2,3];
    res.json(list);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

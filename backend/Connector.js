const express = require('express');
const path = require('path');

const app = express();

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
credentials: false}));
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
//req-keys: city-name, zip, country, hasDevice (boolean), officeid, floor
//first_name, last_name, email, , password, address,
app.post("/submit-registration", (req, res) => {

  con.query(Q.contains_city(req), function (err, result, fields) {
    if (err) throw err;
    var b1 = result;
    if(b1.length == 0){
      con.query(Q.insert_city(req));
    }
  });

  con.query(Q.contains_country(req), function (err, result, fields) {
    if (err) throw err;
    var b1 = result;
    if(b1.length == 0){
      con.query(Q.insert_country(req));
    }
  });

  con.query(Q.create_new_user(req));
  if(!req["hasDevice?"]){
    req['leased'] = '1';

    con.query(Q.select(["devicetypeid"], "deviceTypes", ["devicetype='laptop'"]), function (err, result, fields) {
      if (err) throw err;
      req['devicetypeid'] = result[0].deviceTypeid;
    });

    con.query("select max(e.employeeid) as empid from abc.employee e;", function (err, result, fields){
      if (err) throw err;
      req['empid'] = parseInt(result[0]['empid']) + 1;
    });
    con.query("select min(v.deviceid) as deviceid from abc.vendors v where v.startdate = '';",
     function (err, result, fields){
      if (err) throw err;
      req['deviceid'] = parseInt(result[0]['deviceid']);
      var dt = new Date();
      var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
      con.query("update abc.vendor set startdate = " + "\'" + datetime + "\'" +  ",  updated = " + "\'" + datetime + 
        "\'where deviceid=" +"\'" + req['deviceid'] + "\';");
    });

    con.query(Q.add_existing_device(req));
    // con.query(Q.insert_assignment(req));}
    con.query(Q.select(["stock"], "inventory"), function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        var val = result[0].stock;
        if(val > 0){
          con.query(Q.updateStock({"amount": "-1", "deviceTypeid": tid}));
        }else{
          con.query(Q.updateRequired({"amount": "1", "deviceTypeid": tid}));
        }
    });}
  res.send("New user added.");
});

// req -> devicetype, leased, empid, deviceid, officeid, floor,
app.post('/register-device' , (req, res)  =>{
  con.query(Q.contains_deviceType(req), function (err, result, fields) {
    if (err) throw err;
    var b1 = result;
    if(b1.length == 0){
      con.query(Q.add_device_type(req));
    }
  });
  con.query(Q.select(["devicetypeid"], "deviceTypes", ["devicetype=" + "\'"+ req['devicetype'] + "\'"]), function (err, result, fields) {
    if (err) throw err;
    req['devicetypeid'] = result[0].deviceTypeid;
  });
  con.query(Q.add_device(req));
  con.query(Q.insert_assignment(req));
});

// req -> empid
app.post('/removeEmployee' , (req, res)  =>{
     // -> reservation: deviceid, officeid, floor, employeeid
     con.query(Q.delete_employee(req));
});

//req -> deviceid
app.post('/removeDevice', (req, res)  =>{
     // -> reservation: deviceid, officeid, floor, employeeid
     con.query(Q.delete_device(req));
});

//req ->  amount, startdate, enddate, deviceType,
app.post('/sendorder', (req, res)  =>{
     // -> reservation: deviceid, officeid, floor, employeeid
    req['stock'] = req['amount'];
    var max_id = 0;  
    con.query("select max(deviceid) as deviceid from abc.devices", function(err, result, fields){
      if (err) throw err;
        max_id = result[0].deviceid;
    });

     for(var i = 1; i <= req['amount']; i++){
       req['deviceid'] = max_id + 1;
       con.query(Q.add_vendor(req));
     }
  
     con.query(Q.select(["devicetypeid"], "deviceTypes", ["devicetype= \'"+req['devicetype'] +"\'"]), function (err, result, fields) {
      if (err) throw err;
      var tid = result[0].devicetypeid;
      req['devicetypeid'] = tid;
      con.query(Q.select(["devicetypeid"], "inventory", ["devicetypeid="+"\'"+tid+"\'"]), function (err, result, fields) {
        if (err) throw err;
        var b = result;
        if(b.length == 0){
          con.query(Q.addDevice2Inventory(req));
        }
        // con.query(Q.updateStock(req));
      });
    con.query(Q.delete_device(req));
    });
});

app.post('/newOffice', (req, res)  =>{
  con.query(Q.add_new_office(req));
})

app.post('deleteOffice', (req, res)  =>{
  con.query(Q.delete_office(req));
});


app.post('/addToReservation', (req, res) => {
  con.query(Q.insert_reservation(req));
});

app.post('/addReservation', (req, res) => {
  con.query(Q.updateReservation(req));
});

app.post('/removeReseration', (req, res) => {
  //all vals appropriate vals are set to null or " "
  con.query(Q.update_reservation(req));
});

app.post('/addMaintenanceStatus', (req, res) => {
  con.query(Q.insert_maintenance(req));
});

app.post('/removeMaintanenceStatus', (req, res) => {
  con.query(Q.delete_maintanence(req));
});

app.get('/viewTable', (req, res) => {
  con.query(Q.select('*', ['devices'], ), function(err, result, fields){
    if (err) throw err;
    console.log(result)
    res.send(result);
  });
});

app.get('/viewJointTable', (req, res) => {
  con.query(Q.join(req['cols'], req['tables'], req['fields'], req['conds'], req['type']), function(err, result, fields){
    if (err) throw err;
    res.send(result);
  });
});


app.get('/' , (req, res)  =>{
   res.setHeader('Access-Control-Allow-Origin', '*');
    var list = [{"x": "hello"},{"y": "why"},{"z": "we tried"}];
    res.send(list);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

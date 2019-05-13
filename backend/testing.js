var mysql = require('mysql');

// temp new testing stuff
const Query = require('./SQLQuery.js');
let Q = new Query();

//


var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password"
});

con.connect(function(err) {  
    if (err) throw err;
    console.log("Connected!");    
    });

    // var yohan = select(["devicetypeid"], "deviceTypes", ["devicetype = 'laptop'"]);

    // console.log(yohan);

    
    // con.query(yohan, function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(result);
    //  // var tid = result[0].deviceTypeid;
    //   //console.log(tid);
 
    // });

    var req = {
      "fname": "Matthew",
      "lname": "Kim",
      "email" : "yohan@yohan.org",
      "phone" : "211",
      "officeid" : 333,
      "password" : "password" , 
      "address" : "123 seton drive",
      "cityid" : 55,
      "countryid" : 2,
      "city": "south orange",
      "zip" : 22222,
      "country": "U.S.A.",
      "devicetype" : "laptop",
      "deviceid" : 9,
      "floor" : 1,
      "empid" : 987,
      "duration" : 40,
      "availability" : true,
      "components" : "batteries",
      "issue" : "broken",
      "price" : 400,
      "leased" : true,
      "stock" : 1000,
      "name" : "stark",
      "startdate" : "today",
      "enddate" : "tomorrow",
      "amount" : 2,
      "vendorid" : 788888,
      'hasDevice?': false
    };

    console.log(Q.join("*", ['employee', 'devices'], ['employee.employeeid=devices.employeeid']));
    con.query(Q.join(["e.employeeid", 'd.deviceid'], ['employee e', 'devices d'], ['e.employeeid=d.employeeid']), function(err, result, fields){
        if (err) throw err;
        console.log(result);
      });

 con.end();
    console.log("efssdf");

//console.log(insert_city("Wayne", 07470)); 





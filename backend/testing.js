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

function insert_city(city, zip)
{
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var cityid = 5;
    return "insert into abc.city values("+cityid.toString()+","+"\'"+city+"\'"+","+zip+","+ "\'"+datetime+"\'"+");";
  }

function delete_city(city){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    return "delete from abc.city where city.Name =" + "'" + city.toString() +"'";
}


function select(cols, table, conditions=[]){
  if(cols == "*"){
    return "select * from abc" +"."+ table +";";
  }

  var query = "select ";
  var id = table.substr(0,2);
  for(var i = 0; i < cols.length-1; i++){
    query += (id+"."+cols[i] + ", ");
  }
  query += (id+"."+cols[cols.length-1] + " from abc"  + "."+ table +" "+ id);

  query += " where ";
  for(var i = 0; i < conditions.length - 1; i++){
        query += conditions[i] + " and ";
    }
  query += conditions[conditions.length-1] + ";";
  return query;
}






   var sql = select("*", 'city');
  //var sql = delete_city("Wayne");
   // console.log(sql);
 
 

    con.connect(function(err) {  
    if (err) throw err;
    console.log("Connected!");    
    });

    var yohan = select(["devicetypeid"], "deviceTypes", ["devicetype = 'laptop'"]);

    console.log(yohan);

    
    con.query(yohan, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
     // var tid = result[0].deviceTypeid;
      //console.log(tid);
 
    });

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
      "devicetype" : "computer",
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
      "amount" : 500,
      "vendorid" : 788888
    };

    
    con.query(Q.contains_city(req), function (err, result, fields) {
      if (err) throw err;
      console.log(req);
      var b1 = result[0]
      if(b1.length == 0){
        con.query(Q.insert_city(req));
      }
      console.log(result);
      con.end();
    });

    
    

   

//console.log(insert_city("Wayne", 07470)); 





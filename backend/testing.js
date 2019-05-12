var mysql = require('mysql');

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





   var sql = insert_city("Wayne", "07470");
  //var sql = delete_city("Wayne");
    console.log(sql);
 
 

    con.connect(function(err) {  
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    con.end();
    });
    });

    
   

//console.log(insert_city("Wayne", 07470)); 




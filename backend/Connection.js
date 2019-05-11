

class SQLConnection{

  constructor(user="root", password="password", database='abc', host="localhost") {
      var mysql = require('mysql');
      this.database = database;
      this.con = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database
      });
  }

  getQuery(query){
    console.log(query);
    this.con.connect(function(err) {
      if (err) throw err;
      this.con.query(query, function (err, result) {
        if (err) throw err;
        return result;
      });
    });
  }

  runQuery(query){
    this.con.connect(function(err) {
      if (err) throw err;
      con.query(query, function (err, result) {
        if (err) throw err;
        console.log("table updated");
      });
    });
  }



}


const User = require('./SQLQuery.js');

let user = new User();

var c = new SQLConnection();

console.log(c.getQuery(user.select("*", "city")));

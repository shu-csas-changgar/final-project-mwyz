/*connect to Server -> run query -> get results 
link the function to the GUI 

adding reservations
rooms & reservation tables 

city country deviceassignments devices employee invent office vendor 


we have laptops, phones, smartrooms, printers, desktops, displays, cameras
inventory table  
add Components = smartsboard, smartpen, camera        

devices table
smartroom under devices 




reservation  table 
deviceID 
employeeID 
Date 
number of people (maximum capacity) 
availability (possible maintenance)


maintenance table 
deviceID 
deviceTYPE 
employeeID (who to return to or notify)
problem string
Components (what item is the issue, could be projector from smartroom)  
Price (changing batteries for example)
not available 




we need Deactivate/Remove methods 

every function will return a string; check with mysql 


*/








class Query{
  constructor(user, password, database='abc', host="localhost") {
    var mysql = require('mysql');

    



    this.con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
    });
  }
  getQuery(query){
    this.con.connect(function(err) {
      if (err) throw err;
      con.query(query, function (err, result) {
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
  
  create_new_user(empid, fname, lname, email, phone, officeid, password, address, cityid, countryid){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    this.runQuery("insert into abc.employee values("+empid.toString()+","+"\'"+fname+"\'"+","+"\'"+lname+"\'"+","+"\'"+email+"\'"+","+phone.toString()+","
    +officeid+","+"\'"+password+"\'"+","+"\'"+address+"\'"+","+cityid.toString()+","+countryid.toString()+"," + "\'"+datetime +"\'"+");");
  }

  insert_city(city, zip){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var cityid = 5;
    this.runQuery("insert into abc.city values("+cityid.toString()+","+"\'"+city+"\'"+","+zip+","+ "\'"+datetime+"\'"+");");
  }


  // NEW STUFF BY MATTHEW KIMOTHY
  ////////////////////////////////////////
  insert_reservation(deviceid, empid, officeid, capacity, availability, duration){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0,8);
    this.runQuery("insert into abc.reservation values(" + deviceid.toString() + "," + empid.toString()+ "," + officeid.toString()
     + "," + capacity.toString() + "," + availability.toString() + "," + duration.toString() + "," + "\'" + datetime + "\'" + ");" );
  }



  insert_maintenance(deviceid, devicetype, empid, issue, components, price){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    this.runQuery("insert into abc.maintenance values(" + deviceid.toString() + "," + deviceTypeid.toString() + "," + empid.toString()
  + "," + issue + "," + components + "," + price.toString() + "," + "\'" + datetime + "\'" + ");" );
  }


  delete_reservation(reservation){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    this.runQuery("delete from abc.reservation where(" + reservation.toString() + "\'" + datetime + "\'" + ");");
  }
  
  delete_device(deviceid){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    this.runQuery("delete from abc.reservation where(" + deviceid.toString() + "\'" + datetime + "\'" + ");");
  
  }



  //////////////////////////////////////
  // END NEW STUFF 




  insert_country(country){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var ctryid = 5;
    this.runQuery("insert into abc.country values("+ctryid.toString()+","+"\'"+country+"\'"+","+"\'"+datetime+"\'"+");");
  }

  insert_assignment(deviceid, officeid, floor, employeeid){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    this.runQuery("insert into abc.deviceassignment values("+deviceid.toString()+","+officeid.toString()+","+floor.toString()+","
    +employeeid.toString()+"\'"+datetime+"\'"+");");
  }

  add_device(employeeid, deviceType, leased){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var deviceid = 1;
    var deviceTypeid = this.getQuery(this.type2id(deviceType));
    this.runQuery("insert into abc.device values("+deviceid.toString()+","+deviceTypeid.toString()+","+leased.toString()+","
  +"\'"+datetime+"\'"+");");
  }

  add_device_type(deviceType){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var deviceTypeid = this.getQuery(this.type2id(deviceType));
    this.runQuery("insert into abc.device values("+deviceTypeid.toString()+","+"\'"+deviceType+","
  +"\'"+datetime+"\'"+");");
  }

   addDevice2Inventory(deviceType, stock){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var deviceTypeid = this.getQuery(this.type2id(deviceType));
    this.runQuery("insert into abc.inventory values("+deviceTypeid.toString()+","+stock.toString()+",0"
  +"\'"+datetime+"\'"+");");
  }

  add_new_office(officeid, address, city, country){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var cityid = this.getQuery(this.city2cityid(city));
    var countryid = this.getQuery(this.country2countryid(country));
    this.runQuery("insert into abc.office values("+officeid.toString()+","+"\'"+address+"\',"+cityid.toString()+","+countryid.toString()+
    ",\'"+datetime+"\'"+");");
  }

  add_vendor(name, deviceid, startdate, enddate){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    var vendorid = this.getQuery(this.getNewVendorID()) + 1;
    this.runQuery("insert into abc.vendor values("+vendorid.toString()+",\'"+name+"\',"+deviceid.toString()+","+
    "\'"+startdate+"\',\'"+enddate+"\',\'"+datetime+"\'"+");");
  }

  add2Stock(deviceType){
    var deviceTypeid = this.getQuery(this.type2id(deviceType));
    this.runQuery("update abc.inventory set stock = stock + 1 where abc.inventory.DeviceTypeID=" + deviceTypeid.toString()+";");
  }

  createRequirement(deviceType){
    var deviceTypeid = this.getQuery(this.type2id(deviceType));
    this.runQuery("update abc.inventory set required = required + 1 where abc.inventory.DeviceTypeID=" + deviceTypeid.toString()+";");
  }

  

  type2id(deviceType){return "select devicetypeid from devicetypes where deviceType="+deviceType+";";}

  city2cityid(city){return "select cityid from city where name="+city+";";}

  country2countryid(country){return "select countryid from country where name="+country+";";}

  getNewVendorID(){ return "select max(vendorid) from abc.vendor;";}
}

class Query{
  //phone - string
  constructor(database='abc'){
    this.database = database;
  }

 //fname, lname, email, phone, officeid, password, address, cityid, countryid
  create_new_user(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.employee (firstname, lastname, email, phonenumber, officeid, password, address, cityid, countryid, updated) values("+ "\'"+ dct["fname"]+"\'"+","+"\'"+dct["lname"]+"\'"+","+"\'"+dct["email"]+"\'"+","+ "\'"+ dct["phone"]+ "\'"+ ","
    + "\'"+ dct["officeid"]+ "\'"+ ","+"\'"+dct["password"]+"\'"+","+"\'"+dct["address"]+"\'"+"," + "\'" + dct["cityid"]+ "\'"+ ","+ "\'"+ dct["countryid"]+ "\'"+"," + "\'"+datetime +"\'"+");";
  }
 //city, zip
  insert_city(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.city (name, zipcode, updated) values("+"\'"+dct["city"]+"\'"+","+"\'"+dct["zip"]+"\'"+","+ "\'"+datetime+"\'"+"); ";
  }

  contains_city(dct){
    return "select cityid from city where name = " + dct["city"] + ";";
  }

  contains_office(dct){
    return "select officeid from office where address = " + dct["address"] + ";";
  }

  contains_country(dct){
    return "select countryid from country where name = " + "\'"+ dct["city"] + "\'"+ ";";
  }

  contains_deviceType(dct){
    return "select devicetypeid from devicetypes where devicetype = " + "\'"+ dct["devicetype"] + "\'"+ ";";
  }

  //country
  insert_country(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.country values("+dct["country"]+"\'"+","+"\'"+datetime+"\'"+"); ";
  }

  // deviceid, officeid, floor, employeeid
  insert_assignment(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.deviceassignment (deviceid, officeid, floor, employeeid, updated) values("+"\'"+dct["deviceid"]+"\'"+","+"\'"+dct["officeid"]+"\'"+","+"\'"+dct["floor"]+"\'"+","
    +"\'"+dct["empid"]+"\'"+ ", " + "\'"+datetime+"\'"+"); ";
  }

  // deviceid, , officeid, duration
  insert_reservation(dct){
  var dt = new Date();
  var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0,8);
  return "insert into abc.reservation (DeviceId, OfficeID, DeviceType, EmployeeID, Time," +
  "Duration, Availability, Updated) values(" + dct["deviceid"] + ", " + dct["officeid"] + ", " + "\'" + dct["devicetype"] + "\'" + ", " + dct["employeeid"] + ", " + "\'" + datetime + "\'" + ", " + dct["duration"] + ", " + dct["availability"] + ", " + "\'" + datetime + "\'" + ");";
  }

  //deviceid, devicetype, officeid, empid, issue, components, price
  insert_maintenance(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    return "insert into abc.maintenance (DeviceID, officeid, devicetype, employeeid, problem, component, price, updated) values(" + "\'"+ dct["deviceid"] + "\'"+ "," + "\'"+ dct["officeid"] + "\'"+ "," + "\'"+ dct["deviceTypeid"] + "\'"+ "," + "\'"+dct["empid"]
  + "\'"+"," + "\'"+dct["issue"] + "\'"+"," +"\'"+dct["components"] +"\'"+ "," + "\'"+dct["price"] +"\'"+ "," + "\'" + datetime + "\'" + "); " ;
  }
// employeeid, deviceType, deviceTypeid
  add_device(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.devices (devicetypeid, leased, employeeid, updated) values("+"\'"+dct["deviceTypeid"]+"\'"+", "+ "'1'" +" ,"
  + "\'"+ dct["empid"] + "\'"+ ","+"\'"+datetime+"\'"+"); ";
  }

// deviceType
  add_device_type(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.devicetypes (devicetype, updated) values("+"\'"+dct["deviceType"]+"\'"+","+"\'"+datetime+"\'"+");";
  }
// deviceType, stock
   addDevice2Inventory(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.inventory (stock, required, updated) values("+"\'"+dct["stock"]+"\'"+"," + "\'"+ "0' ,"
  +"\'"+datetime+"\'"+");";
  }
// address, cityid, countryid
  add_new_office(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.office values("+dct["address"]+"\',"+dct["cityid"]+","+dct["countryid"]+
    ",\'"+datetime+"\'"+");";
  }
// name, deviceid, startdate, enddate
  add_vendor(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "insert into abc.vendor (name, deviceid, startdate, expirydate, updated) values("+"\'"+dct["name"]+"\',"+"\'"+dct["deviceid"]+"\'"+","+
    "\'"+dct["startdate"]+"\',\'"+dct["enddate"]+"\',\'"+datetime+"\'"+");";
  }


  // "-------------------------------------------------------"
// deviceTypeid, amount
  updateStock(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "update abc.inventory set stock = stock + " + dct["amount"] + " where abc.inventory.DeviceTypeID=" + dct["deviceTypeid"]+"; " +
            "update abc.inventory " +  "set updated = " + datetime + ", where abc.inventory.devicetypeid = "+dct["deviceidTypeid"] +";";
  }

  updateReservation(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "update abc.reservation set employeeid = " + "\'" + dct["empid"] + "\'" + ", time = " + "\'" + dct["time "] + "\'" + ", duration = " + "\'" + dct["duration"] + "\'" +", availability = " + "\'" +dct["availability"] + "\'" +
    ", updated = " + "\'"+ datetime + "\'" +  " where abc.inventory.DeviceTypeID=" + dct["deviceTypeid"]+"; ";
  }
//  deviceTypeid, amount
  updateRequired(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0, 10) + " " + dt.toTimeString().substr(0, 8);
    return "update abc.inventory set required = required + " + dct["amount"] + " where abc.inventory.DeviceTypeID=" +dct["deviceTypeid"]+";"+
    "update abc.inventory " +  "set updated = " + datetime + ", where abc.inventory.devicetypeid = "+dct["deviceidTypeid"] +";";
  }
// deviceType
  type2id(dct){return "select d.devicetypeid from devicetypes d where deviceType="+dct["deviceType"]+";";}
// city
  city2cityid(dct){return "select c.cityid from city c where name="+dct["city"]+";";}
// country
  country2countryid(dct){return "select c.countryid from country c where name= "+ dct["country"]+";";}

  getNewVendorID(){ return "select max(v.vendorid) from abc.vendor v;";}

  select(cols, table, conditions=[]){
    if(cols == "*"){
      return "select * from " + this.database +"."+ table +";";
    }

    var query = "select ";
    var id = table.substr(0,2);
    for(var i = 0; i < cols.length-1; i++){
      query += (id+"."+cols[i] + ", ");
    }
    query += (id+"."+cols[cols.length-1] + " from " + this.database +"."+ table +" "+ id);

    query += " where ";
    for(var i = 0; i < conditions.length - 1; i++){
          query += conditions[i] + " and ";
      }
    query += conditions[conditions.length-1] + ";";
    return query;
  }
  // deviceid
  delete_reservation(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    return "update abc.reservation set employeeid = \"  \", time = \" \", duration = \" \" where deviceid = "+dct["deviceid"] +"; "+
    "update abc.reservation " +  "set updated = " + datetime + ", where deviceid = "+dct["deviceid"] +";";
  }
// city
  delete_city(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    return "delete from abc.city  where name = "+dct["city"] +"; "+
    "update abc.city " +  "set updated = " + datetime + ", where name = "+dct["city"] +";";
  }

//deviceid  && also used for delete assignment
  delete_device(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    return "delete from abc.deviceassignment where deviceid = "+ dct["deviceid"] +"; "+
     "delete from abc.devices where deviceid = "+ dct["deviceid"] +"; ";
  }

  delete_maintanence(dct){
    var dt = new Date();
    var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
    return "delete from abc.maintenance where deviceid = "+ dct["deviceid"] +";;
  }

  //empid
    delete_employee(dct){
      var dt = new Date();
      var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
      return "delete from abc.employee where employeeid = "+ "\'"+dct["empid"] +"\'"+"; "+
       "delete from abc.maintenance where employeeid = "+ dct["empid"] +"; "+
       "delete from abc.reservation where employeeid = "+ dct["empid"] +"; "+
       "delete from abc.devices where employeeid = "+ dct["empid"] +"; "+
       "delete from abc.deviceassignment where employeeid = "+ dct["empid"] +"; "+
      "update abc.deviceassignment " +  "set updated = " + datetime + ", where employeeid = "+dct["empid"] +"; " +
      "update abc.devices " +  "set updated = " + datetime + ", where employeeid = "+dct["empid"] +"; " +
      "update abc.reservation " +  "set updated = " + datetime + ", where employeeid = "+dct["empid"] +"; " +
      "update abc.employee " +  "set updated = " + datetime + ", where employeeid = "+dct["empid"] +"; " +
      "update abc.maintenance" +  "set updated = " + datetime + ", where employeeid = "+dct["empid"] +"; " ;
    }

    //vendorid
      delete_vendor(dct){
        var dt = new Date();
        var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
        return "delete from abc.vendor where vendorid = "+ dct["vendorid"] +"; "+
        "update abc.vendor " +  "set updated = " + datetime + ", where vendorid = "+dct["vendorid"] +"; ";
      }

      delete_office(dct){
        var dt = new Date();
        var datetime = dt.toISOString().substr(0,10) + " " + dt.toTimeString().substr(0,8);
        return "delete from abc.office where officeid = "+ dct["officeid"] +"; "+
        "update abc.office " +  "set updated = " + datetime + ", where officeid = "+dct["officeid"] +"; "+
        "update abc.deviceassignment " +  "set officeid = " + " " + ", where officeid = "+dct["officeid"] +"; "+
        "update abc.deviceassignment " +  "set updated = " + datetime + ", where officeid = "+dct["officeid"] +"; " +
        "update abc.employee " +  "set updated = " + datetime + ", where officeid = "+dct["officeid"] +"; " +
        "update abc.employee " +  "set officeid = " + " " + ", where officeid = "+dct["officeid"] +"; " +
        "update abc.reservation " +  "set updated = " + datetime + ", where officeid = "+dct["officeid"] +"; " +
        "update abc.reservation " +  "set officeid = " + " " + ", where officeid = "+dct["officeid"] +"; ";;
      }
  // cols - have id concatenated with column name, -> employee.first_name
  // tables- have table id concatenated with table name ->
  // joined_fields and tables have to be in the same order,
  // ex: joined_cols - ["e.employee_id = d.employee_id", ...]
  //conditions - list of conditions
  join(cols, tables, joined_fields, conditions=[], type='join'){
    if(cols == "*"){
      var query = "select * ";
    }else{
      var query = "select ";
      for(var i = 0; i < cols.length-1; i++){
        query += (cols[i] + ", ");
      }
    }
    query += cols[cols.length-1] + " from ";

    for(var i = 0; i < tables.length-1; i++){
      query +=  this.database +"."+ tables[i] + " " + type + " "+  this.database + "." + tables[i+1] + " on " + joined_fields[i];
    }

    if(conditions.length != 0){
    query += " where ";
    for(var i = 0; i < conditions.length - 1; i++){
      query += conditions[i] + " and ";
    }
    query += conditions[conditions.length-1];}
    return query + ";";
  }
}

var Q = new Query();
console.log(Q.add_device({"vendor": "sdf", "stock": "500","deviceType": "laptop", "deviceid": "325", "officeid": "34", "deviceTypeid": "laptop", "empid": "32", "issue" : "werwer", "components": "sfd" ,"price": "35435"}));
console.log(Q.select(["devicetypeid"], "deviceTypes", ["devicetype = 'laptop'"]));
module.exports = Query;

console.log(Q.join(["deviceid, devicetype, employeeid"], ["employee", "devices"], ["employeeid"]))
console.log(Q.delete_reservation({"vendor": "sdf", "stock": "500","deviceType": "laptop", "deviceid": "325", "officeid": "34", "deviceTypeid": "laptop", "empid": "32", "issue" : "werwer", "components": "sfd" ,"price": "35435"}));

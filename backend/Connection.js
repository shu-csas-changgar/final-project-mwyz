const mysql = require( 'mysql' );
class SQLConnection {
    constructor(user="root", password="password", database='abc', host="localhost") {
        this.database = database;
        this.con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
        });
    }
    query(sql, args) {
        return new Promise( ( resolve, reject ) => {
            this.con.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.con.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

const Query = require('./SQLQuery.js');
let Q = new Query();

var c = new SQLConnection();
console.log(c.query(Q.select("*", "city")));
console.log(Q.select("*", 'city'));

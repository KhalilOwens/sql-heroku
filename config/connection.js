var mysql = require("mysql");
var connection;



if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({ 
    
        host: 'ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',  
        user: 't1a2aui40xaqilel',
        password: 'ajfnub3zg7md8b3z',
        port: 3306,
        database: 'qngb927xf9chlw6e'
    } );



    connection.connect(function(err) {
        if (err) {
          console.error("error connecting: " + err);
          return;
        }
        console.log("connected as id " + connection);
      });


};


module.exports = connection;
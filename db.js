

const pg = require('pg')

const { Pool } = pg;
const mysql = require("mysql")


const db = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require"
})

/*
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "159159",
    database: "nodemysql"
  });
*/
  //connect
 

  process.on('exit', () => {
    db.end();
  });


  
module.exports = db;
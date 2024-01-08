const pg = require('pg')

const { Pool } = pg;
const mysql = require("mysql")
require('dotenv').config();


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
db.connect((err)=>{
  if(err){
  console.log(err)
  throw err;
}
console.log("Connected to mysql");
}
)

  process.on('exit', () => {
    db.end();
  });


  
module.exports = db;
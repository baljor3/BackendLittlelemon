const pg = require('pg')

const { Pool } = pg;
const mysql = require("mysql")
require('dotenv').config();


const db = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require"
})

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
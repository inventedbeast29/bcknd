const express=require("express");
var mysql=require("mysql2");
const cors=require("cors");
const app=express();
app.use(cors());
require('dotenv').config({ path: 'secret.env' });


console.log(process.env.host)
console.log(process.env.user,
    process.env.password,
    process.env.port,
    process.env.database)
var con=mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    port:parseInt(process.env.port,10),
    database:process.env.database,
    ssl: {
        rejectUnauthorized: false// Required for Railway
    }
});
con.connect((err)=>{
if(err){
    console.log("Error connecting database",err.message);
}
else{
    console.log("Connected to database")
    // var sql="CREATE TABLE user (name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), message VARCHAR(300))";  
    //     con.query(sql,(err,result)=>{
    //         if(err){
    //             console.log("Error creating table")
    //         }
    //         else if(result){
    //             console.log("Table created")
    //         }
    //     })
}})

app.use(express.json());
app.use(express.static('portfolio'))
app.use(express.urlencoded({ extended: true }));

app.post("/",(req,res)=>{
    const {name,email,phone,message}=req.body;
    const sqlquery="INSERT INTO user(name,email,phone,message) VALUES(?,?,?,?)"

    con.query(sqlquery,[name,email,phone,message],(err,result)=>{
        if(err)
            {console.log("error while querying db")

            }
        else{
            console.log("Query succesfull");
            return res.send("Data Saved succesfully")
        }
    })
   

})
const PORT=process.env.port||7000
app.listen(PORT,(err)=>{
   if(err) console.log("Server crash")
    else{
console.log("Server started")}
})

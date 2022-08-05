// function mycallback(msg){
//     console.log("result is",msg)
// }

// function mycalculator(num1,num2,mycallback){
//     var sum =num1+num2;
//     mycallback(sum)
// }

// mycalculator(10,10,mycallback)

// const new_promise = new Promise((resolve,reject)=>{
//     var flag=0;
//     if(flag==0){
//         resolve("zero")
//     }else{
//         reject("nonzero")
//     }
// })

// new_promise.then((d)=>{
//     console.log(d)
// }).catch((e)=>{
//     console.log(e)
// })


// function myfun(){
//     setTimeout(()=>{
//         console.log("ggggggd")
//     },2000)
// }
// async function mynew(){
//     const result = await myfun()
// }
// console.log("9999")
// mynew()
// console.log("uuuuu")


// const mysql = require('mysql');

// const conn =mysql.createConnection({
//     user:"root",
//     password:"root",
//     host:"localhost",
//     database:"admin_exlshop"
// })

// conn.connect()
// conn.query(`show tables`, (err,data) => {
//     if (err) {
//         console.log("error is",err)
//     } else {
//         console.log("data is",data)
//     }
// })



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, data) {
//   if (err) throw err;
//   console.log("Database created!");
//   const db=data.db("newdb")
//   const collection = db.collection("newcollection")
//   collection.insertOne({"id":"123"})
//   data.close();
// });
// const async=require('async')
// async.auto({
//     fun1:(callback)=>{
//         console.log("hi")
//         callback(null,{"data":"priya"})
//     }
// },(err,result)=>{
//     console.log("result is",result.fun1)
// })
const async=require('node-fetch')

fetch('https://api.appfigures.com/v2/?client_key=e80698b9383d4a00b915be3a0a5ced9f')
.then(response=>response.JSON())
.then(data=>{
    console.log("dtaa is",data)
})
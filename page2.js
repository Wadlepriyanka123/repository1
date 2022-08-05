// const MongoClient =require('mongodb').MongoClient
// const url="http://localhost:27017"
// const dbname="new_db"

// MongoClient.connect(url,(err,data)=>{
//     if(err){
//         console.log("error is",err)
//     }else{
//        const db1=data.db(dbname)
//        const collection1=db1.collection('document1')
//        collection1.insertOne({"name":"priyanka"})
//        const findResult = await collection1.find({}).toArray();
//         console.log('Found documents =>', findResult);
//     }
// })


// function mycall(result){
//     console.log("result is",result)
// }

// function mycal(n1,n2,mycall){
//     var sum=n1+n2
//     mycall(sum)
// }

// mycal(10,29,mycall)


// const newpromise = new Promise((resolve,reject)=>{
//     var flag=0
//     if(flag){
//         resolve("number is nonzero")
//     }else{
//         reject("number is zero")
//     }
// })
// newpromise.then(d=>{

// }).catch(e=>{

// })

// function myfun(){
//    setTimeout(()=>{
//         console.log("myfun is calling")
//     },2000)  
// }

// async function mynewfun(){
//   const result=await myfun()
// }

// console.log("before")
// mynewfun()
// console.log("after")



// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     console.log("hi")
//     res.write("welcome")
//     res.end()
// })
// app.listen(5000)

const http =require('http')

const server1=http.createServer((req,res)=>{
    res.write("welcome")
        res.end()
})
server1.listen(2000,()=>{
    console.log("hi")
})








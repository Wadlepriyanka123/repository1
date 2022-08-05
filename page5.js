const MongoClient=require('mongodb').MongoClient
const url="mongodb://localhost:27017"

MongoClient.connect(url,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        // console.log("data is",data)
        var new_db=data.db("newdb");
        var new_collection = new_db.collection("newcollection")
        var new_collection2=new_db.collection("newcollection2")
        new_db.collection("newcollection2").aggregate([
            {
                $lookup:{
                    from:"newcollection",
                    localFiled:"id",
                    foreignField:"newid",
                    as:"joining"
                }
            }
        ]).toArray((e,d)=>{
            console.log(JSON.stringify(d))
        })
        // new_collection2.insertOne({ "name":"rfgc","age":"89"})
        // new_collection2.find({}).toArray((e,d)=>{
        //     console.log("ththnyh",d)
        // })
    }
})
const mongoose = require('mongoose')

const connectDb=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
          useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((con)=>{
        console.log(`connecting host:${con.connection.host} `)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb;
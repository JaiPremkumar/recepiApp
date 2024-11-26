const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')
const connectDb = require('./config/database')
 
dotenv.config({path:path.join("config/config.env")})
connectDb()

app.listen(process.env.PORT,()=>{
    console.log(`port listening on ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

//postmanApi Link = https://identity.getpostman.com/accounts?continue=https%3A%2F%2Fgo.postman.co%2Fredirect%2Fworkspace%3Ftype%3Dteam%26recentlyVisited%3Dtrue
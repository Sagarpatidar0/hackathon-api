const express = require("express");
require("./Config/mongoDB")
const env = require("dotenv")
const app = express();
const Contact = require("./Routes/Contact")
const Bdoner = require("./Routes/Bdoner");
const Mdoner = require("./Routes/Mdoner");
const Gdoner = require("./Routes/Gdoner");
var cors = require('cors')

app.use(cors())

const PORT = process.env.PORT||8000

env.config();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json("WELLCOM TO HACKATHON unknown")
})

app.use("/api/contact",Contact)
app.use("/api/bdoner",Bdoner)
app.use("/api/mdoner",Mdoner)
app.use("/api/gdoner",Gdoner)

app.listen(PORT,(err)=>{
      if (err) {
        console.log(err)
      } else {
        console.log("Connected to port:",PORT)
      }
})



const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require ('dotenv');
const productRouter = require('./productRouter')

dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send(`<p> Hello Backend E-Commerce App </p> 
    <a href="http://localhost:3001/products">Go to Products</a>`)
})

app.use(productRouter)

app.listen(PORT, console.log(`Server running in Port: ${PORT} `))

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("DB Connected Sucessfully"))
.catch((err)=>console.log(" Error on Connecting to DB:", err))


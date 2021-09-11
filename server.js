const express = require("express")
const configDB = require("./configDB/configDB")
const app = express()
require('dotenv').config({ path: './configDB/.env' })
configDB()
const authRouter = require("./routes/authRoute")

app.use(express.json())
app.use("/auth",authRouter)



const PORT =5000
app.listen(PORT, (err) => err ? console.error(err) : console.log("the server is running on port "+PORT))
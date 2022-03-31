const express = require("express");

const cors=require("cors")
const app=express()

app.use(cors())
app.use(express.json())


const bodyCareController=require("./controllers/bodyCare.controller")
const hairCareController=require("./controllers/hairCare.controller")



const serumController=require("./controllers/serum.controller")
const moisturizerController=require("./controllers/moisturizer.contoller")

const register = require("./controllers/registration.controller")
const login = require("./controllers/login.controllers");

app.use("/bodycare",bodyCareController)
app.use("/haircare",hairCareController)
app.use("/serum",serumController)
app.use("/moisturizer",moisturizerController)

app.use("/login",login);
app.use("/register",register);




module.exports=app


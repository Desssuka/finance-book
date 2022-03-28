import { Application } from "express"

const express=require("express")

const app:Application=express()


app.listen(3000,()=>{
    console.log("server launch in 3000")
})
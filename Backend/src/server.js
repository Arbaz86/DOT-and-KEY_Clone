const app=require("./index")

const connect=require("./configs/db")



app.listen(4000,async()=>{
    try {
        await connect()
        console.log("listening to port 5000")
    } catch (err) {
        console.log(err)
        
    }
})
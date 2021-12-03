const { response } = require("express")
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const url="mongodb+srv://ishita:ishita12@cluster0.5s3gd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema=require('./library');
mongoose.connect(url).then(()=>console.log("Connected to the database"))
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
    const mybookname=req.body.bookname;
    const myissuer=req.body.issuer;
    const myduedate=req.body.duedate;

    try{
        const newlibrary=new mySchema(
            {
                bookname:mybookname,
                issuer:myissuer,
                duedate:myduedate

            }
        )
        const savedlibrary=await newlibrary.save()
        res.json(
            {"message":"Library is saved","data":savedlibrary}
        )

    }

    catch(err)
    {
        res.json(err);

    }


})


app.use("/",(req,res)=>{
    //res.send("Hello from express server")
    res.json(
        {
            "message":"hehe"
        }
    )
})
app.listen(3000,()=>console.log("Express started"))



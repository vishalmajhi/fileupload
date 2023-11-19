// git remote add origin https://github.com/vishalmajhi/fileupload.git
// >>   git branch -M main
// >>   git push -u origin main

const express = require("express");
const app =express();
const multer= require("multer");

const upload =multer({dest:"uplods"});

// upload single file

// app.post("/upload",upload.single("file"),(req,res)=>{
//     res.json({status:"sucess"})
// })


//multiple file
                                    //  for number file upload


// app.post("/upload",upload.array("file" ,2),(req,res)=>{
//     res.json({status:"sucess"})
// })

// multiple field upload
const multifield =upload.fields([
    {name:"avatar",maxCount: 1  
},
{name:"profile",maxCount: 1  
}
]);
app.post("/upload",multifield,(req,res)=>{
    res.json({status:"sucess"})
})


app.listen(5000,()=>{
    console.log("server is running");
})


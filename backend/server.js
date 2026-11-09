const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is Home Page",
  });
});

app.get("/api/status",(req,res)=>{
    res.status(200).json({
        message:"The API is running successfully"
    })
})

app.get("/api/admin/status",(req,res)=>{
    res.status(200).json({
        "message":"Admin API is running Successfully"
    })
})

app.listen(PORT, () => {
  console.log("Server Started");
});

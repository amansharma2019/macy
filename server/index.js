const express = require("express");
const app = express();
const port = 8081;
const http = require("http");

require("./configs/db/database")


app.listen(port,()=>{
    console.log("Macy backend server running at http://localhost:"+port);
})






http.createServer(app);

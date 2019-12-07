const mongoose = require("mongoose");
const dbName = "macy"
const dbUrl = "mongodb://localhost:27017/"+dbName;


mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Macy backend server connected to database named "+dbName);
}).catch(error => {
    console.error("Macy backend server can't connected to database");
})
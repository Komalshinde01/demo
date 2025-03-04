const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("Welcome to the home page");
}
);

const port = 5000;
app.listen(port,()=>{
    console.log(`server run ${port}`);
}
);
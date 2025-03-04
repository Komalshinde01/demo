const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("Welcome to the home page");
}
);

app.get('/index',(req,res) =>{
    res.send("welcome to the index page");
}
);

app.get('/contact',(req,res) =>{
    res.send("welcome to the contact page");
});

const port = 5000;
app.listen(port,()=>{
    console.log(`server run ${port}`);
}
);
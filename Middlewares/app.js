const express = require("express");
const app = express();


//logger - morgan
app.use((req, res, next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method , req.hostname, req.path, req.time);
    next();
});

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next()
//     }
//     res.send("ACCESSS DENIED!!");
// });

const tokenAccess = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next()
    }
    res.send("ACCESSS DENIED!!");
};


app.get("/api",tokenAccess, (req,res,next)=>{
    res.send("data");
})


app.use("/random",(req, res, next)=>{
    
    console.log("Im only for random");
    next();
})


// app.use((req, res, next)=>{
//     console.log("Hi, IM 1 middleware.")
//     next()
// });

// app.use((req, res, next)=>{
//     console.log("Hi, IM 2 middleware.")
//     next()
// });

app.get("/random", (req, res)=>{
    res.send("This is a random page.")
})

app.get("/",(req, res)=>{
    res.send("Hello root");
});

app.use((req,res)=>{
    res.send("Page not found!!")
});

app.listen(8080,()=>{
    console.log("Listining to port 8080");
});

const express = require("express");
const app = express();

// console.log(app);

let port = 3000;
app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
})

app.get("/",(req,res)=>{   
    res.send("hello, You contacted the root path");
})


app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let {username , id} = req.params;
    // res.send(`hello, welcome to @${username}`);
    res.send(`<h1>hello, welcome to @${username}</h1>`);
})

app.get("/search",(req,res)=>{   
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`Seach results for query ${q}`);
})

// app.get("/home",(req,res)=>{      // to send response to the specific path
//     res.send("You contacted the home path");
// })
// app.get("/help",(req,res)=>{
//     res.send("You contacted the help path");
// })

// app.get("*",(req,res)=>{  // else path other than above paths
//     res.send("This path does not exist");
// })

// app.post("/",(req, res)=>{
//     res.send("you send a post request");
// })






// app.use((req,res)=>{     //to recieve responses on all paths
    
//     // console.log(req);
//     console.log("Request recieved");
//     // res.send("Helo");
//     // res.send("<h1> Ansh </h1>");
//     res.send({           // to send response
//         name : "Ansh",
//         college : "Gniot"

//     })
// })
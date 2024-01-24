//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var passwordCheck = false;
// var passwordUser; passwordUser gaiusah di define di sini

app.use(bodyParser.urlencoded({extended:true}))

function checkPassword(req, res, next) {
    console.log(req.body);
    //  if(req.body["passsword"] == 'ILoveProgramming'
    // Salah karena req.body["passsword"] bakal undefined, kita masukin dl nilainya ke dalam variabel konstan password
    const passwordUser = req.body["password"];
    console.log(passwordUser);
    if(passwordUser === "ILoveProgramming") {
        passwordCheck = true;
    } else {
        passwordCheck = false;
    }
    console.log(passwordCheck);
    next();
}

app.use(checkPassword);

//Ini itu route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(passwordCheck === true){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // res.sendFile(__dirname + "/public/index.html");
        //Atau bisa jg menggunakan
        res.redirect("/");
    }
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
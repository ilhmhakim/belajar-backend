import express from "express";
const app = express();
const port = 3000;

// "/" adalah endpoints
app.get("/", (req, res) => {
    //Klo cm req aja ada bakal banyak data yang kta terima
    //rawHeaders adalah list of key value pairs that come from where the req originated
    // console.log(req.rawHeaders);

    //Untuk mengirim kembali respond
    res.send("<h1>Hello</h1>")
})

// http://localhost:3000/contact
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone : 043244324432</p>")
})

// http://localhost:3000/about
app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My Name is Ilham</p>")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
})



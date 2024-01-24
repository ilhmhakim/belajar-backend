import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//ur.encoded digunakan untuk handle html form
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  // console.log(__dirname + " /public/index.html")
  //file index.html akan disend back ke client (harus particular/spesifik pathnya)
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

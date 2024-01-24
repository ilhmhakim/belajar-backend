import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny")); //Tiny digunakan agar output dipersingkat nanti langsung dicoba aja di Postman

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

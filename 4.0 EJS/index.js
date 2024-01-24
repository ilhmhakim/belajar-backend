import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

//Untuk mempersingkat pembacaan path file
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

//Menggunakan route get karena ketika diakses akan langsung menampilkan tampilan yang kita inginkan
app.get("/", (req, res) => {
    //Mengakses kelas date
    const date = new Date();
    //Akan menampilkan time yang spesifik
    //Btw console log cm buat ngecek aja
    console.log(date);
    //Menampilkan hari ke berapa (0-6) || 0 untuk Sunday 6 untuk Saturday, 1-5 itu weekday
    let today = date.getDay();
    console.log(today);
    let dayTypeV = "";
    let adviceV = "";

    if(today > 0 && today <= 5){
        dayTypeV = "weekday";
        adviceV = "it's time to work hard";
    } else {
        dayTypeV = "weekend";
        adviceV = "it's time to have fun!"
    }
    
    res.render(__dirname + "/views/index.ejs", 
    //Key dari EJS (dayType dan advice) akan diisikan dengan value
    {   
        dayType: dayTypeV,
        advice: adviceV,
    }); 
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
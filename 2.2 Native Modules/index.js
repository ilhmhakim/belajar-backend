const fs = require("fs");

//Harus dikasih comment dl, klo ga dikasih dia bakal rewrite ulang
// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// })

fs.readFile("message.txt", "utf8", (err, data) => {
    //Klo ga pake "utf8" maka outputnya akan buffer. utf digunakan untuk menspesifikkan agar content tidak diencoding
    if (err) throw err;
    console.log(data);
})
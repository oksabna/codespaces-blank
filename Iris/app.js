/* const express = require("express");
 
const app = express();
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1> <br>Страничка обучающегося</br> <p> Сегодня прекрасный день, чтобы забыть как вставлять картинки в хтмл разметку</p> ");
});
app.listen(3000); */

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let surname = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("Привет, " + name + surname);
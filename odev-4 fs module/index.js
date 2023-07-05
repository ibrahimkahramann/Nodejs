const fs = require('fs');

/* 
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000,','utf8',(err) => {
    if(err) console.log(err);
    console.log("Dosya basarili bir sekilde olusturuldu!");
});
 */

/* 
fs.readFile('employees.json','utf8',(err,data) => {
    if(err) console.log(err);
    console.log(`Dosya basarili bir sekilde okundu:\n${data}`);
});
 */

/* 
fs.appendFile('employees.json','\n"name2": "Arin", "salary2": 3000}','utf8',(err) => {
    if(err) console.log(err);
    console.log('Dosyaya yeni veri eklendi.')
});
 */

fs.unlink('employees.json',(err) => {
    if(err) console.log(err);
    console.log('Dosya silindi.')
});
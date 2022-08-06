const fs = require('fs');
function write(arg){
    /*Esta funcion toma el argumento en .js y lo transforma a .json , reescribiendo finalmente el mismo en list_of_books.json */
    let var_json = JSON.stringify(arg,null,2);//Se transforma .js => .json
    fs.writeFileSync('./list_of_books.json',var_json);//Se reescribe el archivo

}
module.exports = write;
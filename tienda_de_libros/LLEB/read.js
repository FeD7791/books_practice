function read(arg){
        /*Esta funcion convierte el argumento arg que es un archivo .json en un archivo .js */

    const arg_java = JSON.parse(arg);//Se parsea arg que es .json a .js y se guarda en arg_java
    return arg_java; //la funcion devuelve arg_java
}
module.exports = read;
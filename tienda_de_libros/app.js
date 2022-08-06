const fs = require('fs');
const read = require('./LLEB/read.js');//metodo para leer archivo .json y transformarlo a .js
const cargar = require('./LLEB/load.js');//metodo para agregar un nuevo libro a la lista
const lectura = require('./LLEB/lectura.js');//metodo para imprimir la lista de libros
const editar = require('./LLEB/edicion.js');//metodo para editar la entrada correspondiente a un libro con ID determinada
const borrar = require('./LLEB/borrado.js');//metodo para borrar la entrada correspondiente a un libro con ID determinada
const escribir = require('./LLEB/write.js');//metodo para escribir en el arrchivo list_of_books.json

/* */

const list_json = fs.readFileSync('./list_of_books.json','utf-8');//Se carga la lista de libros en la variable list_json
let list_java = read(list_json);//Se convierte la lista cargada en .json a una .js y se la guarda en list_java

let entrada = process.argv[2]; //metodo (load,read,delete,edit)
let entrada2 = process.argv[3];
let entrada3 = process.argv[4];
let entrada4 = process.argv[5];
let entrada5 = process.argv[6];
let entrada6 = process.argv[7];
let entrada7 = process.argv[8];
let entrada8 = process.argv[9];





switch(entrada){
    case 'load':
        // parameters_array guarda las variables asociados a los campos del nuevo libro a agregar
        //new_list_load es la nueva lista con el nuebo objeto (libro) cargado
        /*
        entrada2 = title
        entrada3 = author
        entrada4 = genre
        entrada5 = year
        entrada6 = cost
        entrada7 = price
         */
        const parameters_array = [title,author,genre,year,cost,price]=[entrada2,entrada3,entrada4,entrada5,entrada6,entrada7];
        const new_list_load = cargar(list_java,parameters_array)
        escribir(new_list_load);//se sobreescribe el archivo de salida utilizando la funcion write
        break




    case 'read':
        lectura(list_java);//se llama a la funcion para leer e imprimir la lista de titulos de libros
        break




    case 'edit':
        //parameters_array2 guarda las variables asociados a los campos del nuevo libro a editar
        //PARA USAR ESTE METODO SE INTRODUCE PRIMERO LA ID DEL LIBRO Y LUEGO LOS OTROS CAMPOS POSTERIORES (segun la instruccion)
        /*
        entrada2 = ID
        entrada3 = title
        entrada4 = author
        entrada5 = genre
        entrada6 = year
        entrada7 = cost
        entrada8 = price
         */
        const parameters_array2 = [title,author,genre,year,cost,price,ID]= [entrada3,entrada4,entrada5,entrada6,entrada7,entrada8,entrada2];
        const new_list_edit = editar(list_java,parameters_array2)
        escribir(new_list_edit);
        break


        
    case 'delete':
        const new_list_delete = borrar(list_java,entrada2);//Se borra el libro con la ID=entrada2 determinada
        escribir(new_list_delete);
        break


        
}
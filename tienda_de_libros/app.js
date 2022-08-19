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



// Está muy bien esto, ojo la indentación: https://es.javascript.info/article/coding-style/code-style.svg
// Falta consistencia con el punto y coma, ";", no pasa nada si no lo usás, (casi siempre), pero o lo usás siempre o no lo uses.

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
        
        // Acá creaste todas estas variables: "title,author,genre,year,cost,price", en donde las estás usando? es código innecesario.
        const parameters_array = [title,author,genre,year,cost,price]=[entrada2,entrada3,entrada4,entrada5,entrada6,entrada7]; // Esto está mal, acá lo que estás haciendo es usar una forma acortada de crear variables a través de un array, "[title,author,genre,year,cost,price]" y además estás creando la variable parameters_array que equivale a todo el array.
        // Por lo que la opción correcta de hacer esto sería: "const [title,author,genre,year,cost,price] = [entrada2,entrada3,entrada4,entrada5,entrada6,entrada7];" esto se conoce como destructuring. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        // Y además es totalmente innecesario en este caso, hacer destructuring y crear nuevas variables con cada argumento;
        // Pero no tiene nada de malo guardar los argumentos "entrada" en un nuevo array, aunque podés usar otra forma.
        
        const new_list_load = cargar(list_java,parameters_array) // Recordá que process.argv ya es un array, podés usar un método para recortarlo o modificarlo, hay muchas formas de manipular un array: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
        escribir(new_list_load);//se sobreescribe el archivo de salida utilizando la funcion write
        break // Consistencia con el punto y coma.




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
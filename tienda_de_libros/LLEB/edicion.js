const eraser = require('./borrado.js');//Se utiliza la funcionalidad de borrado
function edit(lista,var_array){
    /*Esta funcion edita un objeto de la lista de objetos 'lista' cuya ID sea igual a var_array[6], aca var_array es un arreglo
    con los valores de titulo, autor, genero, anio, costo, precio e ID correspondientes para la edicion de un libro con determinada
    ID. Para hacer la edicion primero se borra el elemento de la lista con la ID particular, luego se crea un nuevo objeto con 
    las nuevas caracteristicas indicadas en var_array y finalmente se agrega este objeto a la lista, que se devuelve a la app
    principal */
    const ID = var_array[6];// Se almacena la ID del objeto a editar
    let lista_new = eraser(lista,ID);//Se borra el objeto relacionado a la ID respectiva
    
    const fields = ['title','author','genre','year','cost','price','ID'];//este es un dummy array que guarda nombres de los campos
    let campo;
    let objeto = {};
    //El siguiente ciclo for se utiliza para crear un nuevo objeto con las especificaciones requeridas y MISMO ID
    for(let i=0; i< fields.length ; i++ ){
        campo = fields[i];
        objeto[campo] = var_array[i];
        }
    lista_new.push(objeto);//se genera una nueva lista (lista editada)
    return lista_new//La salida es la nueva lista editada, con los mismos objetos de ID distinta ID y el objeto editado asociado a ID
}
module.exports = edit;
// Muy interesante este algoritmo! y bien organizada.
function load(lista,var_array){
    /*Esta funcion toma la lista de objetos almacenada en 'lista' y un arreglo de atributos asociados a un libro 
    guardados en var_array. La funcion crea un nuevo objeto basado en estos atributos y una ID asociada al libro 
    utilizando un generador de numeros aleatorios naturales. La funcion verifica que no se reptian los ID, finalmente
    se agrega el nuevo objeto a la lista predecesora */
    const fields = ['title','author','genre','year','cost','price'];//Variable dummy para guardar los nombres de los campos

    //creacion objeto con los nuevos atributos indicados en 'fields'
    let campo
    let objeto ={}
    for(let i=0; i< var_array.length ; i++ ){
        campo = fields[i];
        objeto[campo] = var_array[i];
        }
    //Se genera un codigo 'ID' para el nuevo objeto
    index_array = [] // Ojo, esto es reasignación de una variable, no es una creación de una nueva variable. Recordá que es JavaScript.
    for(j=0;j<4;j++){//para j<4 se pueden guardar 10^4 = 10000 libros distintos
        // Acá pasa una reasignación de j, no una creación de la variable j, te falta var, o let o const dentro del for loop.
        index_array.push(Math.floor(Math.random()*10))
    }
    let index_string = index_array.join('');
    /* Fin construccion del ID */
    objeto.ID = index_string;// Se asocia el nuevo codigo al ID del objeto

    /* Se verifica que la ID no sea repetida */
    let var_t_f = true
    // Ojo con esto: Loop infinito que te va a romper la aplicación, si o si var_t_f lo tenés que hacer false cuando termine el loop, o sino el while nunca va a parar de correr.
    while(var_t_f === true){
        for(k=0;k<lista.length;k++){
            if(lista[k].ID===objeto.ID){
                var_t_f = true
                break
            }else{
                var_t_f = false
            }
        }
    }
    
    lista.push(objeto);//Se agrega el objeto al array 'lista'
    return lista//Se devuelve la nueva lista
}
module.exports = load;

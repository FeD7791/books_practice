function erase(lista,var_ID){
    // Está perfecto hacer el callback a parte, como hiciste acá para el método "filter".
    //
    // Ojo la indentación:
    // function filterer(element){return element.ID!=var_ID};
    //
    // A esto:
    //
    // function filterer(element){
    //    return element.ID!=var_ID
    // };
    //
    // Y el espacio despues del comentario.
    // Y espacios muertos.

    /*Esta funcion borra el objeto, que se encuentra en la lista de objetos lista, tal que objeto.ID = var_ID */
    function filterer(element){return element.ID!=var_ID};//funcion para filtrar a los objetos que no tienen objeto.ID = var_ID
    let element = lista.filter(filterer)//se guarda en la variable element el arreglo de objetos tales que objeto.ID /= (DISTINTO DE) var_ID
    return element//se devuelve la nueva lista

}
module.exports = erase;
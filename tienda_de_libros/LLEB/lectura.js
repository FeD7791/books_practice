function lectura(arg){
    /*Esta funcion toma la lista de libros que ingresa por arg y printea los titulos de los libros */
    let arreglo_titulos = arg.map((entrada)=>{return entrada.title});
    console.log(arreglo_titulos);
}
module.exports = lectura;
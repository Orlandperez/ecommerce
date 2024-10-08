export const HandleData = (arr , value) => {

    try {
       if(arr){
        const bebida = arr.find(p => p.nombre.toLowerCase() === value.toLowerCase())
        return bebida ? bebida : {errorMsj: 'no hay coincidencias'}
       }
    } catch (error) {
        console.log(error)
        return null 
    }

}
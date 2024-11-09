export const HandleData = (arr , value) => {

    try {
       if(arr){
        const bebida = arr.find(p => p.nombre.toLowerCase() === value.toLowerCase() 
    || p.tipo.toLowerCase() === value.toLowerCase())
        return bebida ? bebida : {errorMsj: 'no hay coincidencias'}
       }
    } catch (error) {
        console.log(error)
        return null 
    }

}

//prueba de api 

export const GetUsers = async () => {
    const url = "https://localhost:44369/api/User/all" ; 
    const response = await fetch(url, {
        method:"GET" 
    })
    const res  = await response.json() ; 
    return res  ;
}
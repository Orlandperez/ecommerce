

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

//obtener cantidad de productos en el carrito
export class Cantidad {
    static instance = null;
    cantidad = 0;

    constructor() {
        if (Cantidad.instance) {
            return Cantidad.instance;
        }
        Cantidad.instance = this;
    }

    setCantidad(cant) {
        this.cantidad += cant;
    }

    getCantidad() {
        console.log('cantidad ' + this.cantidad);
        return this.cantidad;
    }
}


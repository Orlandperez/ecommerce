import { prodcutosDTO } from "./ProductosDTO"

export class UsuarioDTO {
    NOMBRE: string
    APELLIDO : string
    EMAIL : string
    PASSWORD : string
    FECHA_NAC : Date
    DNI : string 
    productos:object[] 

    constructor(name, surname, mail, pass, born, dni, products){
        this.NOMBRE = name,
        this.APELLIDO = surname,
        this.EMAIL = mail, 
        this.PASSWORD = pass ,
        this.FECHA_NAC = born,
        this.DNI = dni, 
        this.productos = []
    }
    getName(){
        return this.NOMBRE
    }
    getProducts(){
        return this.productos
    }
    setName(name:string){
        this.NOMBRE = name ;
    }
    setProductos(prod:prodcutosDTO){
      this.productos.push(prod); 
    }
} ;
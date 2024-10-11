//import Carrito from '../cuenta/Carrito';
import { useState } from 'react'
import './Lista.css'
import {Carrito} from '../cuenta/Carrito'
//import { useNavigate } from 'react-router-dom'

export const Lista = ({productos}) => {

    const [producAdd, setProdAdd] = useState([])
const AddToCart = (prod)=>{

    setProdAdd((prev)=> [...prev, prod])
    console.log([...producAdd, prod])
    
}


    return(
        <>
            {
                productos.length > 0 &&
                productos.map((producto , index) => {
                    return (
                        <div className="lista"  key={index}>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h2>{producto.nombre}</h2>
                            <p>$ {producto.precio}</p>
                            <p>{producto.descripcion}</p>
                            <button
                            onClick={()=> AddToCart(producto)}
                            >Agregar al Carrito</button>
                        </div>
                    )
                })

            }
            <Carrito/>
        </>
    )
}

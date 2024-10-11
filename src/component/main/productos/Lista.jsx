
import { useState } from 'react'
import './Lista.css'


export const Lista = ({productos}) => {

    const [producAdd, setProdAdd] = useState([])
    const [count , setCount] = useState(0) ;

const AddToCart = (prod)=>{
    setCount(count+1)
    setProdAdd((prev)=> [...prev, prod]) ;
    localStorage.setItem('counter', count)
    localStorage.setItem('productos', JSON.stringify([...producAdd, prod]))
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
        </>
    )

}

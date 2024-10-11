
import { Card } from '../../Card';
import './carrito.css'


export const Carrito = () => {
const productos = JSON.parse( localStorage.getItem('productos')) ; 


    return(
        <>
        <section className='carrito'>
            <div className='contenedor'>
                <h1>Carrito de compras</h1>
              
                {
                    productos.map((p, i)=> {
                     return(
                        <div key={i}>
                        <div>
                            <img src={p.imagen}/>
                            <p>{p.nombre}</p>
                            <p>${p.precio}</p>
                            
                        </div>
                    </div>
                     )
                        
                    })
                }
            </div>
        </section>

        </>
    )
}
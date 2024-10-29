
import './carrito.css'


export const Carrito = () => {
const productos = JSON.parse( localStorage.getItem('productos')) ; 


    return(
        <>
        <section className='carrito'>
            <div className='contenedor'>
                <h1>Carrito de compras</h1>
              
                {
                  productos &&
                  productos.map((p, i)=> {
                    return(
                       <div key={i}>
                       <div  className='carrito-producto'>
                            <img src={p.imagen}/>
                            <div>
                                <p>{p.nombre}</p>
                                <p>{p.descripcion}</p>
                                <p>${p.precio}</p> 
                            </div>
                       </div>
                   </div>
                    )
                       
                   })
                }
                <button className='boton1'>Confirmar</button>
                <button className='boton2'>Eliminar productos</button>
            </div>
        </section>

        </>
    )
}
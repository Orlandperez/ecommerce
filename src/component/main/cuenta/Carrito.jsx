import './carrito.css'

export const Carrito = ({producto}) => {
    return(
        <>
        <section className='carrito'>
            <div className='contenedor'>
                <h1>Carrito de compras</h1>
                <div>
                    {producto}
                </div>
            </div>
        
        </section>
        </>
    )
}
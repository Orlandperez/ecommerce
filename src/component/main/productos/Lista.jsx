import './Lista.css'


const Lista = ({productos}) => {
    return(
        <>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <div className="lista" >
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h2>{producto.nombre}</h2>
                            <p>$ {producto.precio}</p>
                            <p>{producto.descripcion}</p>
                            <button>Agregar al Carrito</button>
                        </div>
                    )
                })

            }
        </>
    )
}
export default Lista
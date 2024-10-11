import "./Card.css"
export const Card = (producto ) => {
    return (
        <div className="card">
            {producto.errorMsj ? (
                <h3>{producto.errorMsj}</h3>
            ) : (
                <>
                    {producto.nombre  ? (
                        <div className="card-contenedor">
                            <div>
                                <img src={producto.imagen} alt={producto.nombre} />
                            </div>
                            <div>
                                <p>{producto.descripcion}</p>
                                <p>Nivel de alcohol: {producto.alcohol}</p>
                                <p>${producto.precio}.-</p>
                                <button>Comprar</button>
                            </div>
                        </div>
                    ) : (
                        <h3>Inicia una búsqueda</h3>
                    )}
                </>
            )}
        </div>
    );
};

export const Card = (producto ) => {
    return (
        <div>
            {producto.errorMsj ? (
                <h3>{producto.errorMsj}</h3>
            ) : (
                <>
                    {producto.nombre  ? (
                        <div>
                            <h3>{producto.nombre}</h3>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <div>
                                <p>{producto.descripcion}</p>
                                <p>Nivel de alcohol: {producto.alcohol}</p>
                                <p>${producto.precio}.-</p>
                            </div>
                            <button>Comprar</button>
                        </div>
                    ) : (
                        <h3>Inicia una búsqueda</h3>
                    )}
                </>
            )}
        </div>
    );
};

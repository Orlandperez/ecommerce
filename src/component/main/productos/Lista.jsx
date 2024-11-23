import { useState, useEffect } from 'react'
import './Lista.css'
import { Spinner } from '../../spinner';
import { UsuarioDTO } from '../../../back/helper/UsuarioDTO';
import { Cantidad } from '../../../back/helper/searchProducr';
import PropTypes from 'prop-types';

export const Lista = ({ productos }) => {
    const [producAdd, setProdAdd] = useState([]);
    const [count, setCount] = useState(0);
    const [compra, setCompra] = useState(false);
    const [user, setUser] = useState(new UsuarioDTO());
    const cantidadClass = new Cantidad();

    // Efecto para obtener la cantidad de productos desde el localStorage
    useEffect(() => {
        const productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];
        setProdAdd(productosEnCarrito);
        setCount(productosEnCarrito.length);
        cantidadClass.setCantidad(productosEnCarrito.length); // Actualiza la cantidad con la clase
    }, []);

    const AddToCart = (prod) => {
        if (sessionStorage.length) {
            const usuario = JSON.parse(JSON.parse(sessionStorage.getItem('user')));
            setUser({
                NOMBRE: usuario.NOMBRE,
                APELLIDO: usuario.APELLIDO,
                FECHA_NAC: usuario.FECHA_NAC,
                EMAIL: usuario.EMAIL,
                PASSWORD: usuario.PASSWORD,
                DNI: usuario.DNI,
            });

            setCompra(true);
            setTimeout(() => {
                setCompra(false);
                const updatedProductos = [...producAdd, prod];
                setProdAdd(updatedProductos); 
                setCount(updatedProductos.length); 
                localStorage.setItem('productos', JSON.stringify(updatedProductos)); 
                localStorage.setItem('counter', updatedProductos.length); 
                cantidadClass.setCantidad(updatedProductos.length);
                alert(`${prod.nombre} agregado al carrito\npodes consultar el monto total en el carrito`);
            }, 1000);
        } else {
            alert('Inicia sesión o regístrate para comprar 😁');
        }
    };

    return (
        <>
            {
                !compra ? (
                    productos.length > 0 ? (
                        productos.map((producto, index) => (
                            <div className="lista" key={index}>
                                <img src={producto.imagen} alt={producto.nombre} />
                                <h2>{producto.nombre}</h2>
                                <p>$ {producto.precio}</p>
                                <p>{producto.descripcion}</p>
                                <button
                                    onClick={() => AddToCart(producto)}
                                >
                                    Agregar al Carrito
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )
                ) : (
                    <Spinner msj={'Agregando producto'} />
                )
            }
        </>
    );
};

Lista.propTypes = {
    productos: PropTypes.array.isRequired, // Cambié el tipo de "object" a "array" porque esperas un array de productos
};

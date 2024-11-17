import { useState, useEffect } from 'react';
import './carrito.css';
import { Spinner } from '../../spinner';
import { TotalCart } from '../../TotalCart';
import { GetUsers } from '../../../back/helper/searchProducr';

export const Carrito = () => {
    const [load, setLoad] = useState(false);
    const [productos, setProductos] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [users, setUsers] = useState([]) ; 





    useEffect(() => {
        const f = async ()=> {
            const data = await GetUsers() ; 
            setUsers(data) ; 

        }
        f(); 

        const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(storedProductos);
        
        const total = storedProductos.reduce((acc, p) => acc + p.precio, 0);
        setTotalProductos(total);
    }, []);
    console.log(users)
    const cleanCart = () => {
        localStorage.removeItem('productos');   
        localStorage.setItem('counter', 0);
        setLoad(true);
        setTimeout(() => {
            setLoad(false); 
            setProductos([]); 
            setTotalProductos(0);
        }, 2500);
    };

    return (
        <section className='carrito'>
            <div className='contenedor'>        
                <h1>Carrito de compras</h1>

                {load && !productos.length < 1 ? (
                    <Spinner msj={'Eliminando productos...'} />
                ) : (
                    productos.length > 0 ? (
                        <>
                            {productos.map((p, i) => (
                                <div key={i} className='carrito-producto'>
                                    <img src={p.imagen} alt={p.nombre} />
                                    <div>
                                        <p>{p.nombre}</p>
                                        <p>{p.descripcion}</p>
                                        <p>${p.precio}</p> 
                                    </div>
                                    <div>
                                        <button>eliminar</button>
                                    </div>
                                </div>
                            ))}
                            <TotalCart total={totalProductos}/>
                        </>
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )
                )}

                <button className='boton1'>Confirmar</button>
                <button className='boton2' onClick={cleanCart}>Eliminar productos</button>
            </div>
        </section>
    );
};

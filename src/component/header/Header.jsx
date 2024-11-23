import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import beb from '../../back/dataBack.json';
import { Cantidad, HandleData } from '../../back/helper/searchProducr';
import { Card } from '../Card';




export const Header = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState(null);
    const [cantidad, setCantidad] = useState(0);
    const CantidadClass = new Cantidad() ;
    const cantidadProductos = CantidadClass.getCantidad()
    const usuarioSesionStorage = sessionStorage.getItem('user');
    const userCurrent = usuarioSesionStorage ? JSON.parse(JSON.parse(usuarioSesionStorage)) : null;

    useEffect(()=> {
       const counter = localStorage.getItem('counter') ; 
       console.log(counter)
       setCantidad(counter)
    }, [])


    useEffect(() => {
        if (value.trim() !== '') {
            const foundData = HandleData(beb.bebidas, value);
            setResult(foundData);
        } else {
            setResult(null);
        }
    }, [value]);

    return (
        <>
            <header>
                <Link className='logo' to={"/"}>
                    <h1>Drunk in <br /> the House</h1>
                </Link>
                <nav>
                    <div>
                        <input
                            type="text"
                            placeholder="Buscar producto"
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <ul>
                        <li>
                            <Link className='link' to="/Cuenta">
                                <i className="bi bi-person-circle">
                                    {userCurrent ? `${userCurrent.NOMBRE} ${userCurrent.APELLIDO}` : 'Iniciar Sesion'}
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to={userCurrent ? '/Carrito' : '/'} onClick={()=> {
                                !userCurrent && alert('inicia sesion para ver el carrito') 
                            }}>
                                <i className="bi bi-cart"></i>
                            </Link>
                        </li>
                        <span className='counter-cart'>{cantidad}</span>
                    </ul>
                </nav>
            </header>
            <Card {...result} cb />
        </>
    );
};
;
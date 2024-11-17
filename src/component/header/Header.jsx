
import { Link } from 'react-router-dom';
import './Header.css' ;
import { useEffect, useState } from 'react';
import beb from '../../back/dataBack.json'
import { HandleData } from '../../back/helper/searchProducr';
import { Card } from '../Card';


export const Header = () =>  {

    const [value, setValue] = useState('');
    const [result, setResult] = useState(null);
    const [cantidad, setCantidad] = useState(0)
    const count =  JSON.parse(localStorage.getItem('counter')) ;
    useEffect(()=> {
        setCantidad(cantidad+count + 1)
        
    }, [])

    useEffect(() => { 
        if (value.trim() !== '') {
            const foundData = HandleData(beb.bebidas, value);
            if(foundData.errorMsj){
                setResult(foundData);
            }else{
                setResult(foundData);
            }
        } else {
            setResult(null); 
        }
    }, [value]);

    return(
        <>
        <header>
            <Link className='logo' to={"/"}><h1>Drunk in <br /> the House</h1></Link>
            <nav>
                <div>
                    <input type="text" placeholder="Buscar producto" onChange={(e)=> setValue(e.target.value)}/>
                
                </div>
                <ul>
                    <li><Link className='link' to="/Cuenta"> <i className="bi bi-person-circle"> Mi cuenta</i></Link></li>
                    
                    <li><Link className='link' to="/Carrito"><i className="bi bi-cart"></i></Link></li>
                    <span className='counter-cart'>{cantidad}</span>
                </ul>
            </nav>
        </header>
            <Card {...result} cb/>
        </>
    )
}
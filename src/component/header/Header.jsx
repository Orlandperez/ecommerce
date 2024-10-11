
import { Link } from 'react-router-dom';
import './Header.css' ;
import { useEffect, useState } from 'react';
import beb from '../../back/dataBack.json'
import { HandleData } from '../../back/helper/searchProducr';
import { Card } from '../Card';


export const Header = () =>  {
    
    const count = JSON.parse(localStorage.getItem('productos'))
    const [value, setValue] = useState('');
    const [result, setResult] = useState(null);
    const [countCart, setCountCart] = useState(0)

    //efecto para controlar el contador del carrito
    useEffect(()=>{
      setCountCart( count.length)
    }, [count.length])

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
            <Link className='logo'><h1>Drunk in <br /> the House</h1></Link>
            <nav>
                <div>
                    <input type="text" placeholder="Buscar producto" onChange={(e)=> setValue(e.target.value)}/>
                    <button><i className="bi bi-search"></i></button>
                
                </div>
                <ul>
                    <li><Link className='link' to="/Cuenta"> <i className="bi bi-person-circle"> Mi cuenta</i></Link></li>
                    <span className='counter-cart'>{countCart}</span>
                    <li><Link className='link' to="/Carrito"><i className="bi bi-cart"></i></Link></li>
                </ul>
            </nav>
        </header>
            <Card {...result} cb/>
        </>
    )
}
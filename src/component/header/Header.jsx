import { useEffect, useState } from 'react' ;
import productos from '../../back/dataBack.json' ; 

import { Link } from 'react-router-dom';
import './Header.css' ;


export default function Header() {
    const [data, setData] = useState([])

    useEffect(()=> {
        setData(productos.bebidas)
        console.log(data)
    } ,[data])

    return(
        <>
        <header>
            <Link className='logo' to = "/"><h1>Drunk in <br /> the House</h1></Link>
            <nav>
                <div>
                    <input type="text" placeholder="Buscar producto"/>
                    <button><i className="bi bi-search"></i></button>
                
                </div>
                <ul>
                    <li><Link className='link' to="/Cuenta"> <i className="bi bi-person-circle"> Mi cuenta</i></Link></li>
                    <li><Link className='link' to="/Carrito"><i className="bi bi-cart"></i></Link></li>
                </ul>
            </nav>
        </header>
        {/* <ul>
            {
                data.map((p, i)=> 
                <div key={i}>
                    <li >{p.nombre}</li>
                    <img style={{width:'160px'}} src={p.imagen}/>
                </div>
                )
            }
        </ul> */}
        </>
    )
}
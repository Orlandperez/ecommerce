import { useEffect, useState } from 'react' ;
import productos from '../../back/dataBack.json' ; 
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
            <h1>logo</h1>
            <nav>
                <div>
                    <input type="text" placeholder="Buscar producto"/>
                    <button><i className="bi bi-search"></i></button>
                
                </div>
                <ul>
                    <li><a href=""> <i className="bi bi-person-circle"> Mi cuenta</i></a></li>
                    <li><a href=""><i className="bi bi-cart"></i></a></li>
                </ul>
            </nav>
        </header>
        <ul>
            {
                data.map((p, i)=> 
                <li key={i}>{p.nombre}</li>
                )
            }
        </ul>
        </>
    )
}
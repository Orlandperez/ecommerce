import './Cuenta.css'
import './estrellas.css'
import { Link } from 'react-router-dom'

export const Cuenta = () => {


    return(
        <>
        <section className='miCuenta'>
            <div className='inicio'>
                <h1>Mi cuenta</h1>
                
                <Link className='cuenta' to="/Login">Iniciar sesion</Link> 
                <Link className='cuenta' to="/Register">Crear cuenta</Link>
            </div>



            
            {/* estrellas */}
            <div className="fondo">
                <span className="estrellas"></span>
                <span className="estrellas"></span>
                <span className="estrellas"></span>
                <span className="estrellas"></span>
                <span className="estrellas"></span> 
                <span className="estrellas"></span>
                <span className="estrellas"></span>
                <span className="estrellas"></span>
                <span className="estrellas"></span>
            </div> 
        </section>
        </>
    )
}
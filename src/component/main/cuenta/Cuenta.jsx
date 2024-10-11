import './Cuenta.css'
import './estrellas.css'
import { Link } from 'react-router-dom'

export const Cuenta = () => {
    return(
        <>
        <section className='miCuenta'>
            <div className='inicio'>
                <h1>Mi cuenta</h1>
                <div className='info'>
                    <div>
                        <h2>Mis datos</h2>
                        <p>Ve tus datos personales, tus <br /> direcciones y contraseñas</p>
                        <Link className='link' to="">Ir a mis datos</Link>
                    </div>
                    <div>
                        <h2>Mis compras</h2>
                        <p>Sigue el estado de tus compras  y<br /> consulta tus facturas</p>
                        <Link className='link' to="">Ir a mis compras</Link>
                    </div>
                </div>
                
                <Link className='cuenta' to="">Iniciar sesion</Link> 
                <Link className='cuenta' to="">Crear cuenta</Link>
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
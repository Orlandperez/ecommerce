import { useState } from 'react'
import './Cuenta.css'
import './estrellas.css'
import { Link, useNavigate } from 'react-router-dom'
import { Spinner } from '../../spinner'

export const Cuenta = () => {
const user = sessionStorage.getItem('user') ; 
const currentUser = user ? JSON.parse(JSON.parse(user)) : null ; 

const [load, setLoad] = useState(false) ; 
const navigate = useNavigate() ; 
const closeSesion = () => {
    setLoad(true)
    setTimeout(()=> {
        sessionStorage.clear(); 
        localStorage.removeItem('productos')
        setLoad(false)
        navigate('/')
        location.reload() ;
    }, 1400)
}
const buy =()=> {
    navigate('/')
}
return (
    <>
        {!load ? (
            user ? (
                <section className='miCuenta'>
                    <div className='inicio'>
                        {currentUser && currentUser.NOMBRE ? (
                            <div className="perfil">
                                <h1 className='titleUser'>{`Te damos la bienvenida ${currentUser.NOMBRE}!!`}</h1>
                                <div className="perfil-conteiner">
                                    <h3>Datos Personales</h3>
                                    <div>
                                        <p>{`Nombre: ${currentUser.NOMBRE}`}</p>
                                        <p>{`Apellido: ${currentUser.APELLIDO}`}</p>
                                    </div>
                                    <div>
                                        <p>{`Gmail: ${currentUser.EMAIL}`}</p>
                                        <p>{`Dni: ${currentUser.DNI}`}</p>
                                    </div>
                                    <p>{`Fecha de nacimiento: ${currentUser.FECHA_NAC}`}</p>
                                </div>
                                <div className='boton'>
                                    <button onClick={closeSesion}>Cerrar Sesión</button> <br />
                                    <button onClick={buy} >Ir a comprar</button>
                                </div>
                                
                            </div>
                        ) : (
                            <div>
                                <p>No hay información del usuario disponible.</p>
                            </div>
                        )}
                    </div>
                </section>
            ) : (
                <div className='containerActions'>
                    <h1>Hola!!</h1>
                    <div>
                        <button>  <Link className='cuenta' to="/Login">Iniciar Sesión</Link></button> <br />
                        <button> <Link className='cuenta' to="/Register">Crear Cuenta</Link></button>
                    </div>
                </div>
            )
        ) : (
            <Spinner />
        )}

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
    </>
);

}
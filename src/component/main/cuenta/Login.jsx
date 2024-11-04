import { Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
    return (
        <>
            <section className='login'>
                <h1>iniciar sesion</h1>
                <form action="">
                    <div>
                        <label htmlFor="">Correo</label> <br />
                        <input type="email" required placeholder="Ingrese su email" />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label> <br />
                        <input type="password" required placeholder="Ingrese su clave" />
                    </div>
                    <div>
                        <button>Ingresar</button> <br />
                        <Link className='registrarse' to="/Register">Registrarse</Link>
                    </div>
                    
                </form>
            </section>
        </>
    )
}
import { Link } from 'react-router-dom'
import './Register.css'

export const Register = () => {
    return(
        <>
        <section className='register'>
            <h1>Registrarse</h1>
            <form action="">
                <div className='register-conteiner'>
                    <div>
                        <label htmlFor="">Nonbre</label><br />
                        <input type="text" placeholder="Ingrese su nombre"/>
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label><br />
                        <input type="text" placeholder="Ingrese su apellido"/>
                    </div>
                </div>
                <div className='register-conteiner'>
                    <div>
                        <label htmlFor="">Edad</label><br />
                        <input type="nunber" required placeholder="Ingrese su edad"/>
                    </div>
                    <div>
                        <label htmlFor="">DNI</label><br />
                        <input type="number" required placeholder="Ingrese su dni"/>
                    </div>
                </div>
                <div className='register-conteiner'>
                    <div>
                        <label htmlFor="">Correo</label><br />
                        <input type="email" required placeholder="Ingrese su email"/>
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label><br />
                        <input type="password" required placeholder="Introdusca una clave"/>
                    </div>
                </div>
                <div className='register-conteiner2'>
                    <button>Registrarse</button> <br />
                    <Link className='ingresar' to="/Login">iniciar sesion</Link>
                </div>
            </form>
        </section>
        </>
    )
}
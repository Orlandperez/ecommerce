import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useState } from 'react';
import { UsuarioDTO } from '../../../back/helper/UsuarioDTO';



export const Register = () => {
    const navigate = useNavigate() ; 
    const [usuario, setUsuario] = useState(new UsuarioDTO()) ;

    const handleDataUsuario = (e) => {
        const {name , value } = e.target
        setUsuario({
            ...usuario,
            [name]: value
        })
    }

    const HandlePostUser = async (e)=> {
        e.preventDefault() ; 
        const edad = new Date().getFullYear() - new Date(usuario.FECHA_NAC).getFullYear()

     
        try {
      if(edad >= 18){
      localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario)) ;
      
      navigate('/Login')
      }else{
        alert(`${usuario.NOMBRE} necestias tener 18 para poder registrarte`)
      }
        } catch (error) {
            console.log(error)
        }
    }



    //retorno del componente 
    return(
        <>
        <section className='register'>
            <h1>Registrarse</h1>
            <form onSubmit={HandlePostUser}>
                <div className='register-conteiner'>
                    <div>
                        <label htmlFor="">Nonbre</label><br />
                        <input type="text" placeholder="Ingrese su nombre"
                        name="NOMBRE"
                        value={usuario.NOMBRE || ""}
                        onChange={handleDataUsuario}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label><br />
                        <input type="text" placeholder="Ingrese su apellido"
                         name="APELLIDO"
                         value={usuario.APELLIDO || ""}
                         onChange={handleDataUsuario}
                        />
                    </div>
                </div>
                <div className='register-conteiner'>
                    <div>
                        <label htmlFor="">Fecha de nacimiento</label><br />
                        <input type="date" required placeholder="Ingrese su fecha de nacimiento"
                        name="FECHA_NAC"
                        value={usuario.FECHA_NAC || ""}
                        onChange={handleDataUsuario}
                        />
                    </div>
                    <div>
                        <label htmlFor="">DNI</label><br />
                        <input type="number" required placeholder="Ingrese su dni"
                        name='DNI'
                        value={usuario.DNI || ""}
                        onChange={handleDataUsuario}
                        
                        />
                    </div>
                </div>
                <div className='register-conteiner'>
                    <div>
                        <label htmlFor="">Correo</label><br />
                        <input type="email" required placeholder="Ingrese su email"
                        name='EMAIL'
                        value={usuario.EMAIL || ""}
                        onChange={handleDataUsuario}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label><br />
                        <input type="password" required placeholder="Introdusca una clave"
                        name='PASSWORD'
                        value={usuario.PASSWORD || ""}
                        onChange={handleDataUsuario}
                        />
                    </div>
                </div>
                <div className='register-conteiner2'>
                    <button type='submit'>Registrarse</button> <br />
                    <Link className='ingresar' to="/Login">iniciar sesion</Link>
                </div>
            </form>
        </section>
        </>
    )
}
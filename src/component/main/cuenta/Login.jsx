import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react';

export const Login = () => {
const navigate = useNavigate() ;

const [usuarioLogin, setUsuarioLogin] = useState({
    mail:'',
    password:''
})


const handleLoginUser = (e)=> {
const {name, value} = e.target ; 
setUsuarioLogin({
    ...usuarioLogin, 
    [name]: value
}) ; 

}


const usuario = localStorage.getItem('usuario') ; 
const loginUser = (e)=> {
    e.preventDefault(); 
    if(usuario){
        const parseUser = JSON.parse(usuario)
        if(parseUser.EMAIL === usuarioLogin.mail && parseUser.PASSWORD === usuarioLogin.password){
            navigate('/perfil')
        }else{
            if(parseUser.EMAIL !== usuarioLogin.mail){
                alert('el correo es incorrecto')
            }
            if(parseUser.PASSWORD !== usuarioLogin.password){
                alert('la contraseña es incorrecta')
            }
        }
    }
}
    return (
        <>
            <section className='login'>
                <h1>iniciar sesion</h1>
                <form action="" onSubmit={loginUser} >
                    <div>
                        <label htmlFor="">Correo</label> <br />
                        <input type="email" required placeholder="Ingrese su email" 
                        name='mail'
                        value={usuarioLogin.mail || ''}
                        onChange={handleLoginUser}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label> <br />
                        <input type="password" required placeholder="Ingrese su clave" 
                        name='password'
                        value={usuarioLogin.password || '' }
                        onChange={handleLoginUser}
                        
                        />
                    </div>
                    <div>
                        <button >Ingresar</button> <br />
                        <Link className='registrarse' to="/Register">Registrarse</Link>
                    </div>
                    
                </form>
            </section>
        </>
    )
}
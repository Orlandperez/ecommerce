export const Perfil = ()=> {
    const usuario = localStorage.getItem('usuario') ;
    const userJson = JSON.parse(usuario) ; 
    console.log(userJson.NOMBRE)

    return(
        <>
        <div>
            <div>
             <p>{`Te damos la bienvenida ${userJson.NOMBRE}`}</p>
                
            </div>

        </div>
        
        
        </>
    )
} ;
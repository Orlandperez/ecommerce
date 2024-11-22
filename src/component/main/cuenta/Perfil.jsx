export const Perfil = ()=> {
    const usuario = localStorage.getItem('usuario') ;
    const userJson = JSON.parse(usuario) ; 
    

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
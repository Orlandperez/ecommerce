import './Perfil.css'
export const Perfil = () => {
    const usuario = localStorage.getItem('usuario');
    const userJson = JSON.parse(usuario);


    return (
        <>
            <div className="perfil">
                <h1>{`Te damos la bienvenida ${userJson.NOMBRE}!!`}</h1>
                <div className="perfil-conteiner">
                    <h3>Datos Personales</h3>
                    <div>
                        <p>{`Nombre: ${userJson.NOMBRE}`}</p>
                        <p>{`Apellido: ${userJson.APELLIDO}`}</p>
                    </div>
                    <div>
                        <p>{`Gmail: ${userJson.EMAIL}`}</p>
                        <p>{`Dni: ${userJson.DNI}`}</p>
                    </div>
                    <p>{`Fecha de nacimiento: ${userJson.FECHA_NAC}`}</p>
                </div>
            </div>


        </>
    )
};
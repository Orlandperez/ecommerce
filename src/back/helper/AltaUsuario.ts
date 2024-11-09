export const AltaUsuario = async (user: object) => { 
    try {
        const url = "https://localhost:44369/api/User/add" ;
        const request = await fetch(url, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }) ;    
        if(request.ok){
            const contentResponse = request.headers.get('Content-Type') ; 
            if(contentResponse && contentResponse.includes('application/json')){
                const response = await request.json(); 
               return response ;
            }else{
                const errMsj = await request.text() ;
                return errMsj ;
            }
        }else{
            const errMsj = "Datos no enviados, intentalo nuevamente" ;
            return errMsj
        }
    
          
        
    } catch (error) {
       throw 'error '+ error
    }
}
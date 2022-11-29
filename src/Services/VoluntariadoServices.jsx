import { toast } from 'react-toastify';


const VoluntariadoServices = {};

VoluntariadoServices.getVoluntariado = async () =>{
    let article = []

    try {
        //const response = await fetch("http://localhost:3000/api/retos/");
        const response = await fetch("https://ucycle-api-production.up.railway.app/api/voluntariado");
        const data = await response.json();
        article = data.voluntariado;        
    } catch (error) {
        toast.error("Unexpected error!");
    }
    finally{
        return article;
    }
}

export default VoluntariadoServices;
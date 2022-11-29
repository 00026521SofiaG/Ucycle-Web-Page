import { toast } from 'react-toastify';


const PeticionServices = {};

PeticionServices.getPeticion= async () =>{
    let peticion = []

    try {
        //const response = await fetch("http://localhost:3000/api/retos/");
        const response = await fetch("https://ucycle-api-production.up.railway.app/api/peticiones");
        const data = await response.json();
        peticion = data.peticiones;        
    } catch (error) {
        toast.error("Unexpected error!");
    }
    finally{
        return peticion;
    }
}

export default PeticionServices;
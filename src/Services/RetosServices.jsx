import { toast } from 'react-toastify';

const RetoServices = {};

RetoServices.getRetos = async () => {
    let retos = []

    try {
        //const response = await fetch("http://localhost:3000/api/retos/");
        const response = await fetch("https://ucycle-api-production.up.railway.app/api/retos");
        const data = await response.json();
        retos = data.reto;        
    } catch (error) {
        toast.error("Unexpected error!");
    }
    finally{
        return retos;
    }
}

export default RetoServices;
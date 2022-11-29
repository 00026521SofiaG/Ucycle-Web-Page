import { toast } from 'react-toastify';


const NoticeServices = {};

NoticeServices.getNotice = async () =>{
    let article = []

    try {
        //const response = await fetch("http://localhost:3000/api/retos/");
        const response = await fetch("https://ucycle-api-production.up.railway.app/api/articulo");
        const data = await response.json();
        article = data.articulo;        
    } catch (error) {
        toast.error("Unexpected error!");
    }
    finally{
        return article;
    }
}

export default NoticeServices;

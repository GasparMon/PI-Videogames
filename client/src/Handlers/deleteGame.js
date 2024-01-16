
import axios from "axios";
const url = import.meta.env.VITE_URL_HOST
const DeleteGame= async (id) =>{

    try{

    const response = await axios.delete(
        `${url}/mygameroomapp/videogames/${id}`
    )

    const {data} = response

    if (data.status) {

        return data;
      }

    }catch(error){

        return (error.message)

    }
} 

export default DeleteGame;


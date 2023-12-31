
import axios from "axios";

const DeleteGame= async (id) =>{

    try{

    const response = await axios.delete(
        `http://localhost:3001/mygameroomapp/videogames/${id}`
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


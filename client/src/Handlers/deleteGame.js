
import axios from "axios";

const DeleteGame= async (id) =>{

    try{

    const response = await axios.delete(
        `http://localhost:3001/mygameroomapp/videogames/${id}`
    )

    const {data} = response

    if (data) {
        return data;
      }

    }catch(error){

        return 

    }
} 

export default DeleteGame;


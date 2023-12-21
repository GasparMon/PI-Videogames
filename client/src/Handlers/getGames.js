import axios from "axios"
import { getVideogames } from "../redux/actions";

const getGames = async (req, res) =>{

    try{

        const response = await axios.get(`http://localhost:3001/mygameroomapp/videogames`)
        
        const {data} = response;

        if(data){

            return(data)
        }
    }catch(error){
        return res.status(500).send(error.message)
    }
} 

export default getGames
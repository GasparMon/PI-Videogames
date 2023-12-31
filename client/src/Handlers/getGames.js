import axios from "axios"

const getGames = async (req, res) =>{

    try{

        const response = await axios.get(`http://localhost:3001/mygameroomapp/videogames`)
        
        const {data} = response;

        if(data){

            return(data)
        }
    }catch(error){
        
        alert(error.message)
    }
} 

export default getGames
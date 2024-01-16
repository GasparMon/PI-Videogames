import axios from "axios"
const url = import.meta.env.VITE_URL_HOST
const getGenres = async () =>{

    try{

        const response = await axios.get(`${url}/mygameroomapp/genres`)
        
        const {data} = response;

        console.log(data)

        if(data){
            alert(data)
            return(data)
        }

    }catch(error){
        
        alert(error.message)
    }
} 

export default getGenres
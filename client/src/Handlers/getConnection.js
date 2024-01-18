import axios from "axios";

const url = import.meta.env.VITE_URL_HOST

const getConection = async () => {
  
  try {
    const response = await axios.get(
      `${url}/mygameroomapp/videogames`,
    );
    const { data } = response;
    
    if(data){
        return data;
    }
  } catch (error) {
    alert(error.message);

  }
};

export default getConection;
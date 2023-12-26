import axios from "axios";

const putUser = async (newInfo) => {
  try {
    const filteredObject = Object.fromEntries(
      Object.entries(newInfo).filter(([key, value]) => value !== null)
    );

    const response = await axios.put(
      `http://localhost:3001/mygameroomapp/videogames/user`,
      filteredObject
    );

   
    if (response.data) {
      return response.data;
    }

 
    return { error: "Respuesta inesperada del servidor" };
  } catch (error) {

    return { error: error.message };
  }
};

export default putUser;
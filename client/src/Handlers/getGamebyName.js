import axios from "axios";
const url = import.meta.env.VITE_URL_HOST
const getGameByName = async (name) => {
  try {
    const response = await axios.get(
      `${url}/mygameroomapp/videogames/name?name=${name}`
    );

    const { data } = response;

    return data;

  } catch (error) {

  alert(error.response.data)

  }
};

export default getGameByName;

import axios from "axios";
const url = import.meta.env.VITE_URL_HOST
const getGame = async (id) => {

  try {
    const response = await axios.get(
      `${url}/mygameroomapp/videogames/${id}`
    );

    const { data } = response;

    if (data) {

      return data;
    }
  } catch (error) {

    return (error.message);
  }
};

export default getGame;

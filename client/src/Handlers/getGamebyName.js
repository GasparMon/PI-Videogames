import axios from "axios";

const getGameByName = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/mygameroomapp/videogames/name?name=${name}`
    );

    const { data } = response;

    return data;

  } catch (error) {

  alert(error.response.data)

  }
};

export default getGameByName;

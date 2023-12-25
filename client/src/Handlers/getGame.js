import axios from "axios";

const getGame = async (id) => {

  try {
    const response = await axios.get(
      `http://localhost:3001/mygameroomapp/videogames/${id}`
    );

    const { data } = response;

    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.message);
  }
};

export default getGame;

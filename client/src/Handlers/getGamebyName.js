import axios from "axios";

const getGameByName = async (name) => {
console.log(name)
  try {
    const response = await axios.get(
      `http://localhost:3001/mygameroomapp/videogames/name?name=${name}`
    );

    const { data } = response;

    if (data) {
      return data;
    }
  } catch (error) {
    return res.status(500).send("error.message");
  }
};

export default getGameByName;

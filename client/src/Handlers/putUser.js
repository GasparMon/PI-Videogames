import axios from "axios";

const putUser = async (newInfo) => {
  try {
    const filteredObject = Object.fromEntries(
        Object.entries(newInfo).filter(([key, value]) => value.length > 0 || typeof value === "number")
      );

      console.log(filteredObject)
    const { data } = await axios.put(
      `http://localhost:3001/mygameroomapp/videogames/user`,
      filteredObject
    );
    return data;
  } catch (error) {

    return { error: error.message };
  }
};

export default putUser
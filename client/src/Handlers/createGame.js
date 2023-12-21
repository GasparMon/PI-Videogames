import axios from "axios";

const createGame = async (newGame) => {
  const { name, description, platforms, background_image,genres,released,rating} = newGame;

  try {
    const response = await axios.post(
      "http://localhost:3001/mygameroomapp/videogames",
      { name, description, platforms, background_image,genres,released,rating }
    );

    const { data } = response;
    let isCreated = false
    
    if(data.id.length > 0){
        isCreated = true
    
    }

    if (isCreated) {
      alert("Videogame has been created");
    }

    return isCreated;
  } catch (error) {
    alert(error.message);
    return false;
  }
};

export default createGame;
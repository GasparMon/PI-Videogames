import axios from "axios";

const createUser = async (submitUser) => {
  const { username, email, password, avatar } = submitUser;
  try {
    const response = await axios.post(
      "http://localhost:3001/mygameroomapp/submit",
      { username, email, password, avatar }
    );

    const { data } = response;
    const isCreated = data[1];

    if (isCreated) {
      alert("User has been created");
    }

    return isCreated;
  } catch (error) {
    alert(error.message);
    return false;
  }
};

export default createUser;
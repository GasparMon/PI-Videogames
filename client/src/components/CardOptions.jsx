import { useDispatch } from "react-redux";
import "../css/cardOptions.modules.css";
import { deleteGame, getVideogames } from "../redux/actions";
import DeleteGame from "../Handlers/deleteGame";
import getGames from "../Handlers/getGames";

export default function CardOptions(props) {
  const dispatch = useDispatch();

  const videogameData = async () => {
    try {
      const videogamesData = await getGames();
      dispatch(getVideogames(videogamesData));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (event) => {
    try {
      const id = event.target.value;

      const data = await DeleteGame(id);

      dispatch(deleteGame(id));

      await videogameData();
      return alert("Game has been deleted");
    } catch (error) {
      return alert(error.message);
    }
  };

  return (
    <div className="card_option_container">
      <div className="card_option_img">
        <img src={`/img/${props.background_image}`}></img>
      </div>
      <div className="card_option_info">
        <div className="card_option_name">
          <label>Videgame Name:</label>
          <h3>{props.name}</h3>
        </div>
        <div className="card_option_name">
          <label>Videgame Released:</label>
          <h3>{props.released}</h3>
        </div>
      </div>
      <div className="card_option_delete">
        <button
          className="delete_button"
          value={props.id}
          onClick={handleDelete}
        >
          Delete Game
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import getGames from "../Handlers/getGames";
import "../css/cards.modules.css";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../redux/actions";
import Card from "./Card";
import getGenres from "../Handlers/getGenres";

export default function Cards() {

  const fetchVideogameData = async () => {
    try {
      const videogamesData = await getGames();
      dispatch(getVideogames(videogamesData));
    } catch (error) {
      alert(error.message);
    }
  };

  const [pagePosition, setPagePosition] = useState(1);
  const itemsOnPage = 15;
  const dispatch = useDispatch();
  const { gameData } = useSelector((status) => status.userData);

  useEffect(() => {
    
    const fetchData = async () => {
      if (gameData.length === 0) {
        const response = await getGenres();
        console.log(response)
        await fetchVideogameData();
      } }

    fetchData();
    
  }, [dispatch]);

  const pageNum = Math.ceil(gameData.length / itemsOnPage);
  const itemsArray = Array.from(
    { length: itemsOnPage },
    (_, index) =>
      gameData.slice(index * itemsOnPage, (index + 1) * itemsOnPage)
  );

  const renderCards = itemsArray[pagePosition - 1];

  return (
    <div className="cards_container">
      <div className="cards_div">
        {renderCards.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            image={element.background_image}
            rating={element.rating}
            genres={element.Genres}
            platforms={element.platforms}
          />
        ))}
      </div>
      <div className="page_div">
        {Array.from({ length: pageNum }, (_, index) => (
          <button
            key={index + 1}
            className="page_button"
            onClick={() => setPagePosition(index + 1)}
            disabled={pagePosition === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import getGame from "../Handlers/getGame";
import "../css/detail.modules.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const goBack = () => {
 
    navigate(-1);
  };

  const [game, setGame] = useState({});

  useEffect(() => {
    const fetchGameInfo = async () => {
      try {
        const gameData = await getGame(id);

        if (gameData.id) {
          setGame(gameData);
        }
      } catch (error) {
        console.error("Error fetching videogames:", error);
      }
    };
    fetchGameInfo();
  }, []);  

  const optionalRender = () => {
    if (game.id && game.genres && game.platforms && game.id.length > 10) {
      return (
        <>
          <h1>Hola</h1>
        </>
      );
    } else {
      return (
        <>
          <div className="game_detail">
            <div className="back_button">
            <span class="material-symbols-outlined" onClick={goBack}>
undo
</span>
            </div>
            <div className="detail_left">
              <div className="detail_title">
                <h1>{game.name}</h1>
              </div>
              <div className="detail_img">
                {game.background_image && (
                  <img className="detail-img" src={game.background_image} alt={game.name} />
                )}
              </div>
              <div className="detail_rating">
                <div className="rating">
                <span class="material-symbols-outlined">
trending_up
</span>
                </div>
                <div className="rating">
                    <h1>{game.rating}</h1>
                </div>
                <div className="rating">
                <img src={`./img/meta.png`}/>
                </div>
                <div className="rating">
                <h1>{game.metacritic}</h1>
                </div>
              </div>
              <div className="details_">
                {game.genres && game.genres.map((element, index) => (
                  <div key={index}>
                    <label className="detail_gen">{element.name}</label>
                  </div>
                ))}
              </div>

            </div>
            <div className="detail_right">
                <div className="detail_description">
                    <h4>{game.description_raw}</h4>
                </div>
              <div className="details_">
                {game.platforms && game.platforms.map((element, index) => (
                  <div key={index}>
                    <label className="detail_gen">{element.platform.name}</label>
                  </div>
                ))}
              </div>
              <div className="detail_date">
                    <h2>Realeased Date: {game.released}</h2>
                </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <div className="detail_container">{optionalRender()}</div>;
}

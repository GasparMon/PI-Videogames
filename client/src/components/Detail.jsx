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
        return alert (error.message);
      }
    };
    fetchGameInfo();
  }, []);

  const optionalRender = () => {
    if (Object.keys(game).length > 0 && game.id.length > 10) {
      const backgroundImage = `/img/${game.background_image}`;
      return (
        <>
          <div className="game_detail">
              <span class="material-symbols-outlined" onClick={goBack}>
                widgets
              </span>
            <div className="detail_left">
              <div className="detail_title">
              <h3>{game.name}</h3>
              </div>
              <div className="detail_img">
                  <img
                    className="detail-img"
                    src={backgroundImage}
                    alt={game.background_image}
                  />
              </div>
              <div className="detail_rating_custom">
                <div className="rating">
                  <span class="material-symbols-outlined">trending_up</span>
                </div>
                <div className="rating">
                <h2>{game.rating}</h2>
                </div>
              </div>
              <div className="details_">
                {game.Genres &&
                  game.Genres.map((element, index) => (
                    <div key={index}>
                      <label className="detail_gen">{element.name}</label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="detail_right">
              <div className="detail_description">
                <h4>{game.description}</h4>
              </div>
              <div className="details_">
                {game.platforms &&
                  game.platforms.map((element, index) => (
                    <div key={index}>
                      <label className="detail_gen">{element}</label>
                    </div>
                  ))}
              </div>
              <div className="detail_date">
              <h3>Realeased Date: {game.released}</h3>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="game_detail">
            
              <span class="material-symbols-outlined" onClick={goBack}>
                widgets
              </span>
         
            <div className="detail_left">
              <div className="detail_title">
              <h3>{game.name}</h3>
              </div>
              <div className="detail_img">
                {game.background_image && (
                  <img
                    className="detail-img"
                    src={game.background_image}
                    alt={game.name}
                  />
                )}
              </div>
              <div className="detail_rating">
                <div className="rating">
                  <span class="material-symbols-outlined">trending_up</span>
                </div>
                <div className="rating">
                  <h2>{game.rating}</h2>
                </div>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="100px"
                    height="100px"
                  >
                    <path
                      fill="#ee3e54"
                      d="M13,27c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S14.105,27,13,27z"
                    />
                    <path
                      fill="#f1bc19"
                      d="M77,12c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S77.552,12,77,12z"
                    />
                    <path
                      fill="#fce0a2"
                      d="M50,13c-20.435,0-37,16.565-37,37s16.565,37,37,37s37-16.565,37-37S70.435,13,50,13z"
                    />
                    <path
                      fill="#f1bc19"
                      d="M83,11c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S85.209,11,83,11z"
                    />
                    <path
                      fill="#ee3e54"
                      d="M87,22c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S88.105,22,87,22z"
                    />
                    <path
                      fill="#fbcd59"
                      d="M81,74c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S82.105,74,81,74z M15,59c-2.209,0-4,1.791-4,4	s1.791,4,4,4s4-1.791,4-4S17.209,59,15,59z"
                    />
                    <path
                      fill="#ee3e54"
                      d="M25,85c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S26.105,85,25,85z"
                    />
                    <path
                      fill="#fff"
                      d="M18.5,51c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S19.881,51,18.5,51z"
                    />
                    <path
                      fill="#f1bc19"
                      d="M21,66c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S21.552,66,21,66z"
                    />
                    <path
                      fill="#fff"
                      d="M80,33c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S80.552,33,80,33z"
                    />
                    <circle cx="50" cy="50" r="25" fill="#f1bc19" />
                    <path
                      fill="#472b29"
                      d="M50,26.4c13.013,0,23.6,10.587,23.6,23.6S63.013,73.6,50,73.6S26.4,63.013,26.4,50 S36.987,26.4,50,26.4 M50,25c-13.807,0-25,11.193-25,25s11.193,25,25,25s25-11.193,25-25S63.807,25,50,25L50,25z"
                    />
                    <circle cx="50" cy="50" r="20" fill="#605e60" />
                    <path
                      fill="#fff"
                      d="M-13.647,79.794h5.529V69.147c0-0.448,0.037-0.971,0.224-1.42 c0.336-0.934,1.195-2.055,2.652-2.055c1.793,0,2.615,1.569,2.615,3.885v10.236h5.529V69.11c0-0.448,0.075-1.046,0.224-1.457 c0.374-1.083,1.308-1.98,2.615-1.98c1.831,0,2.69,1.532,2.69,4.184v9.937h5.529V69.035c0-5.454-2.652-7.92-6.164-7.92 c-1.345,0-2.466,0.299-3.474,0.897c-0.859,0.523-1.681,1.233-2.354,2.204H1.894c-0.785-1.905-2.652-3.101-5.006-3.101 c-3.138,0-4.744,1.718-5.529,2.877h-0.112l-0.262-2.466h-4.782c0.075,1.606,0.149,3.549,0.149,5.828L-13.647,79.794 L-13.647,79.794z"
                      transform="rotate(-45)"
                    />
                    <path
                      fill="#472b29"
                      d="M-14.001,80.147c-0.09-0.09-0.146-0.215-0.146-0.354v-12.44c0-2.293-0.075-4.221-0.149-5.805 c-0.006-0.137,0.044-0.27,0.138-0.368c0.095-0.099,0.225-0.155,0.362-0.155l4.782,0c0.256,0,0.471,0.192,0.497,0.447l0.145,1.369 c1.334-1.462,3.133-2.227,5.26-2.227c2.221,0,4.118,1.028,5.124,2.721c0.574-0.684,1.262-1.271,2.051-1.752 c1.102-0.654,2.322-0.97,3.734-0.97c4.172,0,6.663,3.147,6.664,8.42l0,10.759c0,0.276-0.224,0.5-0.5,0.5l-5.529,0 c-0.265,0-0.5-0.235-0.5-0.5v-9.937c0-2.445-0.736-3.684-2.19-3.684c-1.162,0-1.869,0.849-2.142,1.643 c-0.117,0.322-0.197,0.851-0.197,1.294v10.685c0,0.276-0.224,0.5-0.5,0.5h-5.529c-0.276,0-0.5-0.224-0.5-0.5V69.558 c0-1.544-0.368-3.385-2.115-3.385c-1.151,0-1.882,0.891-2.182,1.724c-0.176,0.422-0.195,0.915-0.195,1.251v10.647 c0,0.276-0.224,0.5-0.5,0.5h-5.529C-13.785,80.294-13.91,80.238-14.001,80.147z M-13.273,62.026 c0.066,1.491,0.126,3.261,0.126,5.328v11.94h4.529V69.147c0-0.422,0.027-1.047,0.262-1.612c0.406-1.13,1.445-2.362,3.114-2.362 c1.978-0.001,3.115,1.597,3.115,4.385v9.737h4.529V69.11c0-0.428,0.067-1.111,0.254-1.627c0.483-1.4,1.695-2.309,3.085-2.31 c1.191,0,3.19,0.607,3.19,4.684v9.438l4.529,0l0-10.259c-0.001-4.715-2.065-7.42-5.664-7.42c-1.244,0-2.267,0.263-3.22,0.827 C3.693,62.98,2.953,63.673,2.38,64.5c-0.093,0.135-0.247,0.215-0.411,0.215c-0.203,0-0.461-0.121-0.538-0.31 c-0.72-1.748-2.418-2.791-4.543-2.791c-2.2,0-3.921,0.894-5.115,2.657c-0.093,0.137-0.247,0.219-0.413,0.219l-0.112,0 c-0.257,0.002-0.472-0.192-0.499-0.447l-0.214-2.018H-13.273z"
                      transform="rotate(-45)"
                    />
                    <path
                      fill="#472b29"
                      d="M32.492,40.823c-0.082,0-0.165-0.02-0.242-0.062c-0.242-0.134-0.329-0.438-0.195-0.68	c0.567-1.023,1.226-2.003,1.958-2.915c0.173-0.214,0.488-0.249,0.703-0.076c0.215,0.173,0.249,0.488,0.076,0.703	c-0.696,0.866-1.323,1.799-1.862,2.772C32.839,40.73,32.668,40.823,32.492,40.823z"
                    />
                    <path
                      fill="#472b29"
                      d="M34.003,62.506c-0.152,0-0.302-0.069-0.4-0.2C30.919,58.735,29.5,54.48,29.5,50	c0-2.639,0.494-5.208,1.469-7.635c0.102-0.256,0.392-0.38,0.65-0.277c0.256,0.103,0.38,0.394,0.277,0.65	C30.97,45.046,30.5,47.49,30.5,50c0,4.262,1.35,8.309,3.903,11.706c0.166,0.221,0.121,0.534-0.1,0.7	C34.213,62.473,34.108,62.506,34.003,62.506z"
                    />
                    <path
                      fill="#472b29"
                      d="M50,70.5c-5.021,0-9.851-1.833-13.602-5.162c-0.207-0.184-0.225-0.5-0.042-0.706	c0.182-0.208,0.5-0.225,0.706-0.042C40.63,67.756,45.225,69.5,50,69.5c10.752,0,19.5-8.748,19.5-19.5S60.752,30.5,50,30.5	c-3.428,0-6.8,0.902-9.75,2.608c-0.241,0.139-0.546,0.057-0.683-0.182c-0.139-0.239-0.057-0.545,0.182-0.683	C42.852,30.449,46.396,29.5,50,29.5c11.304,0,20.5,9.196,20.5,20.5S61.304,70.5,50,70.5z"
                    />
                  </svg>
                </div>
                <div className="rating">
                  <h2>{game.metacritic}</h2>
                </div>
              </div>
              <div className="details_">
                {game.genres &&
                  game.genres.map((element, index) => (
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
                {game.platforms &&
                  game.platforms.map((element, index) => (
                    <div key={index}>
                      <label className="detail_gen">
                        {element.platform.name}
                      </label>
                    </div>
                  ))}
              </div>
              <div className="detail_date">
                <h3>Realeased Date: {game.released}</h3>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <div className="detail_container">
  
    {optionalRender()}
  
  </div>;
}

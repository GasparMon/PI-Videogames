import React from 'react';
import "../css/card.modules.css";
import { Link } from 'react-router-dom';

export default function Card(props) {

    

  const optionalRender = () => {
    if (props.id.length > 10) {
        return (
            <>
              <div className="card_img">
              <Link to={`/detail/${props.id}`} className="Link_detail">
                {console.log(props.id)}
                <img src={props.image} alt={props.name} />
                </Link>
              </div>
              <div className="card_title">
                <h1>{props.name}</h1>
              </div>
              <div className="card_genres">
                {props.genres.map((element, index) => (
                  <div key={index}>
                    <label className="card_gen">{element.name}</label>
                  </div>
                ))}
              </div>
              <div className="card_platform">
                {props.platforms.map((element, index) => {
                  if (
                    element === "PlayStation 4" ||
                    element === "PlayStation 5" ||
                    element === "PC" ||
                    element === "Xbox One" ||
                    element === "Nintendo Switch"
                  ) {
                    return (
                      <div className="platform_img" key={index}>
                        <img src={`./img/${element}.png`} alt={element} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </>
          );
    } else {
      const platforms = props.platforms;
      return (
        <>
        
          <div className="card_img">
          <Link to={`/detail/${props.id}`} className="Link_detail">
            <img src={props.image} alt={props.name} />
            </Link>
          </div>
          <div className="card_title">
            <h1>{props.name}</h1>
          </div>
          <div className="card_genres">
            {props.genres.map((element, index) => (
              <div key={index}>
                <label className="card_gen">{element.name}</label>
              </div>
            ))}
          </div>
          <div className="card_platform">
            {platforms.map((element, index) => {
              if (
                element.platform.name === "PlayStation 4" ||
                element.platform.name === "PlayStation 5" ||
                element.platform.name === "PC" ||
                element.platform.name === "Xbox One" ||
                element.platform.name === "Nintendo Switch"
              ) {
                return (
                  <div className="platform_img" key={index}>
                    <img src={`./img/${element.platform.name}.png`} alt={element.platform.name} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </>
      );
    }
  }

  return (
    <div className="card_container">
     
      {optionalRender()}
   
    </div>
  );
}

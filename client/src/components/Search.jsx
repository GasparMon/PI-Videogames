import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Search() {
  const { gameDatabyName } = useSelector((status) => status.userData);

  return (
    <div className="cards_container">
      <div className="cards_div">
        {gameDatabyName.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            image={element.background_image}
            genres={element.Genres}
            platforms={element.platforms}
          />
        ))}
      </div>
      <div className="pages_div">
        <Link to="/home" className="link">
          <span class="material-symbols-outlined">home</span>
        </Link>
      </div>
    </div>
  );
}

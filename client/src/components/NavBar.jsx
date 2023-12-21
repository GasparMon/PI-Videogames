import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.modules.css";
import { Link, useNavigate } from "react-router-dom";
import {
  cleanUser,
  filterGenre,
  filterOrigin,
  gamebyName,
  orderName,
  orderRating,
} from "../redux/actions";
import { useState } from "react";
import getGameByName from "../Handlers/getGamebyName";

export default function NavBar(props) {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchName, setSearchName] = useState({
    name: "",
  });

  const handleLogout = () => {
    dispatch(cleanUser());
  };
  const handleChange = (event) => {
    const { value } = event.target;

    setSearchName({
      ...searchName,
      name: value,
    });
  };

  const handleSearch = async (event) => {
    try {
      event.preventDefault();
      const { name } = searchName;
      const gameData = await getGameByName(name);

      if (gameData) {
        dispatch(gamebyName(gameData));

        setSearchName({
          ...searchName,
          name: "",
        });

        navigate("/search");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOrderName = (event) => {
    const { value } = event.target;

    dispatch(orderName(value));
  };

  const handleOrderRating = (event) => {
    const { value } = event.target;

    dispatch(orderRating(value));
  };

  const handleOrigin = (event) => {
    const { value } = event.target;

    dispatch(filterOrigin(value));
  };

  const handleGenre = (event) => {
    const { value } = event.target;

    dispatch(filterGenre(value));
  };

  const genres = [
    "Action",
    "Indie",
    "RPG",
    "Adventure",
    "Strategy",
    "Shooter",
    "Casual",
    "Puzzle",
    "Simulation",
    "Arcade",
    "Platformer",
    "Racing",
    "Sports",
    "Massively Multiplayer",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card",
  ];

  return (
    <div className="navbar_container">
      <div className="nav_container">
        <div className="nav_profile">
          <Link to="/home" id="Link">
            <button className={userData.avatar}></button>
          </Link>
          <div className="username">
            <h2>{userData.username}</h2>
          </div>
        </div>
        <div className="nav_logo">
          <h1>My Game Room App</h1>
        </div>
        <div className="nav_search">
          <input
            type="text"
            name="name"
            placeholder="Search videogame by Name"
            value={searchName.name}
            onChange={handleChange}
          />

          <span class="material-symbols-outlined" onClick={handleSearch}>
            pageview
          </span>
        </div>
        <div className="nav_buttons">
          <button className="filter_button">Filters</button>
          <Link to="/form" className="link">
            <button className="create_button">Create</button>
          </Link>
        </div>
        <div className="nav_logout">
          <Link to="/" className="link">
            <button className="nav_logout" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
      <div className="filter_container">
        <div className="button_container">
          <button
            className="button_filter"
            value="Ascendent"
            onClick={handleOrderName}
          >
            {" "}
            ↑ Order Name{" "}
          </button>

          <button
            className="button_filter"
            value="Descendent"
            onClick={handleOrderName}
          >
            Order Name ↓
          </button>
        </div>
        <div className="button_container">
          <button
            className="button_filter"
            value="Descendent"
            onClick={handleOrderRating}
          >
            ↑ Order Rating
          </button>

          <button
            className="button_filter"
            value="Ascendent"
            onClick={handleOrderRating}
          >
            Order Rating ↓
          </button>
        </div>

        <div className="button_container">
          <button className="button_filter" value="API" onClick={handleOrigin}>
            App Games
          </button>

          <button className="button_filter" value="DB" onClick={handleOrigin}>
            Local Games
          </button>
        </div>

        <select id="rating" name="rating" onChange={handleGenre}>
          <option disabled selected value="">
            Select Genre
          </option>
          <option value="All">All</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button className="button_all" value="All" onClick={handleOrigin}>
          All
        </button>
      </div>
    </div>
  );
}

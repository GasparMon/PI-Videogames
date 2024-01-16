import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.modules.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  cleanUser,
  filterGenre,
  filterOrigin,
  gamebyName,
  orderName,
  orderRating,
} from "../redux/actions";
import {useState } from "react";
import getGameByName from "../Handlers/getGamebyName";

export default function NavBar(props) {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchName, setSearchName] = useState({
    name: "",
  });

  const [filter, setFilter] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleLogout = () => {
    dispatch(cleanUser());
    navigate("/");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchName({
      ...searchName,
      name: value,
    });
  };

  const handleSearch = async (event) => {
    if (filter) {
      setFilter(false);
    }

    try {
      event.preventDefault();
      const { name } = searchName;
      const gameData = await getGameByName(name);

      if (gameData[0].id) {
        dispatch(gamebyName(gameData));

        setSearchName({
          ...searchName,
          name: "",
        });

        navigate("/search");

        return;
      }
    } catch (error) {
      return error.message;
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
    if(value === "All"){
      setSelectedGenre("All");
    }
    dispatch(filterOrigin(value));
  };

  const handleGenre = (event) => {
    const { value } = event.target;
    setSelectedGenre(value);
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
          <Link to="/options" id="Link">
            <button className={userData.avatar}></button>
          </Link>
          <h3>{userData.username}</h3>
        </div>
        <div className="nav_logo">
          <img src="../../img/logo_nav.png" alt="logo"></img>
          <h3>Game Room App</h3>
        </div>
        <div className="nav_search">
          <input
            type="text"
            name="name"
            placeholder="Search videogame by Name"
            value={searchName.name}
            onChange={handleChange}
          />

          <span
            className="material-symbols-outlined"
            onClick={handleSearch}
            role="button"
          >
            pageview
          </span>
        </div>
        <div className="nav_buttons">
          {location.pathname === "/home" && (
            <button className="filter_button" onClick={() => setFilter(!filter)}>
              Filters
            </button>
          )}
          {location.pathname !== "/home" && (
            <button className="filter_button" onClick={() => navigate("/home")}>
              Home
            </button>
          )}

          <button
            className="create_button"
            onClick={() => {
              setFilter(false);
              navigate("/form");
            }}
          >
            Create
          </button>
        </div>
        <div className="nav_logout">
          <button className="nav_logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {filter && (
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
            <button
              className="button_filter"
              value="API"
              onClick={handleOrigin}
            >
              App Games
            </button>

            <button className="button_filter" value="DB" onClick={handleOrigin}>
              Local Games
            </button>
          </div>

          <select
            id="rating"
            name="rating"
            onChange={handleGenre}
            value={selectedGenre}
          >
            <option disabled selected value="">
              Select Genre
            </option>
            <option key="All" value="All">
              All
            </option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <div className="button_container">
            <button className="button_all" value="All" onClick={handleOrigin}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

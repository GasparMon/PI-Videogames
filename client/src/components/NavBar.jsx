import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.modules.css";
import { Link } from "react-router-dom";
import { cleanUser, getUser } from "../redux/actions";

export default function NavBar(props) {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(cleanUser())
  };

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
          />
          <span class="material-symbols-outlined">pageview</span>
        </div>
        <div className="nav_buttons">
          <button className="filter_button">Filters</button>
          <Link to="/form" className="link">
          <button className="create_button">Create</button>
          </Link>
        </div>
        <div className="nav_logout">
          <Link to="/" className="link">
            <button className="nav_logout" onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      </div>

      <div className="filter_container"></div>
    </div>
  );
}

import "../css/navbar.modules.css"
import { Link } from "react-router-dom";

export default function NavBar (props){

    return(
        <div className="navbar_container">
            <div className="nav_container">


            <div className="nav_profile">
                <div className="pic_profile">

                </div>
                <div className="username">
                    <h2>Mexicano 86</h2>
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
                          <span class="material-symbols-outlined">
pageview
</span>

            </div>


            <div className="nav_buttons">
            
            <button className="filter_button">Filters</button>
            <button className="create_button">Create</button>
            </div>

            <div className="nav_logout">
            <Link to="/" className="link">
                <button className="nav_logout">Logout</button>
                </Link>
            </div>

            </div>


            <div className="filter_container"></div>

        </div>
    )
}
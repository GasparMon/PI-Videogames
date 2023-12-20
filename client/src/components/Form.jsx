import "../css/form.modules.css";
export default function Form() {
  return (
    <div className="forms_container">
      <div className="game_form">
        <div className="form_title">
          <h1>Create New Videogame</h1>
        </div>

        <div className="form_info">
          <div className="form_info_left">
            <div className="game_title">
              <div className="game_span">
                <span class="material-symbols-outlined">stylus_note</span>
              </div>
              <div className="game_title_input">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your videogame Title"
                />
              </div>
            </div>

            <div className="game_description">
              <div className="game_span">
                <span class="material-symbols-outlined">description</span>
              </div>
              <div className="game_title_input">
                <textarea
                  name="gameDescription"
                  rows="18"
                  cols="60"
                  placeholder="Enter your videogame description"
                ></textarea>
              </div>
            </div>

            <div className="game_data">
              <div className="game_date">
                <div className="game_span">
                  <span class="material-symbols-outlined">calendar_month</span>
                </div>
                <div className="date_form">
                  <label for="Released Date">Released Date</label>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                  />
                </div>
              </div>

              <div className="game_rating">
                <div className="game_span">
                  <span class="material-symbols-outlined">reviews</span>
                </div>
                <div className="rating_form">
                  <label for="Rating">Rating</label>
                  <select id="Rating" name="Rating">
                    <option value="1">Rating: 1</option>
                    <option value="1.5">Rating: 1.5</option>
                    <option value="2">Rating: 2</option>
                    <option value="2.5">Rating: 2.5</option>
                    <option value="3">Rating: 3</option>
                    <option value="3.5">Rating: 3.5</option>
                    <option value="4">Rating: 4</option>
                    <option value="4.5">Rating: 4.5</option>
                    <option value="5.5">Rating: 5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="form_info_right">

            <div className="form_genres">
            <div className="game_span_right">
                <span class="material-symbols-outlined">Gamepad</span>
              </div>
              <div className="check_genres">
                <label>Videogame Genre</label>
                <input type="checkbox" id="action" value="Action" /> <label for="action">Action</label>
<input type="checkbox" id="indie" value="Indie" /> <label for="indie">Indie</label>
<input type="checkbox" id="shooter" value="Shooter" /> <label for="shooter">Shooter</label>
<input type="checkbox" id="casual" value="Casual" /> <label for="casual">Casual</label>
<input type="checkbox" id="arcade" value="Arcade" /> <label for="arcade">Arcade</label>
<input type="checkbox" id="massively-multiplayer" value="Massively Multiplayer" /> <label for="massively-multiplayer">Massively Multiplayer</label>
<input type="checkbox" id="fighting" value="Fighting" /> <label for="fighting">Fighting</label>
<input type="checkbox" id="card" value="Card" /> <label for="card">Card</label>
<input type="checkbox" id="adventure" value="Adventure" /> <label for="adventure">Adventure</label>
<input type="checkbox" id="simulation" value="Simulation" /> <label for="simulation">Simulation</label>
<input type="checkbox" id="sports" value="Sports" /> <label for="sports">Sports</label>
<input type="checkbox" id="educational" value="Educational" /> <label for="educational">Educational</label>
<input type="checkbox" id="strategy" value="Strategy" /> <label for="strategy">Strategy</label>
<input type="checkbox" id="platformer" value="Platformer" /> <label for="platformer">Platformer</label>
<input type="checkbox" id="board-games" value="Board Games" /> <label for="board-games">Board Games</label>
<input type="checkbox" id="rpg" value="RPG" /> <label for="rpg">RPG</label>
<input type="checkbox" id="puzzle" value="Puzzle" /> <label for="puzzle">Puzzle</label>
<input type="checkbox" id="racing" value="Racing" /> <label for="racing">Racing</label>
<input type="checkbox" id="family" value="Family" /> <label for="family">Family</label>

              </div>
            </div>
            
          </div>
        </div>

        <div className="form_buttons">
          <button className="create_buttons">Create Videogame</button>
          <button className="restart_buttons">Restart</button>
        </div>
      </div>
    </div>
  );
}

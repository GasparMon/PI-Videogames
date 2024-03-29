import { useState } from "react";
import "../css/form.modules.css";
import createGame from "../Handlers/createGame";
import { getVideogames } from "../redux/actions";
import { useDispatch } from "react-redux";
import getGames from "../Handlers/getGames";
import { useNavigate } from "react-router-dom";
import formValidation from "../utils/formValidations";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const videogameData = async () => {
    try {
      const videogamesData = await getGames();
      dispatch(getVideogames(videogamesData));
    } catch (error) {
      alert(error.message);
    }
  };

  const [newVideogame, SetNewVideogame] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    genres: [],
    released: new Date(),
    rating: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    nameValidation: false,
    descriptionValidation: false,
    platformsValidation: false,
    genresValidation: false,
    ratingValidation: false,
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "rating") {
      value = Number(value);
    }

    SetNewVideogame({
      ...newVideogame,
      [name]: value,
    });

    setErrors(
      formValidation({
        ...newVideogame,
        [name]: value,
      })
    );
  };

  const handleCheckForm = (event) => {
    let { name, value } = event.target;

    if (name === "genres") {
      value = Number(value);
    }

    if (newVideogame[name].includes(value)) {
      const filtered = newVideogame[name].filter(
        (element) => element !== value
      );

      SetNewVideogame({
        ...newVideogame,
        [name]: filtered,
      });

      setErrors(
        formValidation({
          ...newVideogame,
          [name]: filtered,
        })
      );
    } else {
      SetNewVideogame({
        ...newVideogame,
        [name]: [...newVideogame[name], value],
      });

      setErrors(
        formValidation({
          ...newVideogame,
          [name]: value,
        })
      );
    }
  };

  const handleFile = (event) => {
    const { files } = event.target;

    if (files.length > 0) {
      const fileName = files[0].name;

      const finalName = fileName.replace(/^C:\\fakepath\\/, "");

      SetNewVideogame({
        ...newVideogame,
        background_image: finalName,
      });
    }
  };

  const isButtonDisabled =
    newVideogame.background_image === "" ||
    errors.nameValidation === false ||
    errors.descriptionValidation === false ||
    errors.platformsValidation === false ||
    errors.genresValidation === false ||
    errors.ratingValidation === false;

  const handleRestart = () => {
    SetNewVideogame({
      ...newVideogame,
      name: "",
      description: "",
      platforms: [],
      background_image: "",
      genres: [],
      released: new Date(),
      rating: null,
    });
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    const isGameCreated = await createGame(newVideogame);

    if (isGameCreated) {
      await videogameData();
      navigate("/home");
    }
  };

  return (
    <div className="forms_container">
      <div className="game_form">
        <div className="form_title">
          <h2>Create New Videogame</h2>
        </div>

        <div className="form_info">
          <div className="form_info_left">
            <label className="rigth_form_label" for="imageUpload">
              {" "}
              Videogame Title
            </label>
            <div className="game_title">
              <div className="game_span">
                <span class="material-symbols-outlined">stylus_note</span>
              </div>
              <div className="game_title_input">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={newVideogame.name}
                  placeholder="Enter your videogame Title"
                />
              </div>
            </div>
            <div className="submit_error">
              <p>
                {!errors.nameValidation
                  ? "You must enter a title between 8 and 25 characters."
                  : errors.name}
              </p>
            </div>
            <label className="rigth_form_label" for="imageUpload">
              {" "}
              Videogame Description
            </label>
            <div className="game_description">
              <div className="game_span">
                <span class="material-symbols-outlined">description</span>
              </div>
              <div className="game_text_description">
                <textarea
                  rows="18"
                  cols="60"
                  placeholder="Enter your videogame description"
                  name="description"
                  onChange={handleChange}
                  value={newVideogame.description}
                  maxLength={250}
                ></textarea>
              </div>
              <div className="character-counter">
                {newVideogame.description.length}/{250}
              </div>
            </div>
            <div className="submit_error">
              <p>
                {!errors.descriptionValidation
                  ? "You must enter a description between 15 and 250 characters."
                  : errors.description}
              </p>
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
                    name="released"
                    onChange={handleChange}
                    value={newVideogame.released}
                  />
                </div>
              </div>

              <div className="game_rating">
                <div className="game_span">
                  <span class="material-symbols-outlined">reviews</span>
                </div>
                <div className="rating_form">
                  <label for="Rating">Rating</label>
                  <select
                    id="rating"
                    name="rating"
                    value={newVideogame.rating}
                    onChange={handleChange}
                  >
                    <option disabled selected value="">
                      Select Rating
                    </option>
                    <option value="1">Rating: 1</option>
                    <option value="1.5">Rating: 1.5</option>
                    <option value="2">Rating: 2</option>
                    <option value="2.5">Rating: 2.5</option>
                    <option value="3">Rating: 3</option>
                    <option value="3.5">Rating: 3.5</option>
                    <option value="4">Rating: 4</option>
                    <option value="4.5">Rating: 4.5</option>
                    <option value="5">Rating: 5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="form_info_right">
            <label className="rigth_form_label" for="imageUpload">
              Videogame Genres
            </label>
            <div className="form_genres">
              <div className="game_span_right">
                <span class="material-symbols-outlined">Gamepad</span>
              </div>
              <div className="check_genres">
                {[
                  "Action",
                  "RPG",
                  "Adventure",
                  "Strategy",
                  "Indie",
                  "Casual",
                  "Simulation",
                  "Puzzle",
                  "Shooter",
                  "Arcade",
                  "Massively Multiplayer",
                  "Racing",
                  "Sports",
                  "Platformer",
                  "Fighting",
                  "Board Games",
                  "Family",
                  "Educational",
                  "Card",
                ].map((genre, index) => (
                  <div className="genres_div" key={genre}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="genres"
                        name="genres"
                        value={index + 1}
                        onChange={handleCheckForm}
                      />
                      {genre}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <label className="rigth_form_label" for="imageUpload">
              Videogame Platforms
            </label>
            <div className="form_platforms">
              <div className="game_span_right">
                <span class="material-symbols-outlined">stadia_controller</span>
              </div>
              <div className="check_platform">
                {[
                  "PlayStation 5",
                  "PlayStation 4",
                  "Xbox Series X/S",
                  "Xbox One",
                  "Nintendo Switch",
                  "PC",
                ].map((platform) => (
                  <div className="platforms_div" key={platform}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="platform"
                        name="platforms"
                        value={platform}
                        onChange={handleCheckForm}
                      />
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="vid_img">
              <label className="rigth_form_label" for="imageUpload">
                Videogame image
              </label>
              <form>
                <input
                  className="input_img"
                  type="file"
                  name="background_image"
                  accept="image/*"
                  onChange={handleFile}
                />
              </form>
            </div>
          </div>
        </div>

        <div className="form_buttons">
          <button className="restart_buttons" onClick={handleRestart}>
            Restart
          </button>
          <button
            className="create_buttons"
            onClick={handleCreate}
            disabled={isButtonDisabled}
          >
            Create Videogame
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "../css/options.modules.css"
import {useSelector } from "react-redux";

export default function Options(){
    const userData = useSelector((state) => state.userData);
    const [userSettings, setUserSettings] = useState({
        email: "",
        currentPassword: "",
        newPassword: "",
        avatar:"",
    })
    
    useEffect(() => {
        setUserSettings({
            ...userSettings,
            email: userData.email,
        });
    }, [userData.email]);

    const handleFill = (event) => {
        const { name, value } = event.target;
    
        setUserSettings({
            ...userSettings,
          [name]: value,
        });
      };

return(
    <div className="options_container">
    <div className="options_section">
    <div className="options_title">
        <h2>Account Settings</h2>
    </div>
    <div className="settings_container">
    <div className="user_settings">
        <div className="user_settings_title">
            <h3>User Settings</h3>
        </div>
        <div className="user_settings_container">
            <div className="user_settins_name">
                <label>Current User Name :</label>
                <h3>{userData.username}</h3>
            </div>
            <div className="user_settins_mail">
                <label>Email :</label>
                <input
                    type="email"
                    name="email"
                    placeholder="You must enter your New Password"
                    value={userSettings.email}
                    onChange={handleFill}
                ></input>
            </div>
            <div className="user_settins_password">
                <label>Current Password :</label>
                <input
                    type="password"
                    name="currentPassword"
                    placeholder="You must enter your Password"
                    value={userSettings.currentPassword}
                    onChange={handleFill}
                ></input>
                 <label>New Password:</label>
                <input
                    type="password"
                    name="newPassword"
                    placeholder="You must enter your New Password"
                    value={userSettings.newPassword}
                    onChange={handleFill}
                ></input>
            </div>

            <div className="user_settins_avatar">
            <label>New Avatar:</label>
              <div className="avatar_container">
                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onChange={handleFill}
                      value="a1"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_01.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onChange={handleFill}
                      value="a2"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_02.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onChange={handleFill}
                      value="a3"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_03.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onChange={handleFill}
                      value="a4"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_04.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onChange={handleFill}
                      value="a5"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_05.png" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="user_setting_save">
                <button>Save Settings</button>
            </div>


        </div>
        
    </div>

    <div className="game_settings">
    <div className="game_settings_title">
            <h3>Videogame Settings</h3>
        </div>
        <div className="game_settings_container">
            
        </div>
    </div>
    </div>
    </div>
    </div>
)
}
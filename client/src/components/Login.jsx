import "../css/login.modules.css";

export default function Login() {
  return (
    <div className="main_container">
      <div className="login_container">
        <div className="main_title_container">
          <div>
            <h1>My Game Room App</h1>
          </div>
        </div>
        <div className="form_container">
          <div className="login">
            <div className="login_title">
              <h1>Sign In</h1>
              <span class="material-symbols-outlined">login</span>
            </div>
            <div className="input_mail">
              <h1>Email </h1>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="input_password">
              <h1>Password </h1>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <div className="login_buttons">
              <button className="log_buttons">Login</button>
              <button className="sign_buttons">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container"></div>
    </div>
  );
}

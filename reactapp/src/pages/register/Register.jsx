import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">iGossip</h3>
          <span className="loginDesc">
          Be informed and get the latest tea!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Repeat Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import './style.css';

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Aki Temmui Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Aki Temmui Social.
          </span>
        </div>

        <div className="loginRight">
          <form className="loginBox">
            <input type="text" className="loginInput" placeholder="Nickname" />
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />
            <input
              type="text"
              className="loginInput"
              placeholder="Password again"
            />

            <button type="submit" className="loginButton">
              Sign Up
            </button>

            <button type="button" className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

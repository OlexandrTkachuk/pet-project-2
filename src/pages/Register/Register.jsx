import { NavLink, Link } from 'react-router-dom';
import './style.css';

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Link to="/" className="logoLink">
            <h3 className="loginLogo">Aki Temmui Social</h3>
          </Link>
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

            <NavLink to="/login" className="registerButtonContainer">
              <button type="button" className="loginRegisterButton">
                Log into Account
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

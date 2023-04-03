import { NavLink, Link } from 'react-router-dom';
import './style.css';

const Login = () => {
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
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />

            <button type="submit" className="loginButton">
              Log in
            </button>

            <a href="/" className="loginForgot">
              Forgot Password?
            </a>

            <NavLink to="/registration" className="loginButtonContainer">
              <button type="button" className="loginRegisterButton">
                Create a new account
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

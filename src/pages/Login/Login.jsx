import './style.css';

const Login = () => {
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
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />

            <button type="submit" className="loginButton">
              Log in
            </button>

            <a href="/" className="loginForgot">
              Forgot Password?
            </a>

            <button type="button" className="loginRegisterButton">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import image from '../../images/login-icon.jpg';
import './login2.css';

const Login = props => {
  return (
    <div className="wrapper">
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}
        <h2 className="title"> RelivAid Hospital </h2>

        {/* <!-- Icon --> */}
        <div className="first"><br />
          <img
            src={image}
            id="icon"
            alt="User Icon"
            style={{ borderRadius: '50%', margin: '20px 0px;' }}
          /> <br /><br />
        </div>

        {/* <!-- Login Form --> */}
        <form onSubmit={props.handleLogin}>
          <input
            type="text"
            id="login"
            className="second username"
            placeholder="Enter username here"
            onChange={props.handleUsernameChange}
            value={props.username}
          />
          <input
            type="password"
            id="password"
            className="third password"
            placeholder="Enter password here"
            onChange={props.handlePasswordChange}
            value={props.password}
          />
          <input type="submit" className="fourth customBtn" value="Login" />
          <label style={{ color: 'red' }}>{props.message}</label>
        </form>
        <div id="form-footer">
          <p>Our Hospital's Management System</p>
        </div>
        {/* <!-- Remind Passowrd --> */}
        {/* <div id="formFooter">
          <a className="underlineHover forgot-pswd" href="#">
            Forgot Password?
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Login;

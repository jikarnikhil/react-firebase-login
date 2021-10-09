import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import firebase from './Config'
import { googleProvider, githubProvider } from "./AuthMethod";
import socialMediaAuth from "./Auth";
import { auth } from "./Config";

function SignUp() {
  const [name , setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e, provider) => {
    e.preventDefault();
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  const signup = (e) => {
      console.log(email, password)
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
      });
      setEmail('');
      setPassword('');
      setName('');
  };

  return (
    <div>
      <center>
        <form className="sign_form">
          <p className="sign_head">Sign Up and Start</p>

          <div>
            <div class="input_container">
              <i class="fa fa-user icon"></i>
              <input 
              className="input_name" 
              type="text" 
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} 
              value={name}/>
            </div>
            <br />
            <br />

            <div class="input_container">
              <i class="fa fa-envelope-o"></i>
              <input
                className="input_email"
                type="text"
                id="name"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <br />
            <br />

            <div class="input_container">
              <i class="fa fa-lock"></i>
              <input
                className="input_pass"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <br/><br/> */}

            {/* <p className="pass_instruct">Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9.</p> */}

            {/* <div class="input_container">
                <i class="fa fa-lock"></i>
                <input className="input_pass" type="text" placeholder="Confirm Password"/>
                </div> */}
          </div>
          <br />
          <br />

          <br />
          <button
            type="submit"
            className="signup_btn"
            onClick={(e) => signup(e, email, password)}
          >
            SignUp
          </button>
          <p>OR <br/><small>Sign In With</small></p>

          <div className="login_icons">
            <img src="https://img.icons8.com/color/50/000000/facebook-circled--v1.png" />

            {/* <img src="https://img.icons8.com/color/50/000000/google-logo.png"/> */}
            <button onClick={(e) => handleClick(e, googleProvider)}>
              <img src="https://img.icons8.com/color/50/000000/google-logo.png" />
            </button>

            <button onClick={(e) => handleClick(e, githubProvider)}>
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
            </button>
          </div>

          <p>Already have an account?<Link to="/Login">Login</Link></p>
        </form>
      </center>
    </div>
  );
}

export default SignUp;

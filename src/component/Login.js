import React,{useState } from 'react'
import './style.css'
import firebase from './Config'
import { facebookProvider, googleProvider, githubProvider } from './AuthMethod';
import socialMediaAuth from './Auth';
import {auth} from './Config'
import { Link } from "react-router-dom";


const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleClick=async(e,provider)=>{
        e.preventDefault();
        const res = await socialMediaAuth(provider);
        console.log(res);
    }

    
    const signIn=(e)=>{
           e.preventDefault(); 
           auth.signInWithEmailAndPassword(email, password)
           .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            alert(error.message)
          });
            setEmail('');
            setPassword('');
    }


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
    };

    

    return (
        <div><center>

            <form className="sign_form">
            <p className="login_head">Welcome</p>

            <div class="input_container">
            <i className="fa fa-user icon"></i>
            <input
            name="email"
            type="email"
            onChange={(e)=>setEmail(e.target.value)} 
            className="input_email" 
            placeholder="Enter Email"
            value={email}
            />
            </div>
            <br/><br/>

            <div class="input_container">
            <i className="fa fa-lock"></i>
            <input 
            name="password"
            type="password"
            className="input_pass" 
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}/>
            </div>
            <br/><br/>


            <br />
    
            <br/><br/>
            <button 
            type="submit" 
            className="signup_btn"
            onClick={(e)=>signIn(e,email, password)}
            >Login</button>
            <small>OR</small>

            <div className="login_icons">
            {/* <button type="submit" className="fb_btn">Login With Facebook</button><br/><br/> */}
            <button onClick={(e)=>handleClick(e,facebookProvider)}>
                <div><img src="https://img.icons8.com/color/50/000000/facebook-circled--v1.png"/></div>
            </button>
            {/* <button type="submit" className="goog_btn">Login With Google+</button> */}

            <button onClick={(e)=>handleClick(e,googleProvider)}>
            <img src="https://img.icons8.com/color/50/000000/google-logo.png"/>
            </button>
          
            {/* <button onClick={(e)=>handleClick(e,googleProvider)}>
            <img src="https://img.icons8.com/color/50/000000/microsoft.png"/>
            </button> */}

            <button onClick={(e)=>handleClick(e,githubProvider)}>
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
            </button>
            
            </div>

            <small>Dont have an account?
                {/* <Link to="/Signup">Sign UP</Link>  */}
            </small>

            <button
            type="submit"
            className="signup_btn"
            onClick={(e) => signup(e, email, password)}
          >SignUp
          </button>

            </form>

        </center></div>
    )
}

export default Login

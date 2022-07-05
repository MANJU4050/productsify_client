import React from 'react'
import { useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useGlobal from '../hooks/useGlobal';
import axios from '../api/axios'

import './styles/css/main.css'
import './styles/css/util.css'
import './styles/fonts/font-awesome-4.7.0/css/font-awesome.css'

const LOGIN_URL="/auth/login"


const Login = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard'
  
    const {setAccessToken} = useGlobal();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
  
    const getEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const getPassword = (event) => {
      setPassword(event.target.value);
    };
  
  
  
    const loginHandler = async (event) => {
      event.preventDefault();
  
      const loginData = {
        email: email,
        password: password
      }
  
      try {
        const response = await axios.post(LOGIN_URL, loginData,{
          headers: { 'Content-Type': 'application/json'},
          
        }
        );
        if (response.status === 200) {
          const accessToken = response.data;
          setAccessToken({token:accessToken});
          
          alert("login success");
      
        
          navigate(from,{replace: true});
  
        }
       
      }
  
      catch (error) {
        if(!error.response) {
          alert('no server response')
        }else if(error.response.status===400){
          alert(error.response.data)
        }else if(error.response.status===401){
          alert(error.response.data)
        }else{
          alert('login failed')
        }
  
        console.log(error);
  
      }
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                   
    
                    <form onSubmit={loginHandler} className="login100-form validate-form">
                        <span className="login100-form-title">
                            Login
                        </span>
    
                        
    
                        
    
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="email" onChange={getEmail}  placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
    
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="password" onChange={getPassword}  placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
    
                       
                        
    
                        
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
    
                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Not registered?
                            </span>
                            <Link to='/register' className="txt2" >
                                Register
                            </Link>
                        </div>
    
                        
                    </form>
                </div>
            </div>
        </div>
    )
  
  
  }
  
  export default Login



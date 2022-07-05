import React from "react";
import { useState } from "react";
import axios from "../api/axios";
import {useNavigate,Link} from 'react-router-dom'

import './styles/css/main.css'
import './styles/css/util.css'
import './styles/fonts/font-awesome-4.7.0/css/font-awesome.css'





const Registration = () => {

  let navigate=useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");

 

  const getName = (event) => {
    setName(event.target.value);
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const getPlace = (event) => {
    setPlace(event.target.value);
  };

  const submitHandler = async (event) => {
  event.preventDefault();

  const fetchData={
   username:name,
   email:email,
   password:password,
   place:place 
  }
 
 try{
 const response=await axios.post("auth/registration",fetchData)  

 if(response.status===201){
 alert(response.data);
 navigate("/");
}
else if(response.status===200){
  alert(response.data)
} 
 } 
catch(error){

  console.log(error);

}

}


return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
			

				<form onSubmit={submitHandler} className="login100-form validate-form">
					<span className="login100-form-title">
						Register
					</span>

					

					<div className="wrap-input100 validate-input" >
						<input className="input100" type="text" onChange={getName}  placeholder="Name" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>

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
					

					<div className="wrap-input100 validate-input">
						<input className="input100" type="text" onChange={getPlace}  placeholder="Location" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-location-arrow" aria-hidden="true"></i>
						</span>
					</div>
					

					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Register
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Already registered?
						</span>
						<Link to='/' className="txt2" >
							Login
						</Link>
					</div>

					
				</form>
			</div>
		</div>
	</div>
)

}

export default Registration;

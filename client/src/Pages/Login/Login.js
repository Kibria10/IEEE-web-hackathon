import React, { useState } from "react";
import "./login.css";
import Axios from "axios";

import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const login = () => {
    Axios.post("http://localhost:3000/user/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("email", response.data.email);
        history.push("/");
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <h1 style={{ color: "red" }}>{errorMessage} </h1>
      </div>
    </div>
  );
}

export default Login;
























// import React, { useState } from 'react';
// import axios from 'axios';
// import { setUserSession } from './Utils/Common';
// import './login.css'
// import {ReactComponent as Logo} from '../../assets/earth.svg'
// // import {Switch,Route} from 'react-router-dom'
// // import NewHome from './Pages/NewHome/NewHome';


// function Login(props) {
//   const [loading, setLoading] = useState(false);
//   const email = useFormInput('');
//   const password = useFormInput('');
//   const [error, setError] = useState(null);

//   // handle button click of login form
//   let handleSubmit = (event) => {
//     setError(null);
//     setLoading(true);
//     axios.post('http://localhost:3000/api/users/login', { email: email.value, password: password.value }).then(response => {
//       setLoading(false);
//       setUserSession(response.data.token, response.data.user);
//       props.history.push('/dashboard');
//       event.preventDefault()
//       this.props.isLogin(true)

//     }).catch(error => {
//       setLoading(false);
//       // if (error.response. === 401) setError(error.response.data.message);
//       setError("Something went wrong. Please try again later.");
//     });
//   }




//   return (
//     <div className="login-box">
//       <div class="form">
//         <div className='div-login-logo'>
//             <Logo/>
//          </div>
        
//         <input type="text" {...email} placeholder= "Email" autoComplete="new-password" />
      
      
//         <input type="text" {...password} placeholder= "Password" autoComplete="new-password" />
      
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleSubmit} disabled={loading} /><br />
//     </div>
//     </div>
//   );
// }

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }

// export default Login;
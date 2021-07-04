import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import './login.css'
import {ReactComponent as Logo} from '../../assets/earth.svg'
// import {Switch,Route} from 'react-router-dom'
// import NewHome from './Pages/NewHome/NewHome';


function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  let handleSubmit = (event) => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:3000/api/users/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
      event.preventDefault()
      this.props.isLogin(true)

    }).catch(error => {
      setLoading(false);
      // if (error.response. === 401) setError(error.response.data.message);
      setError("Something went wrong. Please try again later.");
    });
  }




  return (
    <div className="login-box">
      <div class="form">
        <div className='div-login-logo'>
            <Logo/>
         </div>
        
        <input type="text" {...email} placeholder= "Email" autoComplete="new-password" />
      
      
        <input type="text" {...password} placeholder= "Password" autoComplete="new-password" />
      
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleSubmit} disabled={loading} /><br />
    </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
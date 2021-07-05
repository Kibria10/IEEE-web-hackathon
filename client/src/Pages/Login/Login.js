import React from 'react';
import {ReactComponent as Logo} from '../../assets/earth.svg'
import './login.css';
import { BrowserRouter, Route }  from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { LinkContainer } from 'react-router-bootstrap';

class Login extends React.Component{
    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='form'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
                <center class="message">  
                    <BrowserRouter>
                        <LinkContainer to="/signup">
                            <a href className="nav-btn" variant="outline-primary"> Sign Up </a>
                        </LinkContainer>
                                <Route path="/signup" exact component={RegisterForm} />
                      </BrowserRouter>
                 </center>
            </div>

        )
    }
}

export default Login;



// import React,  { useState, useHistory} from 'react';
// import Axios from 'axios'
// import RegisterForm from './RegisterForm';
// import { LinkContainer } from 'react-router-bootstrap';
// import { BrowserRouter, Route }  from 'react-router-dom';
// import './login.css';
// import {ReactComponent as Logo} from '../../assets/earth.svg'

// const Login= () => {
// const[email, setEmail] = useState("");
// const[password, setPassword] = useState("");
// const[loginStaus, setLoginStatus]= useState();

// //post method 
// const submitReview = () => {
//   Axios.post("http://localhost:3000/api/users/login", 
//     {
//   email: email,
//   password: password}).then(res=>{
//     console.log(res)
//     if (!res.data.auth){
//       setLoginStatus(false);
//     }
//     else{
//       setLoginStatus(true);
//     }
//     localStorage.setItem('token', res.token);
//   })
//   .catch(err=>{
//     console.log(err)
//   })


//     return(
//      <div class="login-box">


//         <div class="form">
//             <div className='div-login-logo'>
//              <Logo/>
//          </div>
//       <input type = 'email' placeholder= "Email" autoComplete= "off" name = "email"
//       onChange={(e)=>{
//         setEmail(e.target.value);
//       }}
//       />

//       <input type = 'password' placeholder= "Password" autoComplete= "off" name = "password"
//       onChange={(e)=>{
//         setPassword(e.target.value);
//       }}
//       />
//     <button onClick={submitReview}>Sign In</button>

//     <center class="message">  
//     <BrowserRouter>
//       <LinkContainer to="/signup">
//        <a href className="nav-btn" variant="outline-primary"> Sign Up </a>
//       </LinkContainer>
//       <Route path="/signup" exact component={RegisterForm} />
//     </BrowserRouter>
//     </center>
    
//     </div>
//     {loginStaus && <button>Authorized</button>}


//     </div>    
//     )
// }
// }
// export default Login
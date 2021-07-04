import React,  { useState} from 'react';
import Axios from 'axios'



const RegisterForm = () => {

const [first_name, setFirst_name]= useState("");
const [last_name, setLast_name]= useState("");
const [gender, setGender]= useState("");
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[number, setNumber] = useState("");


//post method 
const submitReview = () => {
  Axios.post("http://localhost:3000/api/users", 
  {first_name: first_name,
  last_name: last_name,
  gender:gender,
  email:email,
  password:password,
  number:number}).then(()=>{
    alert("successful inesrt");
  });
};


    return(
    <div class="login-box">


    <center><h3>Registration Form</h3></center>
      <div class="form">
      <input type = "text" placeholder= "First Name" autoComplete= "off" name = "first_name"
        onChange={(e)=>{
        setFirst_name(e.target.value);
      }}/> 
      
      <input type = "text" placeholder= "Last Name" autoComplete= "off" name = "last_name"
      onChange={(e)=>{
        setLast_name(e.target.value);
      }}
      />

      <input type = "text" placeholder= "Gender" autoComplete= "off" name = "gender"
      onChange={(e)=>{
        setGender(e.target.value);
      }}
      />

    
        <input type = "int" placeholder= "Contact No." autoComplete= "off" name = "number"
      onChange={(e)=>{
        setNumber(e.target.value);
      }}
      />


      <input type = "text" placeholder= "Email" autoComplete= "off" name = "email"
      onChange={(e)=>{
        setEmail(e.target.value);
      }}
      />

      <input type = "text" placeholder= "Password" autoComplete= "off" name = "password"
      onChange={(e)=>{
        setPassword(e.target.value);
      }}
      />


      

      <button onClick={submitReview}>Sign Up</button>

    {/* <p class="message">Already registered? <a href="#">Sign Up</a></p> */}

      </div>
    </div>
    )
}
export default RegisterForm
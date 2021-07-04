import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const CreatePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    
   const postDetails = () => {
    axios.post("http://localhost:3000/api/users/feed", 
    {title: title,
      image: image
    }).then(()=>{
      alert("successful inesrt");
    });
  };
  


   return(
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >    
       
         <span>What's on your mind!</span>
           <input 
           type="text"
            placeholder="Say Something!"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Uplaod Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>postDetails()}
            >
                Submit Post
            </button>

       </div>
   )
}


export default CreatePost
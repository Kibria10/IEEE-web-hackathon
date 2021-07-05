import React, { useState, useEffect } from 'react';
import './feed.css';
// import Axios from 'axios';




const Feed = ({name,img,title,time}) =>{

    
const [comment, setComment]= useState("");
const[commentList, setCommentList] = useState([]);



//post method 
// const submitComment = () => {
//     Axios.post("http://localhost:3000/api/users/comment", 
//     {comment: comment}).then(()=>{
//       alert("successful inesrt");
//     });
//   };
  
  
  
//   //get method
//   useEffect(()=>{
//     Axios.get("http://localhost:3000/api/users/comment").then((response)=>{
//       // console.log(response.data);
//       setCommentList(response.data)
//     });
//   });
  



    return(
        <div className='div-feed'>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{name}</div>
            <div style={{width:'100%',height:'85%'}}>
                <img src={img} alt=''/>
            </div>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{title}</div>
            <div style={{padding:'5px 5px',fontWeight:'italic'}}>{time}</div>
            <input type = "text"
             name = "comment"
             placeholder = "Comment Something!"
             onChange={(e)=>{
             setComment(e.target.value);
            }}/> 
            {/* <button onClick={submitComment}>Post</button>

        {commentList.map((val)=> {
        return(
          <div className ="card">
           <p> Comment: {val.comment} </p>
          </div>
        );
      }

      )} */}



        </div>
    )
}


export default Feed;
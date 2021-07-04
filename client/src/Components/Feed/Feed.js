import React from 'react';
import './feed.css';
const Feed = ({name,img,title,time}) =>{
    return(
        <div className='div-feed'>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{name}</div>
            <div style={{width:'100%',height:'85%'}}>
                <img src={img} alt=''/>
            </div>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{title}</div>
            <div style={{padding:'5px 5px',fontWeight:'italic'}}>{time}</div>
            <input type="text" placeholder= "Comment Something!" />

            
        </div>
    )
}

export default Feed;
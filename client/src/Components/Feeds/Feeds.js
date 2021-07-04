import React from 'react';
import Feed from '../Feed/Feed';

class Feeds extends React.Component{
    state={
        feeds:null
    }

    async componentDidMount(){
        const resp = await fetch('http://localhost:3000/api/users/feed')
        const feeds = await resp.json()
        this.setState({feeds})
    }

    render(){
        const {feeds} = this.state
        return(
            <div style={{width:'60%',display:'flex',flexDirection:'column',padding:'0 10px'}}>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
                <center><p>End of The Feed</p></center>
            </div>
        )
    }
}

export default Feeds;








// https://picsum.photos/v2/list
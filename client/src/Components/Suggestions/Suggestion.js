import React from 'react';
import User from '../User/User';

class Suggestions extends React.Component{
    state={
        users:null
    }

    async componentDidMount(){
        const resp = await fetch('http://localhost:3000/api/users/')
        const users = await resp.json()
        this.setState({users})
    }
    render(){
        const {users} = this.state
        return(
            <div style={{width:'40%',alignSelf:'flex-start',display:'flex',flexDirection:'column',marginLeft:'10px'}}>
                <div style={{fontWeight:'bold',color:'silver',marginBottom:'10px'}}>Suggestions</div>
                {
                    users &&
                    users.map(({...user}) => <User key={user.email} {...user}/>)
                }
            </div>
        )
    }
}

export default Suggestions;











// https://jsonplaceholder.typicode.com/users
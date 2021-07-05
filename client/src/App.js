import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/404Page/404Page';
import NewHome from './Pages/NewHome/NewHome';
import CreatePost from './Components/CreatePost/CreatePost';
class App extends React.Component{
  state={
    isLog:false
  }

  handleLogin = (isLog) => this.setState({isLog})
  render(){
    const {isLog} = this.state;
    return(
      <div>
        <Switch>
          {
            !isLog ?
            <Route exact path='/' render={() => <Login isLogin={this.handleLogin}/>}/>
              :
            <Route path='/' render={() =><Home handleLogged={this.handleLogin}/> }/>
          }

          <Route path='*' component={NoMatch}/>
          {/* <Route exact path='/' component={CreatePost}/> */}
          {/* <Route exact path='/' component={Home}/> */}



        </Switch>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import Login from './pages/Login';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import Home from './pages/Home'

class App extends Component {
  constructor(props:any){
    super(props)
    this.state={ count:0   };
  }
  render(){
  return(
    <>
    <BrowserRouter>
      <Switch>
      <Route exact component={Login} path="/" />
        <Route  component={Home} path="/home" />
      {/* <Login /> */}
      
      </Switch>
      </BrowserRouter>
    </>
  )
}
}
export default App;

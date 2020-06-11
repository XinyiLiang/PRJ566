import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Events} from './Pages/Events';
import {Teams} from './Pages/Teams';
import { Play } from './Pages/Play';
import {NoMatch} from './Pages/NoMatch';
import { NavBar } from './components/NavBar';
import {Footer} from './components/Footer';
import './App.css';
import Login from './components/Login';




class  App extends Component {


  render(){
    return (
         <React.Fragment>
              
      <NavBar/>
         
          <Router basename={process.env.PUBLIC_URL}>
                
                       <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Events" component={Events} />
                            <Route path="/Teams" component={Teams} />
                            <Route path="/about" component={About} />
                            <Route path="/Play" component={Play} />
                            <Route path="/Login" component={Login} />
                            <Route component={NoMatch} />
                        </Switch>

                  
            </Router>
           <Footer/>
       </React.Fragment> 
      
    );
  }
  }


export default App;

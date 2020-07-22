import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Events} from './Pages/Events';
import {Teams} from './Pages/Teams';
import { Play } from './Pages/Play';
import { LoginPage } from './Pages/LoginPage';
import {NoMatch} from './Pages/NoMatch';
import {ContactUs} from './Pages/ContactUs';
import { NavBar } from './components/NavBar';
import {Footer} from './components/Footer';
import './App.css';



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
                            <Route path="/Login" component={LoginPage} />
                            <Route path="/ContactUs" component={ContactUs} />
                            <Route component={NoMatch} />
                        </Switch>

                  
            </Router>
            
           <Footer/>
          
       </React.Fragment> 
      
    );
  }
  }


export default App;

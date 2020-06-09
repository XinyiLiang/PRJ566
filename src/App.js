import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Events} from './Pages/Events';
import {Teams} from './Pages/Teams';
import { Media } from './Pages/Media';
import { Account } from './Pages/Account';
import {NoMatch} from './Pages/NoMatch';
import { NavBar } from './components/NavBar';
import './App.css';



class  App extends Component {
  render(){
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={require('./Images/detectiveLogo.png')} className="App-logo" alt="logo" />
                    <h1 className="App-title">Detective Game</h1>
                </header>

            </div>
      <NavBar/>

          <Router basename={process.env.PUBLIC_URL}>
                
                       <Switch>
                            <Route exact path="/" component={Home} />
                         
                            <Route path="/Events" component={Events} />
                            <Route path="/Media" component={Media} />
                            <Route path="/Teams" component={Teams} />
                            <Route path="/about" component={About} />
                            <Route path="/Account" component={Account} />
                            <Route component={NoMatch} />
                        </Switch>

                  
            </Router>

      </React.Fragment>
    );
  }
  }


export default App;

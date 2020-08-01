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
import { NavBar } from './components/NavBar_LoggedIn';
import { NavBarLoggedOut } from './components/NavBar_LoggedOut';
import {Footer} from './components/Footer';
import {RegisterPage} from './Pages/RegisterPage'
import {ProfilePage} from './Pages/Profile'
import {ChangeProfilePage} from './Pages/ChangeProfilePage'
import './App.css';



class  App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:5000/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  render(){
    return (
         <React.Fragment>
              
      <NavBar/>
      <NavBarLoggedOut />  
          <Router basename={process.env.PUBLIC_URL}>
                
                       <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Events" component={Events} />
                            <Route path="/Teams" component={Teams} />
                            <Route path="/about" component={About} />
                            <Route path="/Play" component={Play} />
                            <Route path="/Login" component={LoginPage} />
                            <Route path="/ContactUs" component={ContactUs} />
                            <Route path="/Register" component={RegisterPage} />
                            <Route path="/Profile" component={ProfilePage} />
                            <Route path="/ChangeProfile" component={ChangeProfilePage} />
                            <Route component={NoMatch} />
                        </Switch>

                  
            </Router>
            
           <Footer/>
          
       </React.Fragment> 
      
    );
  }
  }


export default App;

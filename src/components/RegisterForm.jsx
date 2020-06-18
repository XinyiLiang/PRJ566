import React, { Component } from "react";

import '../App.css';

export default class RegisterForm extends Component {
    render() {
        return (
          
        <div class="form">
          
            <form class="form-box">
              
                <h3>Create Account</h3>

                <div className="form-group">
                   
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Date of Birth" />
                </div>

                <div className="form-group">
                   
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="phone number" className="form-control" placeholder="Phone Number" />
                </div>

                <div className="form-group">
                   
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                   
                    <input type="password" className="form-control" placeholder="Confirm password" />
                </div>

                <button type="submit" className="btn-submit">Sign Up</button>
                <p className="sign-in-link">
                    Already registered <a href="/Login">sign in?</a>
                </p>
            </form>
            </div>

        );
    }
}

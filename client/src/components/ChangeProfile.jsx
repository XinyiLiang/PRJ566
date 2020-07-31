import React, { Component } from "react";
import { Button} from "react-bootstrap";

export default class ChangePro extends Component {
    render() {
        return (
          
        <div class="form">
          
            <form class="form-box">
              

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

                <Button type="submit" className="btn-submit" block bsSize="large">Confirm Changes</Button>
               
            
            </form>
            </div>

        );
    }
}
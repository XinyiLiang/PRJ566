import React, { Component } from 'react';



class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: null,
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-4 col-lg-12">

                        <ul class="list-group list-group-bg-info text-black">
                            <li class="list-group-item list-group-item-info">User Name:</li>
                            <li class="list-group-item list-group-item-info">Team Name:</li>
                            <li class="list-group-item list-group-item-info">Name:</li>
                            <li class="list-group-item list-group-item-info">Date of Birth:</li>
                            <li class="list-group-item list-group-item-info">Phone Number:</li>
                            <li class="list-group-item list-group-item-info">Email:</li>
                            <li class="list-group-item list-group-item-info">Password:</li>
                        </ul>
                        <div class="btn-group p-3 col-lg-5 pull-right">
                            <button type="button" class="btn btn-primary " onClick={()=>{window.location.href="/ChangeProfile"}} >Change Info</button>
  

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Profile;
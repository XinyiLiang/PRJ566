import { createClass } from 'react/addons';
import Input from './components/Input.js';
import { isEmpty as _isEmpty } from 'underscore';
import Select from './components/Select';
import STATES from './components/data/states';
import Icon from './components/Icon.js';

var Register = createClass({
  getInitialState: function () {
    return {
      firstName:null,
      lastName: null,
      birthDate:null,
      email:null,
      phoneNumber:null,
      password: null,
      confirmPassword: null,
      forbiddenWords: ["password", "user", "username"]
    }
  },

  handlePasswordInput: function (event) {
    if(!_isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      password: event.target.value
    });
  },

  handleConfirmPasswordInput: function (event) {
    this.setState({
      confirmPassword: event.target.value
    });
  },

  saveAndContinue: function (e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email) 

        && this.refs.password.isValid()
        && this.refs.passwordConfirm.isValid();

    if(canProceed) {
      var data = {
        email: this.state.email
      }
      alert('Thanks.');
    } else {
      this.refs.email.isValid();
      this.refs.state.isValid();
      this.refs.firstName.isValid();
      this.refs.password.isValid();
      this.refs.passwordConfirm.isValid();
    }
  },

  isConfirmedPassword: function (event) {
    return (event == this.state.password)
  },

  handleFirstInput: function(event) {
    this.setState({
      firstName: event.target.value
    })
  },
  handleLastInput: function(event) {
    this.setState({
      lastName: event.target.value
    })
  },

  handleBirthDateInput: function(event) {
    this.setState({
      birthDate: event.target.value
    })
  },

  handleEmailInput: function(event){
    this.setState({
      email: event.target.value
    });
  },

  handlePhoneNumberInput: function(event){
    this.setState({
     phoneNumber: event.target.value
    });
  },

  validateEmail: function (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  isEmpty: function (value) {
    return !_isEmpty(value);
  },

  updateStatesValue: function (value) {
    this.setState({
      statesValue: value
    })
  },

  render: function() {
    return (
      <div className="register_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          
          <form onSubmit={this.saveAndContinue}>

            <Input 
              text="First Name" 
              ref="firstName"
              validate={this.isEmpty}
              value={this.state.firstName}
              onChange={this.handleFirstInput} 
              emptyMessage="First name can't be empty"
            /> 

            <Input 
              text="Last Name" 
              ref="lastName"
              validate={this.isEmpty}
              value={this.state.lastName}
              onChange={this.handleLastInput} 
              emptyMessage="Last name can't be empty"
            /> 
            <Input 
              text="Date of Birth" 
              ref="birthDate"
              validate={this.isEmpty}
              value={this.state.birthDate}
              onChange={this.handleBirthDateInput} 
              emptyMessage="Date of birth can't be empty"
            /> 

            <Input 
              text="Email Address" 
              ref="email"
              type="text"
              defaultValue={this.state.email} 
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput} 
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />

            <Input 
              text="Phone Number" 
              ref="phoneNumber"
              validate={this.isEmpty}
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumberInput} 
              emptyMessage="Phone number can't be empty"
            /> 

            <Input 
              text="Password" 
              type="password"
              ref="password"
              validator="true"
              minCharacters="8"
              requireCapitals="1"
              requireNumbers="1"
              forbiddenWords={this.state.forbiddenWords}
              value={this.state.passsword}
              emptyMessage="Password is invalid"
              onChange={this.handlePasswordInput} 
            /> 

            <Input 
              text="Confirm password" 
              ref="passwordConfirm"
              type="password"
              validate={this.isConfirmedPassword}
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInput} 
              emptyMessage="Please confirm your password"
              errorMessage="Passwords don't match"
            /> 

            <button 
              type="submit" 
              className="button button_wide">
              Submit
            </button>

          </form>

        </div>

      </div>
    );
  }
    
});
    
export default Register;
export default FormPage;

import React from 'react';
import Register from '../components/Register';
import rules from '../ValidationRules'
import messages from '../ValidationMessages'
import { FormProvider } from 'react-advanced-form'

 export const Account = () =>(
    <div className="HomeMain">
   
  
              
                <FormProvider rules={rules} messages={messages}>
            
                <div className="flex">
                <img id="RegisterLogo" src={"../images/detectiveLogo.png"} alt="loginLogo" /> <span className="LogoBesidesText">Register</span>
                  <Register //onSubmitStart={this.handleSubmitStart} 
                  />
                    </div>
              </FormProvider>
 
    </div>
    )
    export default Account;
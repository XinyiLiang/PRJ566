import React from 'react';
import ChangePro from '../components/ChangeProfile';
import {NavBar} from '../components/NavBar';

import rules from '../ValidationRules'
import messages from '../ValidationMessages'
import { FormProvider } from 'react-advanced-form'

export const ChangeProfilePage = () =>(
    <div className="HomeMain">
         <NavBar/>
         <div className="ChangeProfileContainer">
          <FormProvider rules={rules} messages={messages}>
            <h1 >Update My Profile</h1>
                    <ChangePro/>
          </FormProvider>
       </div>
    </div>

    )
export default ChangeProfilePage;
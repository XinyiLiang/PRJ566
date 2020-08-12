import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'


const ChangePro = () => {

        const [user, dataSet] = useState([])
    
        const email = sessionStorage.getItem('email');
        const auth = sessionStorage.getItem('auth');
         
        const history = useHistory();

        const [profile_FN, setProfileFN] = useState("");
        const [profile_LN, setProfileLN] = useState("");  
        const [profile_password, setPPassword] = useState("");  
        const [profile_passwordCF, setPPasswordCF] = useState("");  

        useEffect(() => {
            if(auth == 'true'){
            async function fetchMyAPI() {
            let response = await fetch(`/api/get/getPlayer/${email}`, {
                method:'GET'
                }).then(response => response.json()).then(data => {
                    
                    dataSet(data);
                    setProfileFN(data.FIRST_NAME);
                    setProfileLN(data.LAST_NAME);
                    setPPassword(data.PASSWORD);
                    setPPasswordCF(data.PASSWORD);
                })               
            }
          
            fetchMyAPI();

    }else{
        history.push('/Login')
    }
}, [])


const UpdateProfile = ({ serialized, fields, form }) => {
        
         
        return fetch(`/api/put/user`, {
          body: JSON.stringify(serialized),
          method: 'PUT',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          }
          
        }).then(res => res.json()).then(data => {
          
          if (data.rowCount == 1) {
               console.log('user info updates!');
               sessionStorage.setItem("auth", "true");
               sessionStorage.setItem("email",user.EMAIL)
               sessionStorage.setItem("name",profile_FN)

          //history.push('/');
          window.location.href="/Profile"
            
          } else {
              console.log("user info updates fails!!");
          }
        });
     
  };

        return (
            
          
          
        <Form  id="updateProfileForm" action={UpdateProfile}>
        
        <Field.Group name="primaryInfo" >
          <Input
            name="email"
            type="text"
            label="E-mail"
            value={email}
            disabled="true"
           />
            <Input
            name="username"
            type="text"
            label="Username"
            value={user.USERNAME}
            disabled="true"
           />
       </Field.Group>

       

          <Field.Group name="primaryInfo">
          <Input
            name="First_Name"
            label="First Name"
            value={profile_FN}
            onChange={(e) => {setProfileFN( e.nextValue);}}
            required
            />
          <Input
            name="Last_Name"
            label="Last Name"
            value={profile_LN}
            onChange={(e) => {setProfileLN( e.nextValue);}}
            required />
        </Field.Group>
       
        <Input
          name="password"
          type="password"
          label="Password"
          value={profile_password}
          onChange={(e) => {setPPassword( e.nextValue);}}
          required />
        <Input
          name="confirmUpdatePassword"
          type="password"
          value={profile_passwordCF}
          onChange={(e) => {setPPasswordCF( e.nextValue);}}
          label="Confirm Password"
          required
          skip />
     
        <Button  primary type="submit">Save</Button>
        
      </Form>
     

        );
    };
    export default ChangePro;
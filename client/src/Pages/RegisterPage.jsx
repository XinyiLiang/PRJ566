import React from 'react';
import Register from '../components/Register';
import rules from '../ValidationRules'
import messages from '../ValidationMessages'
import { FormProvider } from 'react-advanced-form'
import {Container,Row,Col} from 'react-bootstrap';

 export const Account = () =>(
    <div className="LoginPageContainer">
      <div className="RegisterTitle">
           <h2 >Sign up today to be a <a href="/">Detective</a></h2>
       </div>
       <div className="RegisterContent">
           <Container >
              <Row className="register-row">
              <Col md={12} xs={12} lg={7}  >
                    <p className="row-content">An interesting detective type online game</p>
                    <hr /> 
                    <p className="row-content">Can organize a team of friends to play together</p>
                    <hr /> 
                    <p className="row-content2">Already have an account?   <a class="btn btn-info btn-rounded" href="/login" role="button">LogIn</a> </p>
                  
              </Col>
              <Col md={12} xs={12} lg={5} >
                <FormProvider rules={rules} messages={messages}>
            
                <div className="flex">
               
                  <Register //onSubmitStart={this.handleSubmitStart} 
                  />
                    </div>
                    
              </FormProvider>
              </Col>
              </Row>
              </Container>
              </div>
    </div>
    )
    export default Account;
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
export const ContactUs = () =>(

   

<div id="contact">
   
    <Container> 
    <Row>
			
    <Col md={6} xs={12} lg={6} className="section-content">
				<h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
				<h3>Let us know how you feel on our game today!</h3>
			</Col>

    <Col md={6} xs={12} lg={6} className="contact-section ">
			
              
				<form >
                
					<div >
			  			<div class="form-group">
			  				<label for="exampleInputUsername">Your name</label>
					    	<input type="text" class="form-control" id="" placeholder=" Enter Name"/>
				  		</div>
				  		<div class="form-group">
					    	<label for="exampleInputEmail">Email Address</label>
					    	<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id"/>
					  	</div>	
                          <div class="form-group">
					    	<label for="telephone">Mobile No.</label>
					    	<input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."/>
			  			</div>
			  		
			  			<div class="form-group">
			  				<label for ="description"> Message</label>
			  			 	<textarea  class="form-control" id="description" placeholder="Enter Your Message"></textarea>
                         </div>
			  			<div>

			  				<button type="button" class="btn btn-default submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
			  			</div>
			  	
            </div>	
                   
				</form>
			</Col>

      


            </Row>
            </Container>
		</div>
   


    )

export default ContactUs;

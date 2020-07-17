import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
  
/*Contact sectiom*/
.content-header{
  font-family: 'Oleo Script', cursive;
  color:#fcc500;
  font-size: 45px;
}

.section-content{
  
  
  padding-top:10em;
  text-align: left; 
  

}
#contact{
    
  font-family: 'Teko', sans-serif;
  padding-top: 30px;
  
  height: 38em;
  
  background: #3a6186; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #3a6186 , #55b5b3); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #3a6186 , #55b5b3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color : #fff;    
}
.contact-section{
  padding-top: 40px;

}
.contact-section .col-md-6{
    width: 100%;
  }
  
  .form-line{
    border-right: 1px solid #B29999;
    padding-right:3em;
  }
  
  .form-group{
    margin-top: 10px;
  }
  label{
    font-size: 1.3em;
    line-height: 1em;
    font-weight: normal;
  }
  .form-control{
    font-size: 1.3em;
    color: #080808;
  }
  textarea.form-control {
      height: 135px;
     /* margin-top: px;*/
  }
  .submit{
    font-size: 1.1em;
    float: right;
    width: 150px;
    background-color: transparent;
    color: #fff;
  
  }
  
`;
export const ContactUs = () =>(

    <Styles>

<div id="contact">
   
    <div class="container"> 
    <div class="row">
			
      
      <div class="contact-section col-6">
			{/*  */}
              
				<form >
                
					<div class=" form-line">
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
			</div>

      <div class="section-content col-6">
				<h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
				<h3>Let us know how you feel on our game today!</h3>
			</div>


            </div>
            </div>
		</div>
   
 </Styles>

    )

export default ContactUs;

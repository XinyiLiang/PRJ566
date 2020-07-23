import React from 'react';


export const AnnoucementSlider = () => (

<div class="mt-4" className="MainSlice">
      <h2 class="card-title h1 white-text">Annoucement</h2>
      <div id="AnnoucementSlice" class="carousel slide" data-ride="carousel">
      
  <ol class="carousel-indicators">
    <li data-target="#AnnoucementSlice" data-slide-to="0" class="active"></li>
    <li data-target="#AnnoucementSlice" data-slide-to="1"></li>
    <li data-target="#AnnoucementSlice" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner " >
    <div class="carousel-item active">
    <img src={require('../Images/slice1.png')} alt="slice1" className="slice"  />
      <div class="carousel-caption  d-md-block " >
        <h5 class="text-left text-black textStyle">New Event: City homicide</h5>
        <h6 class="text-left">Start: June 26, 2020 19:00 PM</h6>
        <br />
        <p class="text-left AnnoucementDetails">In a new case of homicide, Two young men were murdered on a rainy night..</p>
        <a href="/Events" class="float-right badge-pill badge-warning  font-weight-bold" >Learn More</a>
      </div>
      
    </div>
    <div class="carousel-item"  >
    <img src={require('../Images/slice2.png')} alt="slice2" className="slice" />
    
      <div class="carousel-caption  d-md-block " >
      
        <h5 class="text-left textStyle">Score Post</h5>
        <h6 class="text-left">On: June 30, 2020 23:00 PM</h6>
        <br />
        <br />
        <p class="text-left AnnoucementDetails">Score for each team will be updated.</p>
        
        </div>
     
    </div>
    <div class="carousel-item">
    <img src={require('../Images/slice3.png')} alt="slice3" className="slice" />
      <div class="carousel-caption  d-md-block">
        <h5 class="text-left textStyle">System Update</h5>
        <h6 class="text-left ">Time: July 1, 2020 00:00 AM - July 1, 2020 04:00 AM </h6>
        <br />
        <p class="text-left AnnoucementDetails">During system update period, some features might not be available.</p>
      </div>
      
    </div>
  </div>
  <a class="carousel-control-prev" href="#AnnoucementSlice" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#AnnoucementSlice" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>

)



export default  AnnoucementSlider;

import React from 'react'

// functional component
const Infocard = (props) =>{

  return(
      <div class="bg-light shadow">
      <div class="card-body px-2 py-3">
        <h5 class="card-title ">Please wear Headphones</h5>
        <h6 class="card-subtitle m-2 text-muted">Artist: Stephen Roddy</h6>
        <div class ="clearfix">
          <p class="card-text mx-auto mt-3">Signal to Noise Loops v4. is an online installation. It is a data-driven audiovisual piece informed by principles from the fields of Sonification, Generative Music, and Artificial Intelligence. Data from noise sensors placed around Dublin City is used to create the music and visuals. The first movement consists of data from March 2019, prior to the COVID-19 pandemic. The active and bustling nature of the city is well represented. The second movement consists of data recorded in March 2020 when restrictive and social distancing measures were introduced culminating in a full lockdown on March 27th. This section is notably more sedate. The piece attempts to reflect some of the transformations Dublin City went through during the pandemic.</p>
          <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html" target="_blank" class="button btn btn-primary btn-lg active float-right" role="button" aria-pressed="true">Visit the Gallery</a>
        </div>
      </div>
    </div>
  )
};

export default Infocard


//https://www.nasa.gov/multimedia/imagegallery/iotd.html

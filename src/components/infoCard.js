import React from 'react'

// functional component
const Infocard = (props) =>{

  return(
      <div class="bg-light shadow ms-2 me-2">
      <div class="card-body px-2 py-3">
        <h5 class="card-title ">Overview of the piece</h5>
        <h6 class="card-subtitle m-2 text-muted">Artist: Stephen Roddy</h6>
        <h7 class="card-subtitle m-2 text-primary">Please wear earphones or headphones</h7>

        <div class ="clearfix">
          <p class="card-text mx-auto mt-3">[This is not the final blurb. This blurb is from the previous iteration]. Signal to Noise Loops v5. is an online installation. It is a data-driven audiovisual piece informed by principles from the fields of Sonification, Generative Music, and Artificial Intelligence. Data from noise sensors placed around Dublin City is used to create the music and visuals. The first movement consists of data from March 2019, prior to the COVID-19 pandemic. The active and bustling nature of the city is well represented. The second movement consists of data recorded in March 2020 when restrictive and social distancing measures were introduced culminating in a full lockdown on March 27th. This section is notably more sedate. The piece attempts to reflect some of the transformations Dublin City went through during the pandemic.</p>
        </div>
      </div>
    </div>
  )
};

export default Infocard


//https://www.nasa.gov/multimedia/imagegallery/iotd.html

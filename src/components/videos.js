// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const Videos = (props) => {
//  console.log({objects.near_earth_objects[1]});
return (

  <div class="bg-light shadow ms-2 me-2">
  <div class="card-body">
  <div class="videoWrapper clearfix m-3">
  <iframe src="https://player.vimeo.com/video/740721226?h=b88fcbb197"
width= "100%"
height="100%"
frameBorder="0"
></iframe>{" "}</div></div></div>
  )
}

export default Videos

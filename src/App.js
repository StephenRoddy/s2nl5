import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Videos from './components/videos.js';
import Navbar from './components/navBar.js';
import Infocard from'./components/infoCard.js';
//import Objects from './components/objects.js';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        media: []
    };
  }

/*
  componentDidMount(){
    let video = 'https://api.nasa.gov/planetary/apod?api_key=UrXJyJZWfOwzULw07rfPFuiur4cEsYCmC7WaSkTZ';
    this.setState({ media: video })

    .catch(console.log)
  }
*/

  render () {
    let conRend;

    conRend = <div class="videoWrapper clearfix m-3"><iframe src="https://player.vimeo.com/video/740721226?h=b88fcbb197"
    width= "100%"
    height="100%"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>{" "}</div>


    return (  // Return divides the page into columns and there is some conditional rendering to handle video. // Will replace with a component
      <div>
      {<Navbar />}
      <div class="row">
        <div class="col-sm ml-2 mr-2 mb-2">
          {conRend}
        </div>
        <div class="col-sm ml-2 mr-2 mb-2">
          {<Infocard />}
        </div>
      </div>
    </div>
    )
  }
}

export default App;

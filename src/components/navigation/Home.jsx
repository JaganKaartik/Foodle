import React, { Component } from 'react';
import homeL from '../../static/images/home-L.jpg';
import homeR from '../../static/images/home-R.jpg';
import '../../static/css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <img className="sideA fadeA" src={homeL} alt="cant load img"></img>
        <img className="sideB fadeB inner-image" src={homeR} alt="cant load img"></img>
      </div>
    );
  }
}

export default Home;

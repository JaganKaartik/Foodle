import React, { Component } from 'react';
import home from '../../static/images/home.jpg';
import '../../static/css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="fade">
        <img src={home} alt="cant load img"></img>
      </div>
    );
  }
}

export default Home;

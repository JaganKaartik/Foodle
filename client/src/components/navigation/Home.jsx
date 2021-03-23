import React, { Component } from 'react';
import bg1 from '../../assets/images/bg1.gif';
import bg2 from '../../assets/images/bg2.gif';
import bg3 from '../../assets/images/bg3.gif';
class Home extends Component {
  render() {
    return (
      <div className="grid grid-rows-3 grid-cols-3 gap-4 home-div">
        <div className="col-start-1">
          <img src={bg1} alt="cant load img" />
        </div>
        <div className="col-start-2 row-start-2">
          <img src={bg2} alt="cant load img" />
        </div>
        <div className="col-start-3 row-start-1">
          <img src={bg3} alt="cant load img" />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import ProgressBar from "@atlaskit/progress-bar";

class FoodleLoader extends Component {
  render() {
    return (
      <div className="container">
        <ProgressBar isIndeterminate />
        <h3>Your content is loading!..</h3>
      </div>
    );
  }
}

export default FoodleLoader;

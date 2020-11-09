import React, { Component } from 'react';
import '../../static/css/index.css';
import { connect } from 'react-redux';

class SuperAdmin extends Component {
  render() {
    return (
      <div>
        <h5 className="title">Super Admin Mode</h5>
        <div className="ui inverted segment">
          <span>Welcome to the secret part of the application! </span>
          <button className="ui inverted blue button">Proceed with Caution!</button>
        </div>
        <br />
        <br />
        <span>Add this.props.deleteAllDishes --> button's click property</span>
        <button className="ui negative basic button">Delete All Dishes</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // deleteAllDishes: () => {
    //   dispatch(thunkActions.thunkDeleteAllDish());
    // }
  };
};

export default connect(mapDispatchToProps)(SuperAdmin);

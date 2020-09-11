import React, { Component } from 'react';
import Food from './Food';
import { getFilteredDishes } from '../../selectors/index';
import { connect } from 'react-redux';
class FoodTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.data.map((value, index) => {
          return <Food key={index} {...value} foodId={index + 1} click={this.props.click} />;
        })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: getFilteredDishes(state.fetchdish.dishes, state.filter)
  };
};

export default connect(mapStateToProps)(FoodTableBody);

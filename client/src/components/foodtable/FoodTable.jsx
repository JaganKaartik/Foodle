import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as thunkActions from '../../redux';
import FoodTableHeader from './FoodTable.header';
import FoodTableBody from './FoodTable.body';
import FoodleLoader from '../commons/loader';
import ReactGA from 'react-ga';
class FoodTable extends Component {
  componentDidMount() {
    this.props.displayAllDishes();
  }

  clickHandler = (field, type, e) => {
    e.preventDefault();
    if (type === 'delete') {
      ReactGA.event({
        category: 'Editing',
        action: 'User Deleted Dish ID ',
        label: 'delete operation',
        value: field
      });
      this.props.deleteOneDish(field);
      this.props.displayAllDishes();
    } else {
      ReactGA.event({
        category: 'Editing',
        action: 'User Edited Dish Details ',
        label: 'edit operation'
      });
      const name = field.split('$')[0];
      const price = '$' + field.split('$')[1];
      this.props.updateDish(name, price);
      this.props.displayAllDishes();
    }
  };

  render() {
    if (this.props.data.loading) return <FoodleLoader />;
    return (
      <div className="container">
        <table className="responsive-table striped highlight">
          <FoodTableHeader display={this.props.displayAllDishes} />
          <FoodTableBody data={this.props.data.dishes} click={this.clickHandler} />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchdish
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayAllDishes: () => {
      dispatch(thunkActions.thunkFetchDishes());
    },
    updateDish: (name, price) => {
      dispatch(thunkActions.thunkUpdateDishes(name, price));
    },
    deleteOneDish: (dishid) => {
      dispatch(thunkActions.thunkDeleteDish(dishid));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodTable);

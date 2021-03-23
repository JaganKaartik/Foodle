import React, { Component } from 'react';
import * as thunkActions from '../../redux';
import { connect } from 'react-redux';
import FoodModal from '../modals/FoodModal';

class SearchDish extends Component {
  state = {
    id: '',
    modal: false
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      id: e.target.value
    });
  };

  formHandler = (e) => {
    e.preventDefault();
    this.props.fetchdish(this.state.id);
    this.modalHandler();
  };

  modalHandler = () => {
    this.state.modal ? this.setState({ modal: false }) : this.setState({ modal: true });
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <form className="ui form" onSubmit={this.formHandler}>
              <input
                name="dish-id"
                placeholder="Dish ID"
                onChange={this.changeHandler.bind(this)}
                type="text"
                required
                value={this.state.value}
              />
              <button className="ui button" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="container">
            {this.state.modal && (
              <FoodModal dish={this.props.data.dish} onClose={this.modalHandler} />
            )}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchOne
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchdish: (dishid) => {
      dispatch(thunkActions.thunkFetchOneDish(dishid)).catch((err) => {
        this.setState({
          modal: false
        });
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDish);

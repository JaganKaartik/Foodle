import React from 'react';
import { addDish } from '../../services/helpers';
import Button from '@atlaskit/button';
import ReactGA from 'react-ga';
class addDishForm extends React.Component {
  state = {
    name: '',
    type: '',
    price: ''
  };

  changeHandler = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  };

  dishFormHandler = (e) => {
    ReactGA.event({
      category: 'Editing',
      action: 'User Added Dish ',
      label: 'add operation'
    });
    e.preventDefault();
    addDish(this.state.name, this.state.type, this.state.price).then((res) => {
      if (res.ok) {
        this.props.onAdd();
      } else {
        // Add Logic - Flash error! unable to add
      }
    });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.dishFormHandler}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="dish-name"
              placeholder="Dish Name"
              onChange={this.changeHandler.bind(this, 'name')}
              value={this.state.name}
            />
          </div>
          <div className="field">
            <label>Type</label>
            <input
              type="text"
              name="dish-type"
              placeholder="Dish Type"
              onChange={this.changeHandler.bind(this, 'type')}
              value={this.state.type}
            />
          </div>
          <div className="field">
            <label>Price</label>
            <input
              type="text"
              name="dish-price"
              placeholder="Dish Price"
              onChange={this.changeHandler.bind(this, 'price')}
              value={this.state.price}
            />
          </div>

          <Button type="submit">Add Dish</Button>
        </form>
      </div>
    );
  }
}

export default addDishForm;

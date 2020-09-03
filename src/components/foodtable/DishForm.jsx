import React from "react";
import {addDishHelper} from '../../services/helpers'

class addDishForm extends React.Component {
  //Forn to add dish
  state = {
    name: '',
    type: '',
    price: ''
  };

  changeHandler = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }

  dishFormHandler = (e) => {
    e.preventDefault()
    addDishHelper(this.state.name,this.state.type,this.state.price)
    .then(res => {
      if (res.ok) {
        this.props.onAdd()
        console.log("Successfully added dish");
      } else {
        console.log("Unable to add dish");
      }
    });
  }


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
              onChange={this.changeHandler.bind(this, "name")}
              value={this.state.name}
            />
          </div>
          <div className="field">
            <label>Type</label>
            <input
              type="text"
              name="dish-type"
              placeholder="Dish Type"
              onChange={this.changeHandler.bind(this, "type")}
              value={this.state.type}
            />
          </div>
          <div className="field">
            <label>Price</label>
            <input
              type="text"
              name="dish-price"
              placeholder="Dish Price"
              onChange={this.changeHandler.bind(this, "price")}
              value={this.state.price}
            />
          </div>
          <button className="ui button" type="submit">
            Add Dish
          </button>
        </form>
      </div>
    );
  }
}

export default addDishForm;

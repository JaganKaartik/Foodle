import React, { Component } from 'react';
import Operations from '../modals/OperationsModal';
class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      temp: props.price
    };
  }

  sendData = () => {
    return this.props.click.bind(this, this.props.name + this.state.temp, 'edit');
  };

  saveHandler = (e) => {
    e.preventDefault();
    if (this.state.isEditable) {
      this.setState(() => {
        return { isEditable: false };
      });
      this.props.click(this.props.name + this.state.temp, 'edit', e);
    } else {
      this.setState(() => {
        return { isEditable: true };
      });
    }
  };

  editHandler = (e) => {
    this.setState({ temp: e.target.value });
  };

  render() {
    return (
      <tr className="text-blue-500">
        <td>{this.props.foodId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.type}</td>
        <td>{this.props.price}</td>
        <td>
          <Operations
            isEditable={this.state.isEditable}
            handler={this.saveHandler}
            edit={this.editHandler}
            datavalue={this.state.temp}
            click={this.props.click}
            foodid={this.props.id}
          />
        </td>
      </tr>
    );
  }
}

export default Food;

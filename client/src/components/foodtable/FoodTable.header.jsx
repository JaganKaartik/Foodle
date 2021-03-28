import React, { Component } from 'react';
import AddModal from '../modals/AddModal';
import FilterMenu from './FilterMenu';

class FoodTableHeader extends Component {
  render() {
    return (
      <thead className="shadow-2xl">
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>
            <FilterMenu />
          </th>
          <th>Item Price</th>
          <th>
            <AddModal onAdd={this.props.display} />
          </th>
        </tr>
      </thead>
    );
  }
}

export default FoodTableHeader;

import React, { Component } from 'react';
import Button from '@atlaskit/button';
import { connect } from 'react-redux';
import { dishTypeSelector } from '../../selectors/index';
import { setFilter } from '../../redux/utils/utilActions';

class FilterMenu extends Component {
  state = {};

  clickHandler = (type) => {
    this.props.setFilter(type);
  };

  render() {
    return (
      <div className="ui compact menu">
        <div className="ui simple dropdown item">
          <Button>Items Type</Button>
          <div className="menu">
            <div className="item" onClick={this.clickHandler.bind(this, null)}>
              All
            </div>
            {this.props.type.map((type) => {
              return (
                <div
                  key={type}
                  onClick={this.clickHandler.bind(this, type)}
                  className="item"
                  value={type}
                >
                  {type}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: dishTypeSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (dishtype) => {
      dispatch(setFilter(dishtype));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);

import React, { Component } from 'react';
import { ProgressIndicator } from '@atlaskit/progress-indicator';
import styled from 'styled-components';

const Footer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;
class FoodleLoader extends Component {
  static defaultProps = {
    selectedIndex: 0,
    values: ['first', 'second', 'third']
  };

  state = {
    selectedIndex: this.props.selectedIndex
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      selectedIndex: prevState.selectedIndex - 1
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      selectedIndex: prevState.selectedIndex + 1
    }));
  };

  render() {
    const { values } = this.props;
    const { selectedIndex } = this.state;
    return (
      <Footer style={{ backgroundColor: '#1b2638' }}>
        <ProgressIndicator selectedIndex={selectedIndex} values={values} appearance={'inverted'} />
      </Footer>
    );
  }
}
export default FoodleLoader;

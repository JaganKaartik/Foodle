import React, { Component } from 'react';
import Routes from './components/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="homeContainer hoverable">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;

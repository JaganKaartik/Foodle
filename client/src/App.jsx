import React, { Component } from 'react';
import Routes from './components/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/commons/Footer';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="flex flex-col h-screen">
          <Routes />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

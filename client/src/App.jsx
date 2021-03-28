import React, { Component } from 'react';
import Routes from './components/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/commons/Footer';
import { REACT_APP_GA_ID } from './config';
import ReactGA from 'react-ga';
class App extends Component {
  componentDidMount() {
    ReactGA.initialize(REACT_APP_GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  }

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

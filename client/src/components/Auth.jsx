import React, { Component } from 'react';
import { twitterLogin, googleLogin } from '../services/helpers';
import { Redirect } from 'react-router-dom';
class Authentication extends Component {
  state = {
    toDashboard: false
  };

  changeHandler = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  };

  dashHandler = () => {
    this.setState((prevstate) => ({
      toDashboard: !prevstate.toDashboard
    }));
  };

  valueHandler = (e) => {
    e.preventDefault();
    if (e.currentTarget.value === 'twitter') {
      twitterLogin();
    } else if (e.currentTarget.value === 'google') {
      googleLogin();
    }
  };

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/dashboard" />;
    } else
      return (
        <div className="container-login flex-grow">
          <div className="wrapper-login">
            <form className="login-form">
              <span className="login-form-title">Connect to your Foodle Account.</span>
              <br />
              <div className="button-grid">
                <div>
                  <button
                    value="google"
                    className="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
                    onClick={this.valueHandler}
                  >
                    <span>Login with Google</span>
                    <svg className="w-5 h-5 ml-2  fill-current icon" viewBox="0 0 1024 1024">
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <button
                    value="twitter"
                    className="disabled rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110 .."
                    onClick={this.valueHandler}
                  >
                    <span>Login with Twitter</span>
                    <svg className="w-5 h-5 ml-2  fill-current icon" viewBox="0 0 1024 1024">
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
  }
}

export default Authentication;

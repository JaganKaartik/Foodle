import React, { Component } from 'react';
import '../../static/css/home.css';
export default class User extends Component {
  render() {
    return (
      <div>
        <div className="container-login100">
          <div className="wrap-login100">
            <img
              src={this.props.userInfo.profileImageUrl}
              alt="no-img"
              class="inner-image-profile"
            />
            <img src={this.props.userInfo.profileBannerUrl} alt="no-img" />
            <br />
            <span style={{ display: 'inline-block', width: 100 }}></span>
            <span class="twitter-profile">{this.props.userInfo.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

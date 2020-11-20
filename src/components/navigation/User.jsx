import React, { Component } from 'react';

export default class User extends Component {
  render() {
    console.log(this.props.userInfo);
    return (
      <div className="container-login100">
        <div className="wrap-login100">
          <img src={this.props.userInfo.profileBannerUrl} />
          <img className="inner-image" src={this.props.userInfo.profileImageUrl} />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { getUserProfile } from '../../services/helpers';

export default class User extends Component {
  state = {
    data: ''
  };

  componentDidMount() {
    const resp = getUserProfile;
    this.setState({ data: resp });
  }
  render() {
    return (
      <div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:w-48"
                src={this.state.data.profileImageUrl}
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {this.state.data.name}
              </div>
              {/* <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Finding customers for your new business
              </div>
              <p class="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work. Here are five ideas you
                can use to find your first customers.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import bg1 from '../../assets/images/bg1.gif';
import bg2 from '../../assets/images/bg2.gif';
class Home extends Component {
  render() {
    return (
      <div className="flex-grow bg-blue-50 grid grid-rows-2 grid-cols-3 gap-1 home-container">
        <div className="p-2 col-start-2 row-start-1 col-span-2">
          <div class="shadow-2xl max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0"></div>
              <div class="p-10">
                <div class="home-para home-content block mt-1 text-6xl text-blue-500 leading-tight">
                  Foodle is a SPA built on the MERN stack, a CRUD application dealing with Dishes.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 row-start-2 col-span-2">
          <div class="shadow-2xl max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0"></div>
              <div class="p-10">
                <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  Tech Stack & Features
                </div>
                <p class="mt-2 text-gray-500">
                  Built using React (with Context API & Hooks), Redux, TailwindCSS, Atlaskit.
                </p>
                <p class="mt-2 text-gray-500">
                  Server built using Typescript, Express.js-Node.js & MongoDB as the database.
                </p>
                <p class="mt-2 text-gray-500">
                  Features OAuth Authentication (Google & Twitter), JWT Session, API validation,
                  Dockerized client & server for containerized deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 row-start-1">
          <img src={bg2} alt="cant load img" />
        </div>
        <div className="col-start-3 row-start-2">
          <img src={bg1} alt="cant load img" />
        </div>
      </div>
    );
  }
}

export default Home;

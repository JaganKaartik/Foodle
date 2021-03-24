import React, { Component } from 'react';
import bg1 from '../../assets/images/bg1.gif';
import bg2 from '../../assets/images/bg2.gif';
class Home extends Component {
  render() {
    return (
      <div className="bg-gray-50 grid grid-rows-2 grid-cols-3 gap-1 home-container">
        <p class="p-20 home-content col-start-2 row-start-1 col-span-2 text-5xl">
          Foodle is a SPA built on the MERN stack, a CRUD application.
        </p>
        <p class="blockquote p-20 home-content col-start-1 row-start-2 col-span-2 text-2xl">
          Built using React (with Context API & Hooks), Redux, TailwindCSS, Atlaskit.
          <p>Server built using Typescript, Express.js, MongoDB as database.</p>Features OAuth
          Authentication (Google & Twitter), JWT Session, API validation, Dockerized client & server
          for containerized deployment.
        </p>
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

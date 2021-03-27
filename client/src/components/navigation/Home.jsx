import React, { useState, useEffect } from 'react';

function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme === 'dark') {
      setTheme('dark');
    }
  }, []);

  const img = require.context('../../assets/images', true);

  return (
    <div className="home-grid flex-grow home-container">
      {/* <div className="col-start-1 row-start-1"> */}
      <div>
        <img className="gifs" src={img(`SI_${theme}.gif`)} alt="cant load img" />
      </div>

      {/* <div className="p-2 col-start-2 row-start-1"> */}
      <div>
        <div className="home-card shadow-2xl max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0"></div>
            <div className="p-10">
              <div className="home-content block mt-1 text-blue-500 leading-tight">
                Foodle is a SPA built on the MERN stack, a CRUD application dealing with Dishes.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-start-2 row-start-2"> */}
      <div>
        <img className="gifs" src={img(`Cooking_${theme}.gif`)} alt="cant load img" />
      </div>

      {/* <div className="p-2 col-start-2 row-start-1"> */}
      {/* <div>
          <div className="home-card shadow-2xl max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0"></div>
              <div className="p-10">
                <div className="home-content block mt-1 text-6xl text-blue-500 leading-tight">
                  Foodle is a SPA built on the MERN stack, a CRUD application dealing with Dishes.
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* <div className="col-start-1 row-start-2 "> */}
      <div>
        <div className="home-card shadow-2xl max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0"></div>
            <div className="p-10">
              <div className="block mt-1 text-lg leading-tight font-medium text-blue-800 hover:underline">
                Tech Stack & Features
              </div>
              <p className="mt-2 text-blue-500">
                Built using React (with Context API & Hooks), Redux, TailwindCSS, Atlaskit.
              </p>
              <p className="mt-2 text-blue-500">
                Server built using Typescript, Express.js-Node.js & MongoDB as the database.
              </p>
              <p className="mt-2 text-blue-500">
                Features OAuth Authentication (Google & Twitter), JWT Session, API validation,
                Dockerized client & server for containerized deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-start-1 row-start-1">
        <div>
          <img className="gifs" src={bg2} alt="cant load img" />
        </div>

        <div className="col-start-2 row-start-2">
        <div>
          <img className="gifs" src={bg1} alt="cant load img" />
        </div> */}
    </div>
  );
}

export default Home;

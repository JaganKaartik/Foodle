import React, { useState, useEffect } from 'react';
import bg2_light from '../../assets/images/SI_light.gif';
import bg2_dark from '../../assets/images/SI_dark.gif';
import bg1_light from '../../assets/images/Cooking_light.gif';
import bg1_dark from '../../assets/images/Cooking_dark.gif';

function Home() {
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState('');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme === 'dark') {
      setTheme('dark');
      setData({ img1: bg1_dark, img2: bg2_dark });
    } else {
      setTheme('light');
      setData({ img1: bg1_light, img2: bg2_light });
    }
  }, [data]);

  return (
    <div className="home-grid flex-grow home-container">
      <div>
        <img className="gifs" src={data.img2} alt="cant load img" />
      </div>

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

      <div>
        <img className="gifs" src={data.img1} alt="cant load img" />
      </div>

      <div>
        <div className="home-card shadow-2xl max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0"></div>
            <div className="p-10">
              <div className="block mt-1 text-lg leading-tight font-medium text-blue-800 hover:underline">
                Tech Stack
              </div>
              <p className="flex flex-wrap justify-evenly mt-2 text-blue-500">
                <div>
                  <img
                    alt="MongoDB"
                    src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Expressjs"
                    src="https://img.shields.io/badge/-Express.js-2088FF?style=flat-square&logo=Express&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="React"
                    src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="redux"
                    src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Nodejs"
                    src="https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="TypeScript"
                    src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Docker"
                    src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white"
                  />
                </div>
                Built using React (with Context API & Hooks), Redux, TailwindCSS, Atlaskit.
              </p>
              <p className="flex flex-wrap justify-evenly mt-2 text-blue-500"></p>
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
    </div>
  );
}

export default Home;

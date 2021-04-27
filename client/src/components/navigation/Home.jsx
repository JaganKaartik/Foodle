import React from 'react';
import pic1 from '../../assets/images/pic1.svg';
import pic2 from '../../assets/images/pic2.svg';

function Home() {
  // const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  // useEffect(() => {
  //   if (currentTheme === 'dark') {
  //   }
  // }, [currentTheme]);

  return (
    <div className="home-grid flex-grow home-container">
      <div>
        <img
          className="h-auto w-full object-cover md:flex-shrink-0"
          src={pic1}
          alt="cant load img"
        />
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
        <img
          className="h-auto w-full object-cover md:flex-shrink-0"
          src={pic2}
          alt="cant load img"
        />
      </div>

      <div>
        <div className="home-card shadow-2xl max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0"></div>
            <div className="p-10">
              <div className="block mt-1 text-lg leading-tight font-medium text-blue-700 hover:underline">
                Stack
              </div>
              {/* <div className="flex flex-wrap gap-1 md:justify justify-between mt-2"> */}
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                <div className="">
                  <img
                    alt="JavaScript"
                    src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  />
                </div>
                <div className="">
                  <img
                    alt="MongoDB"
                    src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white"
                  />
                </div>

                <div>
                  <img
                    alt="Expressjs"
                    src="https://img.shields.io/badge/-Express.js-2088FF?style=for-the-badge&logo=Express&logoColor=white"
                  />
                </div>
                <div className="col-span-1">
                  <img
                    alt="React"
                    src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  />
                </div>
                <div>
                  <img
                    alt="redux"
                    src="https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Nodejs"
                    src="https://img.shields.io/badge/-Node.js-43853d?style=for-the-badge&logo=Node.js&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="TypeScript"
                    src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Docker"
                    src="https://img.shields.io/badge/-Docker-46a2f1?style=for-the-badge&logo=docker&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="TailwindCSS"
                    src="https://img.shields.io/badge/-TailwindCSS-38b2ac?style=for-the-badge&logo=tailwind%20css&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="ESLint"
                    src="https://img.shields.io/badge/-ESLint-4b32c3?style=for-the-badge&logo=eslint&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Prettier"
                    src="https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Atlaskit"
                    src="https://img.shields.io/badge/-Atlaskit-0052CC?style=for-the-badge&logo=atlassian&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Heroku"
                    src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="Vercel"
                    src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"
                  />
                </div>
                <div>
                  <img
                    alt="GitHub"
                    src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"
                  />
                </div>
              </div>
              <br />
              <div className="block mt-1 text-lg leading-tight font-medium text-blue-700 hover:underline">
                Features:
              </div>
              <div className="home-list mt-2 text-blue-500 text-lg">
                <ul>
                  <li>OAuth Authentication (Google and Twitter)</li>
                  <li>JWT Session</li>
                  <li>API Validation & Rate Limiting</li>
                  <li>Dockerized Server & Client</li>
                </ul>
              </div>
              <br />
              <div className="flex flex-wrap gap-5">
                <div>
                  <a
                    class="github-button"
                    href="https://github.com/JaganKaartik"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-size="large"
                    aria-label="Follow @JaganKaartik on GitHub"
                  >
                    Follow @JaganKaartik
                  </a>
                </div>
                <div>
                  <a
                    class="github-button"
                    href="https://github.com/JaganKaartik/Foodle"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-icon="octicon-star"
                    data-size="large"
                    aria-label="Star JaganKaartik/Foodle on GitHub"
                  >
                    Star this Repo!
                  </a>
                </div>
                <div>
                  <a className="text-blue-500" href="https://storyset.com/people">
                    Illustration by Freepik Storyset
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

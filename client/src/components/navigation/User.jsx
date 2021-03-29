import React, { useContext } from 'react';
import { UserContext } from '../../context/User.Context';
import logoSVG from '../../assets/images/logo.svg';

const User = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(UserContext);

  return (
    <div className="container-login flex-grow">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {data.profileImageUrl ? (
              <img
                className="h-48 w-full object-cover md:w-48"
                src={data.profileImageUrl}
                alt="Man"
              />
            ) : (
              <img className="h-48 w-full object-cover md:w-48" src={logoSVG} alt="Man" />
            )}
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {data.name}
            </div>

            <p class="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim voluptatem corrupti
              est ratione ipsa vitae veritatis eligendi placeat fugit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

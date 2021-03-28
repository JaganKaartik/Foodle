import React, { useContext } from 'react';
import { UserContext } from '../../context/User.Context';

const User = () => {
  const [data, setData] = useContext(UserContext);

  return (
    <div className="container-login flex-grow">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src={data.profileImageUrl} alt="Man" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
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

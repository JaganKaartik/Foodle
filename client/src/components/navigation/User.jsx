import React from 'react';
// import { UserContext } from '../../context/User.Context';

const User = () => {
  // const [data, setData] = React.useContext(UserContext);

  return (
    <div className="container-login flex-grow">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              // src={data.profileImageUrl}
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* {data.name} */}
            </div>
            <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {/* {data.provider} */}
            </div>
            <p class="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here are five ideas you
              can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

// Current displaying Re-Seed option.
import React, { useContext } from 'react';
import { UserContext } from '../../context/User.Context';
import { seedDB } from '../../services/helpers';

export default function Admin() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(UserContext);

  function handleSeedClick() {
    seedDB();
  }

  return (
    <div>
      {data.role === 'admin' ? (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
          onClick={handleSeedClick}
        >
          Re-Seed DB
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

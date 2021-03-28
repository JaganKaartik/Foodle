import React, { useContext } from 'react';
import { UserContext } from '../../context/User.Context';

export default function Profile() {
  const [data, setData] = useContext(UserContext);
  return (
    <div>
      <img
        className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-900"
        src={data.profileImageUrl}
        alt={data.name}
      />
    </div>
  );
}

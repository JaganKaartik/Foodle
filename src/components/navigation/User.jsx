/* 
    User Profile
    Component Contains Dummy User Information
*/

import React from "react";

/*

    Fetch user information from the api and display 
    ID : Name
ß
*/

function User() {
  return (
    <div className="userwrapper">
      <table className="highlight">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User ID</th>
            <th>Foodle Level</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>001</th>
            <th>Kevin Hart</th>
            <th>thisIsRealKevinHart41</th>
            <th>Insane Foodie</th>
            <th>Los Angeles</th>
            <th>California</th>
            <th>90008</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default User;

import React from 'react';

const Toggler = (props) => {
  const onChangeHandler = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={onChangeHandler} />
          <div className="slider round"></div>
        </label>
      </div>
    </div>
  );
};

export default Toggler;

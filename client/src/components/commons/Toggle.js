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
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" onChange={onChangeHandler} />
          <div class="slider round"></div>
        </label>
      </div>
    </div>
  );
};

export default Toggler;

import React from 'react';

import './Header.css';

export const Header = ({ toDo, done }) => {
  return (
    <div className='header d-flex'>
      <h1>Todo list</h1>
      <h2>
        {toDo} more to do,{done} done
      </h2>
    </div>
  );
};

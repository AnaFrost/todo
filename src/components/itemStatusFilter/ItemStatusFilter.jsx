import React from 'react';

export const ItemStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-info'>
        All
      </button>
      <button type='button' className='btn btn-secondary'>
        Active
      </button>
      <button type='button' className='btn btn-secondary'>
        Done
      </button>
    </div>
  );
};

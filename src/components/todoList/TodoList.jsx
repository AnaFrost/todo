import React from 'react';

import { TodoListItem } from '../todoListItem/TodoListItem';

import './todo-list.css';

export const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className='todo-list list-group'>{elements}</ul>;
};

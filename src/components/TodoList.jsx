import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './TodoList.scss';

@inject('store')
@observer
class TodoList extends Component {
  render() {
    return (
      <section className="todo-list-section">
        <h2>Your todos</h2>
        <ul className="todo-list">
          <li className="todo-list__item">
            <label className="checkbox-input">
              <input type="checkbox"/>
              <span className="checkbox-input__check" />
              Buy milk
            </label>
          </li>
        </ul>
      </section>
    );
  }
}

export default TodoList;

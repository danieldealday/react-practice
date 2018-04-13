import React, {Component} from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  render() {
    if (Object.keys(this.props.data).length < 1) {
      return null;
    }

    let allTodos = this.props.data;
    let todos = [];
    for (let key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }
    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }
}

export default MainSection;


import React, {Component} from 'react';
import TodoTextInput from './TodoTextInput';
import AppDispatcher from '../dispatcher/AppDispatcher';

class Header extends Component{
  
  render() {
    return (
      <header id="header">
        <h1>Flux To Do List</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  }

  _onSave = (text) => {
    if (text.trim()){
      AppDispatcher.dispatch({
        actionType: 'TODO_CREATE',
        text: text
      });
    }
  }

}

export default Header;

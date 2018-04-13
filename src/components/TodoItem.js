import React, {Component} from 'react';
import classNames from 'classnames';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  render() {
    let todo = this.props.todo;

    let input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    return (
      <li
        className={classNames({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  }

  _onDoubleClick = () => {
    this.setState({isEditing: true});
  }

  _onToggleComplete = () => {
    var id = this.props.todo.id;
    var actionType = this.props.todo.complete ?
        'TODO_UNDO_COMPLETE' :
        'TODO_COMPLETE';
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  }

  _onSave = (text) => {
    AppDispatcher.dispatch({
      actionType: 'TODO_UPDATE_TEXT',
      id: this.props.todo.id,
      text: text
    });
    this.setState({isEditing: false});
  }

  _onDestroyClick = () => {
    AppDispatcher.dispatch({
      actionType: 'TODO_DESTROY',
      id: this.props.todo.id
    });
  }

}

export default TodoItem;
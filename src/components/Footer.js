import React, {Component} from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';

class Footer extends Component {
  
  render () {
    let allTodos = this.props.data;
    let total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (let key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    let itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    var clearCompletedButton;
    if (completed) {
      clearCompletedButton =
        (<button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>)
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }

  _onClearCompletedClick = () => {
    AppDispatcher.dispatch({
      actionType: 'TODO_DESTROY_COMPLETED'
    });
  }
};

export default Footer;
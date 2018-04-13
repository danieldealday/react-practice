import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import TodoStore from '../stores/TodoStore';

class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.state = TodoStore.getAll();
  }

  componentDidMount() {
    TodoStore.on('change', this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this._onChange);
  }

  render() {
    return (
      <div>
        <Header />
        <MainSection data={this.state} />
        <Footer data={this.state} />
      </div>
    );
  }

  _onChange = () => {
    this.setState(TodoStore.getAll());
    this.forceUpdate();
  }

}

export default TodoApp;

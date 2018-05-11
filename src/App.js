import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    text: 'text',
    number: 1234,
    bool: false
  }
  handleChange = (e) => {
    let change = {};
    console.log(e.target.name);
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  render() {
    return (
      <Fragment>
        <form>
          <label>
            Full Name
            <input type="text" name="text" onChange={this.handleChange} value={this.state.text} />
          </label>

          <label>
            Home address
            <input type="number" name="number" onChange={this.handleChange} value={this.state.number} />
          </label>

          <label>
            Credit card number
            <input type="text"  name="bool" onChange={this.handleChange} maxlength="16" value={this.state.bool} />
          </label>
        </form>
      </Fragment>
    );
  }
}

export default App;

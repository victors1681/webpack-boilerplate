import React from "react";
import Login from "./Login/Login";
import Counter from "./Counter";
import { hot } from 'react-hot-loader'

class ViewSelector extends React.Component {
  state = {
    toggle: true
  };

  onToggle = () => {
    this.setState(prev => ({ toggle: !prev.toggle }));
  };

  render() {
    return (
      <div>
        <button onClick={this.onToggle}>Toggle View </button>
        {this.state.toggle ? <Login /> : <Counter />}
      </div>
    );
  }
}
export default hot(module)(ViewSelector);

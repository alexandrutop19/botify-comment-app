import React from 'react';
import logo from './logo.svg';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Menu;
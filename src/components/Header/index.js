import './style.css';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <p>Groove</p>
        <div className="action-icon-container">
          <i className="fas fa-search"></i>
          <i class="fas fa-bars"></i>
          <i class="fas fa-user-alt"></i>
        </div>
      </div>
    )
  }
}
import './style.css';
import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <HashRouter>
          <p>Groove</p>
          <div className="action-icon-container">
            <i className="fas fa-search"></i>
            <i class="fas fa-bars"></i>
            <Link to="/profile">
              <i class="fas fa-user-alt"></i>
            </Link>
          </div>
        </HashRouter>
      </div>
    )
  }
}
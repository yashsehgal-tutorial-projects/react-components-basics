import './style.css';
import React from 'react';

export default class SearchPeople extends React.Component {
  render() {
    return (
      <div className="search-people-container">
        <div className="search-input-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" 
            name="search-people-input"
            id="search-people-input"
            className="search-input"
            placeholder="Search for People, Recent chats and Tags"
          />
        </div>
      </div>
    )
  }
}
import './style.css';
import React from 'react';

export default class RecentChatCard extends React.Component {
  render() {
    return (
      <div className="recent-chat-card">
        <img src={this.props.UserProfileDisplay}
          alt={this.props.FirstName + "-" + this.props.LastName + "-profile-display"}
          id="user-profile-display-picture"
          className="user-profile-display"
        />
        <div className="recent-chat-content-wrapper">
          <h4 className="user-full-name">{this.props.FirstName} {this.props.LastName}</h4>
          <div className="recent-chat-content-wrapper-footer">
            <p className="last-chat-text">{this.props.LastChatText}</p>
            <p className="recent-chat-time-tag">{this.props.LastSeenTime}</p>
          </div>
        </div>
      </div>
    )
  }
}
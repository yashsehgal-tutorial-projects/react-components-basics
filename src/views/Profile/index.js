import './style.css';
import React from 'react';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-view-banner">
          <p className="edit-profile-banner-button">
            Edit profile banner
          </p>
        </div>
        <div className="profile-view-content-header">
          <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704"
            alt="profile-display"
            id="user-profile-display-picture"
            className="user-profile-display"
          />
          <div className="profile-details-header-wrapper">
            <h3 className="profile-full-name">Elon Musk</h3>
            <p className="profile-username">@elonmusk</p>
            <div className="profile-stats-wrapper">
              {/* connections stats */}
              <div className="profile-stats-details-wrapper">
                <h4 className="profile-stats-title">
                  Connections
                </h4>
                <p className="profile-stats-value">
                  34.12k
                </p>
              </div>
              {/* location stats */}
              <div className="profile-stats-details-wrapper">
                <h4 className="profile-stats-title">
                  Location
                </h4>
                <p className="profile-stats-value">
                  San Francisco
                </p>
              </div>
              {/* usage status */}
              <div className="profile-stats-details-wrapper">
                <h4 className="profile-stats-title">
                  Activity
                </h4>
                <p className="profile-stats-value"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <div className="active-icon"></div>Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
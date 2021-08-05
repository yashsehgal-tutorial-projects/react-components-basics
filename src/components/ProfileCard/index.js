import './style.css';
import React from 'react';

export default function ProfileCard(ProfileDetails) {
  return (
    <div className="ProfileCard">
      {/* 
        This component will be having following features :-
        - BannerImage
        - ProfilePhoto
        - Name
        - username
        - Bio
        - UserType
        - followers
        - connections
        - posts
      */}
      <div className="BannerImage-Container">
        <img src={ProfileDetails.BannerImage}
          alt="user-profile-banner"
          className="user-profile-banner"
        />
      </div>
      <div className="ProfileContent-Container">
        <img src={ProfileDetails.ProfileDisplay}
          alt="user-profile-display"
          className="user-profile-display"
        />
        <div className="ProfileContent-Body">
          <h3>{ProfileDetails.Name}</h3>
          <p>@{ProfileDetails.Username}</p>
          {() => {
            if (ProfileDetails.UserType === 'working') {
              return (
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'purple' }}>Working</div>
              )
            } else {
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'green' }}>Open for work</div>
            }
          }}
        </div>
      </div>
    </div>
  )
}

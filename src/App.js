import './styles/index.css';
import React from 'react';
import GetProfileData from './data/GetProfileData';
import ProfileCard from './components/ProfileCard';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="gradient-text"
          style={{
            maxWidth: '24ch',
          }}
        >
          Search for professional profiles from all around the world
        </h1>
        <div className="search-input-wrapper"
          style={{
            width: 'fit-content',
            display: 'flex',
            alignItems: 'stretch',
            gap: '4px'
          }}
        >
          <input type="text" 
            name="search-value"
            className="search-profile-input-box"
            id="search-profile-input"
            placeholder="Search People, Companies and Jobs"
            style={{
              width: '420px'
            }}
          />
          <button
            className="primary-button button__search"
            id="search-button"
            style={{

            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="profile-card-container">
          <h2>People you might want to connect with</h2>
          {
            GetProfileData('home').map((profileData, index) => {
              return (
                <ProfileCard 
                  BannerImage={profileData.banner_image}
                  ProfileDisplay={profileData.profile_photo}
                  Name={profileData.name}
                  Username={profileData.username}
                  Bio={profileData.bio}
                  UserType={profileData.user_type}
                  Followers={profileData.followers}
                  Connections={profileData.connections}
                  posts={profileData.posts}
                />
              )
            })
          }
        </div>
        
      </div>
    )
  }
}
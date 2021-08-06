import './style.css';
import React, { useState } from 'react';
import getDemoChatData from '../../data/chat_data';
import RecentChatCard from '../../components/RecentChatCard';

export default function Home() {
  const [demoChatData] = useState(getDemoChatData());
  return (
    <div className="home-view">
      <h3 className="page-title">Recent Chats</h3>
      {demoChatData.map((recent_chat_data) => (
        <RecentChatCard
          UserProfileDisplay={recent_chat_data.user_profile_display}
          FirstName={recent_chat_data.first_name}
          LastName={recent_chat_data.last_name}
          LastChatText={recent_chat_data.last_chat_text}
          LastSeenTime={recent_chat_data.last_seen_time}
        />
      ))}
    </div>
  )
}
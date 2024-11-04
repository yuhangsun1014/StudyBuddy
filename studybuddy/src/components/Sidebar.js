import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">📘 Study Buddy</div>
      <div className="profile-icon">👤</div>
      <div className="menu-icons">
        <div>🔍</div>
        <div>👥</div>
        <div>📅</div>
        <div>📚</div>
      </div>
      <div className="logout">↩️</div>
    </div>
  );
};

export default Sidebar;

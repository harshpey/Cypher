import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img src={assets.menu_icon} alt="hamburger-menu" onClick={()=>setExtended(prev=>!prev)} />
        </div>

        <div className="new-chat">
          <img src={assets.plus_icon} alt="add-icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message-icon" />
              <p>What is React?</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChartLine, FaUsers, FaFileAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul>
        <li><Link to="/dashboard"><FaChartLine /> Dashboard</Link></li>
        <li><Link to="/leads"><FaUsers /> Leads</Link></li>
        <li><Link to="/analytics"><FaChartLine /> Analytics</Link></li>
        <li><Link to="/reports"><FaFileAlt /> Reports</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

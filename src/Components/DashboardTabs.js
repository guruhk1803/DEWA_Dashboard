import React, { useState } from 'react';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('DEWA ACADEMY');
  const navigate = useNavigate();

  const handleButtonClick = (key) => {
    if (key === 'Next tab') {
      handleAdmin();
    } else if (key === 'FLEET MANAGEMENT') {
      navigate('/fleet-management');
    } else {
      navigate(`/student-dashboard`);
    }
  };

  const handleAdmin = () => {
    navigate('/admin-dashboard');
  };

  const handleButtonChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row', // Change to 'row' for horizontal buttons
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Link to="/student-dashboard">
        <Button
          type={activeTab === 'DEWA ACADEMY' ? 'primary' : 'default'}
          size="large"
          block
          onClick={() => handleButtonChange('DEWA ACADEMY')}
          style={{
            width: '400px', // Adjust the width as needed
            height: '200px', // Adjust the height as needed
            marginRight: '16px', // Adjust the margin between buttons
            fontSize: '30px', // Adjust the font size as needed
          }}
        >
          DEWA ACADEMY
        </Button>
      </Link>
      <Link to="/fleet-management">
        <Button
          type={activeTab === 'FLEET MANAGEMENT' ? 'primary' : 'default'}
          size="large"
          block
          onClick={() => handleButtonChange('FLEET MANAGEMENT')}
          style={{
            width: '400px', // Adjust the width as needed
            height: '200px', // Adjust the height as needed
            fontSize: '30px', // Adjust the font size as needed
          }}
        >
          FLEET MANAGEMENT
        </Button>
      </Link>
      {/* Adjust the styling for additional buttons if needed */}
    </div>
  );
};

export default DashboardTabs;

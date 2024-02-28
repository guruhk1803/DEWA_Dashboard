// TabsPage.js
import React, { useState } from 'react';
import { Layout, Tabs } from 'antd';
import StudentDashboard from './StudentDashboard'; // Import the existing StudentDashboard component
import DewaAcademyContent from './DewaAcademyContent'; // Import the existing DewaAcademyContent component

const { Content } = Layout;
const { TabPane } = Tabs;

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState('DEWA ACADEMY');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <Layout className="layout">
      <Content className="content">
        <Tabs activeKey={activeTab} onChange={handleTabChange} type="card">
          <TabPane tab="DEWA ACADEMY" key="DEWA ACADEMY">
            <DewaAcademyContent />
          </TabPane>
          <TabPane tab="FLEET MANAGEMENT" key="FLEET MANAGEMENT">
            {/* You can add content for FLEET MANAGEMENT if needed */}
          </TabPane>
          <TabPane tab="Next tab" key="Next tab">
            {/* Add any content or leave it empty based on your requirements */}
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default TabsPage;

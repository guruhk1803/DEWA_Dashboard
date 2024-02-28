// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import axios from "axios"; // Add this line

// function ModuleLeft() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); // Add this line

//   const columns = [
//     {
//       title: "Module Left",
//       dataIndex: "moduleName",
//       key: "moduleName",
//     },
//     {
//       title: "Module is in Due",
//       dataIndex: "due",
//       key: "due",
//     },
//     {
//       title: "Module Expired",
//       dataIndex: "expired",
//       key: "expired",
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Dummy API response for Module Left
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//         const moduleLeftData = response.data.map((item) => ({
//           moduleName: item.title, // Adjust the data extraction accordingly
//           due: "Due Soon", // Dummy data, adjust accordingly
//           expired: "No", // Dummy data, adjust accordingly
//         }));
//         setData(moduleLeftData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return <Table dataSource={data} columns={columns} loading={loading} />; // Add loading prop
// }

// export default ModuleLeft;



import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button, Tag } from "antd";
import {
  SearchOutlined,
  DashboardOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Update the path
import "./ModuleLeft.css";

function ModuleLeft() {
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [expandedData, setExpandedData] = useState(null);
  const [loginTime, setLoginTime] = useState(null);

  const columns = [
    {
      title: selectedLanguage === 'arabic' ? 'الوحدة المتبقية' : 'Module Left',
      dataIndex: "moduleName",
      key: "moduleName",
      sorter: (a, b) => a.moduleName.localeCompare(b.moduleName),
      sortOrder: sortedInfo.columnKey === "moduleName" && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? 'الوحدة في الموعد' : 'Module is in Due',
      dataIndex: "due",
      key: "due",
    },
    {
      title: selectedLanguage === 'arabic' ? 'انتهت صلاحية الوحدة' : 'Module Expired',
      dataIndex: "expired",
      key: "expired",
    },
    {
      title: selectedLanguage === 'arabic' ? 'التفاصيل' : 'Details',
      key: "details",
      render: (text, record) => (
        <Button onClick={() => handleExpandRow(record.key)}>+</Button>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? 'تحميل كـ CSV' : 'Download as CSV',
      key: "downloadCSV",
      render: (text, record) => (
        <CSVLink data={[record]} filename={`${record.moduleName}_module_left.csv`}>
          {selectedLanguage === 'arabic' ? 'تحميل كـ CSV' : 'Download as CSV'}
        </CSVLink>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? 'تحميل كـ JSON' : 'Download as JSON',
      key: "downloadJSON",
      render: (text, record) => (
        <Button onClick={() => handleDownloadJSON(record)}>
          {selectedLanguage === 'arabic' ? 'تحميل كـ JSON' : 'Download as JSON'}
        </Button>
      ),
    },
  ];

  const handleExpandRow = (key) => {
    if (expandedRowKeys.includes(key)) {
      setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key));
      setExpandedData(null);
    } else {
      setExpandedRowKeys([...expandedRowKeys, key]);
      setExpandedData(data.find((item) => item.key === key));
    }
  };

  const handleDownloadJSON = (record) => {
    const json = JSON.stringify(record, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${record.moduleName}_module_left.json`;
    link.click();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const moduleLeftData = response.data.map((item, index) => ({
          key: index.toString(),
          moduleName: item.title,
          due: "Due Soon",
          expired: "No",
        }));
        setData(moduleLeftData);

        // Set the login time when the data is fetched
        setLoginTime(new Date());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={selectedLanguage === 'arabic' ? `البحث في ${dataIndex}` : `Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            {selectedLanguage === 'arabic' ? 'بحث' : 'Search'}
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            {selectedLanguage === 'arabic' ? 'إعادة تعيين' : 'Reset'}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
    onFilter: (value, record) =>
      dataIndex === "moduleName"
        ? record[dataIndex].toLowerCase().includes(value.toLowerCase())
        : record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById(`${dataIndex}-search`).select(), 100);
      }
    },
  });

  const columnsWithSearch = columns.map((col) => ({
    ...col,
    ...getColumnSearchProps(col.dataIndex),
  }));

  return (
    <div className="module-left-container">
      <div className="header">
        <DashboardOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
        <img src="/logos/Government_of_Dubai_logo.svg.png" alt="Module Logo" className="logo" />
        <div className="header-info">
          <h2 className="header-title">
            {selectedLanguage === 'arabic' ? 'الوحدات المتبقية' : 'Module Left'}
          </h2>
          <p className="header-description">
            {selectedLanguage === 'arabic'
              ? 'مرحبًا بك في لوحة القيادة. استكشف الوحدات المكتملة وتتبع التقدم.'
              : 'Welcome to the dashboard. Explore the completed modules and track progress.'}
          </p>
          <ReadOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </div>
        {/* <Link to="/admin-login">
          <Button type="primary" size="large">
            {selectedLanguage === 'arabic' ? 'العودة إلى تسجيل الإدارة' : 'Back to Admin Login'}
          </Button>
        </Link> */}
      </div>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder={selectedLanguage === 'arabic' ? 'بحث' : 'Search'}
          onSearch={(value) => setSearchText(value)}
          style={{ width: 200 }}
        />
      </Space>
      <Table
        dataSource={data}
        columns={columnsWithSearch}
        loading={loading}
        onChange={handleChange}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.moduleName} details here</p>
          ),
        }}
      />
      <p style={{ textAlign: 'right', marginTop: 16 }}>
        {selectedLanguage === 'arabic' ? 'تم تسجيل الدخول في:' : 'Logged in at:'} {loginTime && loginTime.toLocaleString()}
      </p>
    </div>
  );
}

export default ModuleLeft;

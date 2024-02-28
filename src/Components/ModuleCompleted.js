// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import axios from "axios"; // Add this line

// function ModuleCompleted() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); // Add this line

//   const columns = [
//     {
//       title: "Student Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Module Completed",
//       dataIndex: "moduleCompleted",
//       key: "moduleCompleted",
//     },
//     {
//       title: "Percentage of Module",
//       dataIndex: "percentage",
//       key: "percentage",
//     },
//     {
//       title: "Re-take of Module",
//       dataIndex: "retake",
//       key: "retake",
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Dummy API response for Module Completed
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         const moduleCompletedData = response.data.map((item) => ({
//           name: item.title, // Adjust the data extraction accordingly
//           moduleCompleted: "Module A", // Dummy data, adjust accordingly
//           percentage: 80, // Dummy data, adjust accordingly
//           retake: "Yes", // Dummy data, adjust accordingly
//         }));
//         setData(moduleCompletedData);
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

// export default ModuleCompleted;
// import React, { useEffect, useState } from "react";
// import { Table, Space, Button, Modal } from "antd";
// import axios from "axios";

// function ModuleCompleted() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [sortedInfo, setSortedInfo] = useState({});
//   const [expandedRowKeys, setExpandedRowKeys] = useState([]);
//   const [expandedData, setExpandedData] = useState(null);

//   const columns = [
//     {
//       title: "Student Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name),
//       sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
//     },
//     {
//       title: "Module Completed",
//       dataIndex: "moduleCompleted",
//       key: "moduleCompleted",
//     },
//     {
//       title: "Percentage of Module",
//       dataIndex: "percentage",
//       key: "percentage",
//       sorter: (a, b) => a.percentage - b.percentage,
//       sortOrder: sortedInfo.columnKey === "percentage" && sortedInfo.order,
//     },
//     {
//       title: "Re-take of Module",
//       dataIndex: "retake",
//       key: "retake",
//       filters: [
//         { text: "Yes", value: "Yes" },
//         { text: "No", value: "No" },
//       ],
//       onFilter: (value, record) => record.retake.includes(value),
//     },
//     {
//       title: "Details",
//       key: "details",
//       render: (text, record) => (
//         <Button onClick={() => handleExpandRow(record.key)}>+</Button>
//       ),
//     },
//   ];

//   const handleExpandRow = (key) => {
//     if (expandedRowKeys.includes(key)) {
//       // Collapse the row
//       setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key));
//       setExpandedData(null);
//     } else {
//       // Expand the row
//       setExpandedRowKeys([...expandedRowKeys, key]);
//       setExpandedData(data.find((item) => item.key === key));
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         const moduleCompletedData = response.data.map((item, index) => ({
//           key: index.toString(),
//           name: item.title,
//           moduleCompleted: "Module A",
//           percentage: 80,
//           retake: "Yes",
//         }));
//         setData(moduleCompletedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Table
//       dataSource={data}
//       columns={columns}
//       expandedRowKeys={expandedRowKeys}
//       expandable={{
//         expandedRowRender: (record) => (
//           <p style={{ margin: 0 }}>{expandedData ? `Details: ${expandedData.name}` : ""}</p>
//         ),
//       }}
//       loading={loading}
//       onChange={(pagination, filters, sorter) => setSortedInfo(sorter)}
//       onHeaderCell={(column) => ({
//         width: column.dataIndex === "name" ? 200 : undefined,
//         onResize: (value) => {
//           // Resize logic here
//         },
//       })}
//     />
//   );
// }

// export default ModuleCompleted;


import React, { useEffect, useState } from "react";
import { Table, Button, Input, Space } from "antd";
import { SearchOutlined, DashboardOutlined, ReadOutlined } from "@ant-design/icons";
import axios from "axios";
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import "./ModuleCompleted.css";

function ModuleCompleted() {
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
      title: selectedLanguage === 'arabic' ? 'اسم الطالب' : 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
      sorter: (a, b) => a.studentName.localeCompare(b.studentName),
      sortOrder: sortedInfo.columnKey === 'studentName' && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? 'الوحدة المكتملة' : 'Module Completed',
      dataIndex: 'moduleCompleted',
      key: 'moduleCompleted',
      filters: [
        { text: 'Module A', value: 'Module A' },
        { text: 'Module B', value: 'Module B' },
      ],
      onFilter: (value, record) => record.moduleCompleted.includes(value),
    },
    {
      title: selectedLanguage === 'arabic' ? 'نسبة الوحدة' : 'Percentage of Module',
      dataIndex: 'percentage',
      key: 'percentage',
      sorter: (a, b) => a.percentage - b.percentage,
      sortOrder: sortedInfo.columnKey === 'percentage' && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? 'تقييم الطالب' : 'Student Rating',
      dataIndex: 'studentRating',
      key: 'studentRating',
      sorter: (a, b) => a.studentRating - b.studentRating,
      sortOrder: sortedInfo.columnKey === 'studentRating' && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? 'عدد المرات الإعادة' : 'Number of Retakes',
      dataIndex: 'retakeCount',
      key: 'retakeCount',
      sorter: (a, b) => a.retakeCount - b.retakeCount,
      sortOrder: sortedInfo.columnKey === 'retakeCount' && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? 'تفاصيل' : 'Details',
      key: 'details',
      render: (text, record) => (
        <Button onClick={() => handleExpandRow(record.key)}>+</Button>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? 'تحميل كـ CSV' : 'Download as CSV',
      key: 'downloadCSV',
      render: (text, record) => (
        <CSVLink data={[record]} filename={`${record.studentName}_module_completed.csv`}>
          {selectedLanguage === 'arabic' ? 'تحميل كـ CSV' : 'Download as CSV'}
        </CSVLink>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? 'تحميل كـ JSON' : 'Download as JSON',
      key: 'downloadJSON',
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
    link.download = `${record.studentName}_module_completed.json`;
    link.click();
  };

  const handleSearch = (dataIndex, value) => {
    const lowerCaseValue = value.toLowerCase();
    const filteredData = data.filter(item =>
      item[dataIndex].toLowerCase().includes(lowerCaseValue)
    );
    setData(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the API endpoint with the appropriate one for student learning metrics
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const moduleCompletedData = response.data.map((item, index) => ({
          key: index.toString(),
          studentName: item.name, // Replace with the actual field for student name
          moduleCompleted: "Module A",
          percentage: 80,
          studentRating: 4.5, // Replace with the actual field for student rating
          retakeCount: 2, // Replace with the actual field for retake count
        }));
        setData(moduleCompletedData);

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

  return (
    <div className="module-assigned-container">
      <div className="header">
        <DashboardOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
        <img src="/logos/Government_of_Dubai_logo.svg.png" alt="Module Logo" className="logo" />
        <div className="header-info">
          <h2 className="header-title">
            {selectedLanguage === 'arabic' ? 'الوحدات المكتملة' : 'Completed Modules'}
          </h2>
          <p className="header-description">
            {selectedLanguage === 'arabic'
              ? 'مرحبًا بك في لوحة التحكم. استكشف الوحدات المكتملة وتتبع التقدم.'
              : 'Welcome to the dashboard. Explore the completed modules and track progress.'}
          </p>
          <ReadOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </div>
        {/* Back to Admin Login button */}
        {/* <Link to="/admin-login">
          <Button type="primary" size="large" style={{ marginLeft: 'auto' }}>
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
        columns={columns}
        loading={loading}
        onChange={(pagination, filters, sorter) => setSortedInfo(sorter)}
        expandable={{
          expandedRowRender: (record) => <p style={{ margin: 0 }}>{expandedData ? `Details: ${expandedData.name}` : ""}</p>,
        }}
      />
      {/* Displaying Last Login Timestamp */}
      <p style={{ textAlign: 'right', marginTop: 16 }}>
        {selectedLanguage === 'arabic' ? 'تم تسجيل الدخول في:' : 'Logged in at:'} {loginTime && loginTime.toLocaleString()}
      </p>
    </div>
  );
}

export default ModuleCompleted;

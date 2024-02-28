// import React, { useEffect, useState } from "react";
// import { Table, Input, Space, Button } from "antd"; // Add Button and SearchOutlined imports
// import { SearchOutlined } from "@ant-design/icons"; // Add SearchOutlined import
// import axios from "axios";

// function ModuleAssigned() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState(""); // Add this line for search
//   const [sortedInfo, setSortedInfo] = useState({}); // Add this line for sorting

//   const columns = [
//     {
//       title: "Student Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name), // Add this line for sorting
//       sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
//     },
//     {
//       title: "Module Assigned",
//       dataIndex: "moduleAssigned",
//       key: "moduleAssigned",
//       sorter: (a, b) => a.moduleAssigned.localeCompare(b.moduleAssigned),
//       sortOrder: sortedInfo.columnKey === "moduleAssigned" && sortedInfo.order,
//     },
//     {
//       title: "Module Number",
//       dataIndex: "moduleNumber",
//       key: "moduleNumber",
//       sorter: (a, b) => a.moduleNumber - b.moduleNumber,
//       sortOrder: sortedInfo.columnKey === "moduleNumber" && sortedInfo.order,
//     },
//     {
//       title: "Module Difficulty",
//       dataIndex: "moduleDifficulty",
//       key: "moduleDifficulty",
//       sorter: (a, b) => a.moduleDifficulty - b.moduleDifficulty,
//       sortOrder: sortedInfo.columnKey === "moduleDifficulty" && sortedInfo.order,
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         const moduleAssignedData = response.data.map((item) => ({
//           name: item.name,
//           moduleAssigned: "Module X", // Dummy data, adjust accordingly
//           moduleNumber: 1, // Dummy data, adjust accordingly
//           moduleDifficulty: "Easy", // Dummy data, adjust accordingly
//         }));
//         setData(moduleAssignedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Add search logic
//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText("");
//   };

//   // Add sorting logic
//   const handleChange = (pagination, filters, sorter) => {
//     setSortedInfo(sorter);
//   };

//   return (
//     <div>
//       <Space style={{ marginBottom: 16 }}>
//         <Input.Search
//           placeholder="Search"
//           onSearch={(value) => setSearchText(value)}
//           style={{ width: 200 }}
//         />
//       </Space>
//       <Table
//         dataSource={data}
//         columns={columns}
//         loading={loading}
//         onChange={handleChange}
//         // Add search and filter props
//         onFilter={(value, record) =>
//           record.name.toLowerCase().includes(value.toLowerCase())
//         }
//         onFilterDropdown={(filterProps) => (
//           <div style={{ padding: 8 }}>
//             <Input
//               placeholder={`Search ${filterProps.dataIndex}`}
//               value={searchText}
//               onChange={(e) =>
//                 filterProps.setSelectedKeys(e.target.value ? [e.target.value] : [])
//               }
//               onPressEnter={() => handleSearch(filterProps.selectedKeys, filterProps.confirm, filterProps.dataIndex)}
//               style={{ width: 188, marginBottom: 8, display: 'block' }}
//             />
//             <Space>
//               <Button
//                 type="primary"
//                 onClick={() => handleSearch(filterProps.selectedKeys, filterProps.confirm, filterProps.dataIndex)}
//                 icon={<SearchOutlined />}
//                 size="small"
//                 style={{ width: 90 }}
//               >
//                 Search
//               </Button>
//               <Button
//                 onClick={() => handleReset(filterProps.clearFilters)}
//                 size="small"
//                 style={{ width: 90 }}
//               >
//                 Reset
//               </Button>
//             </Space>
//           </div>
//         )}
//         expandable={{
//           expandedRowRender: record => <p style={{ margin: 0 }}>{record.name} details here</p>,
//         }}
//       />
//     </div>
//   );
// }

// export default ModuleAssigned;



// import React, { useEffect, useState } from "react";
// import { Table, Input, Space, Button, Tag, Tooltip } from "antd";
// import { SearchOutlined, InfoCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
// import axios from "axios";

// function ModuleAssigned() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [sortedInfo, setSortedInfo] = useState({});

//   const columns = [
//     {
//       title: "Student Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name),
//       sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
//     },
//     {
//       title: "Module Assigned",
//       dataIndex: "moduleAssigned",
//       key: "moduleAssigned",
//       sorter: (a, b) => a.moduleAssigned.localeCompare(b.moduleAssigned),
//       sortOrder: sortedInfo.columnKey === "moduleAssigned" && sortedInfo.order,
//       render: (text) => (
//         <Tag color="geekblue" key={text}>
//           {text}
//         </Tag>
//       ),
//     },
//     {
//       title: "Module Number",
//       dataIndex: "moduleNumber",
//       key: "moduleNumber",
//       sorter: (a, b) => a.moduleNumber - b.moduleNumber,
//       sortOrder: sortedInfo.columnKey === "moduleNumber" && sortedInfo.order,
//     },
//     {
//       title: "Module Difficulty",
//       dataIndex: "moduleDifficulty",
//       key: "moduleDifficulty",
//       sorter: (a, b) => a.moduleDifficulty - b.moduleDifficulty,
//       sortOrder: sortedInfo.columnKey === "moduleDifficulty" && sortedInfo.order,
//       render: (text) => (
//         <Tag color={text === "Easy" ? "green" : text === "Medium" ? "orange" : "red"} key={text}>
//           {text}
//         </Tag>
//       ),
//     },
//     {
//       title: "Module Assigned Count",
//       key: "moduleAssignedCount",
//       render: (text, record) => (
//         <Tooltip title={`Modules Assigned: ${record.moduleAssignedCount}`}>
//           <InfoCircleOutlined style={{ color: "#1890ff" }} />
//         </Tooltip>
//       ),
//     },
//     {
//       title: "Module Completed Count",
//       key: "moduleCompletedCount",
//       render: (text, record) => (
//         <Tooltip title={`Modules Completed: ${record.moduleCompletedCount}`}>
//           <CheckCircleOutlined style={{ color: "#52c41a" }} />
//         </Tooltip>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         const moduleAssignedData = response.data.map((item) => ({
//           name: item.name,
//           moduleAssigned: "Module X",
//           moduleNumber: 1,
//           moduleDifficulty: "Easy",
//           moduleAssignedCount: 10, // Dummy data, adjust accordingly
//           moduleCompletedCount: 100, // Dummy data, adjust accordingly
//         }));
//         setData(moduleAssignedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText("");
//   };

//   const handleChange = (pagination, filters, sorter) => {
//     setSortedInfo(sorter);
//   };

//   return (
//     <div>
//       <Space style={{ marginBottom: 16 }}>
//         <Input.Search
//           placeholder="Search"
//           onSearch={(value) => setSearchText(value)}
//           style={{ width: 200 }}
//         />
//       </Space>
//       <Table
//         dataSource={data}
//         columns={columns}
//         loading={loading}
//         onChange={handleChange}
//         onFilter={(value, record) =>
//           record.name.toLowerCase().includes(value.toLowerCase())
//         }
//         onFilterDropdown={(filterProps) => (
//           <div style={{ padding: 8 }}>
//             <Input
//               placeholder={`Search ${filterProps.dataIndex}`}
//               value={searchText}
//               onChange={(e) =>
//                 filterProps.setSelectedKeys(e.target.value ? [e.target.value] : [])
//               }
//               onPressEnter={() => handleSearch(filterProps.selectedKeys, filterProps.confirm, filterProps.dataIndex)}
//               style={{ width: 188, marginBottom: 8, display: 'block' }}
//             />
//             <Space>
//               <Button
//                 type="primary"
//                 onClick={() => handleSearch(filterProps.selectedKeys, filterProps.confirm, filterProps.dataIndex)}
//                 icon={<SearchOutlined />}
//                 size="small"
//                 style={{ width: 90 }}
//               >
//                 Search
//               </Button>
//               <Button
//                 onClick={() => handleReset(filterProps.clearFilters)}
//                 size="small"
//                 style={{ width: 90 }}
//               >
//                 Reset
//               </Button>
//             </Space>
//           </div>
//         )}
//         expandable={{
//           expandedRowRender: (record) => (
//             <p style={{ margin: 0 }}>{record.name} details here</p>
//           ),
//         }}
//       />
//     </div>
//   );
// }

// export default ModuleAssigned;





// import React, { useEffect, useState } from "react";
// import { Table, Input, Space, Button, Tag, Tooltip } from "antd";
// import {
//   SearchOutlined,
//   InfoCircleOutlined,
//   CheckCircleOutlined,
//   DashboardOutlined,
//   ReadOutlined,
// } from "@ant-design/icons";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { useLanguage } from './LanguageContext';
// import { CSVLink } from 'react-csv';  // Added CSVLink
// import "./ModuleAssignedAdmin.css";

// function ModuleAssignedAdmin() {
//   const { selectedLanguage } = useLanguage();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [sortedInfo, setSortedInfo] = useState({});
//   const [loginTime, setLoginTime] = useState(null);

//   const columns = [
//     {
//       title: selectedLanguage === 'arabic' ? "اسم الطالب" : "Student Name",
//       dataIndex: "studentName",
//       key: "studentName",
//       sorter: (a, b) => a.studentName.localeCompare(b.studentName),
//       sortOrder: sortedInfo.columnKey === "studentName" && sortedInfo.order,
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "الوحدة المكلفة" : "Module Assigned",
//       dataIndex: "moduleAssigned",
//       key: "moduleAssigned",
//       sorter: (a, b) => a.moduleAssigned.localeCompare(b.moduleAssigned),
//       sortOrder: sortedInfo.columnKey === "moduleAssigned" && sortedInfo.order,
//       render: (text) => (
//         <Tag color="geekblue" key={text}>
//           {text}
//         </Tag>
//       ),
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "رقم الوحدة" : "Module Number",
//       dataIndex: "moduleNumber",
//       key: "moduleNumber",
//       sorter: (a, b) => a.moduleNumber - b.moduleNumber,
//       sortOrder: sortedInfo.columnKey === "moduleNumber" && sortedInfo.order,
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "صعوبة الوحدة" : "Module Difficulty",
//       dataIndex: "moduleDifficulty",
//       key: "moduleDifficulty",
//       sorter: (a, b) => a.moduleDifficulty.localeCompare(b.moduleDifficulty),
//       sortOrder: sortedInfo.columnKey === "moduleDifficulty" && sortedInfo.order,
//       render: (text) => (
//         <Tag
//           color={text === "Easy" ? "green" : text === "Medium" ? "orange" : "red"}
//           key={text}
//         >
//           {text}
//         </Tag>
//       ),
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "عدد الوحدات المكلفة" : "Module Assigned Count",
//       dataIndex: "moduleAssignedCount",
//       key: "moduleAssignedCount",
//       sorter: (a, b) => a.moduleAssignedCount - b.moduleAssignedCount,
//       render: (text, record) => (
//         <Tooltip title={`${selectedLanguage === 'arabic' ? 'الوحدات المكلفة' : 'Modules Assigned'}: ${record.moduleAssignedCount}`}>
//           <InfoCircleOutlined style={{ color: "#1890ff" }} />
//         </Tooltip>
//       ),
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "عدد الوحدات المكتملة" : "Module Completed Count",
//       dataIndex: "moduleCompletedCount",
//       key: "moduleCompletedCount",
//       sorter: (a, b) => a.moduleCompletedCount - b.moduleCompletedCount,
//       render: (text, record) => (
//         <Tooltip title={`${selectedLanguage === 'arabic' ? 'الوحدات المكتملة' : 'Modules Completed'}: ${record.moduleCompletedCount}`}>
//           <CheckCircleOutlined style={{ color: "#52c41a" }} />
//         </Tooltip>
//       ),
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "حالة الانجاز" : "Completion Status",
//       dataIndex: "completionStatus",
//       key: "completionStatus",
//       render: (text, record) => (
//         <Tooltip title={`${selectedLanguage === 'arabic' ? 'حالة الانجاز' : 'Completion Status'}: ${record.completionStatus}`}>
//           {record.completionStatus === "Completed" ? (
//             <CheckCircleOutlined style={{ color: "#52c41a" }} />
//           ) : (
//             <InfoCircleOutlined style={{ color: "#1890ff" }} />
//           )}
//         </Tooltip>
//       ),
//     },
//     // Additional columns for Admin
//     {
//       title: selectedLanguage === 'arabic' ? "تاريخ بدء الوحدة" : "Module Start Date",
//       dataIndex: "moduleStartDate",
//       key: "moduleStartDate",
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "تاريخ انتهاء الوحدة" : "Module End Date",
//       dataIndex: "moduleEndDate",
//       key: "moduleEndDate",
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "وقت بدء الوحدة" : "Module Start Time",
//       dataIndex: "moduleStartTime",
//       key: "moduleStartTime",
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "وقت انتهاء الوحدة" : "Module End Time",
//       dataIndex: "moduleEndTime",
//       key: "moduleEndTime",
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "تحميل كـ CSV" : "Download as CSV",
//       key: "downloadCSV",
//       render: (text, record) => (
//         <CSVLink data={[record]} filename={`${record.studentName}_module_assigned.csv`}>
//           {selectedLanguage === 'arabic' ? 'تحميل كـ CSV' : 'Download as CSV'}
//         </CSVLink>
//       ),
//     },
//     {
//       title: selectedLanguage === 'arabic' ? "تحميل كـ JSON" : "Download as JSON",
//       key: "downloadJSON",
//       render: (text, record) => (
//         <Button onClick={() => handleDownloadJSON(record)}>
//           {selectedLanguage === 'arabic' ? 'تحميل كـ JSON' : 'Download as JSON'}
//         </Button>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace the API endpoint with the appropriate one for student learning metrics
//         const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
//         const moduleAssignedData = response.data.map((item, index) => ({
//           studentName: item.name,
//           moduleAssigned: "Module X",
//           moduleNumber: 1,
//           moduleDifficulty: "Easy",
//           moduleAssignedCount: 10,
//           moduleCompletedCount: 100,
//           completionStatus: "Incomplete", // Default status
//           moduleStartDate: "2022-01-01", // Dummy value
//           moduleEndDate: "2022-01-10", // Dummy value
//           moduleStartTime: "09:00 AM", // Dummy value
//           moduleEndTime: "12:00 PM", // Dummy value
//         }));
//         setData(moduleAssignedData);

//         // Set the login time when the data is fetched
//         setLoginTime(new Date());
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText("");
//   };

//   const handleChange = (pagination, filters, sorter) => {
//     setSortedInfo(sorter);
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           placeholder={`${selectedLanguage === 'arabic' ? 'ابحث في' : 'Search'} ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{ width: 188, marginBottom: 8, display: "block" }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90 }}
//           >
//             {selectedLanguage === 'arabic' ? 'ابحث' : 'Search'}
//           </Button>
//           <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//             {selectedLanguage === 'arabic' ? 'إعادة تعيين' : 'Reset'}
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
//     onFilter: (value, record) =>
//       dataIndex === "studentName"
//         ? record[dataIndex].toLowerCase().includes(value.toLowerCase())
//         : record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownVisibleChange: (visible) => {
//       if (visible) {
//         setTimeout(() => document.getElementById(`${dataIndex}-search`).select(), 100);
//       }
//     },
//   });

//   const columnsWithSearch = columns.map((col) => ({
//     ...col,
//     ...getColumnSearchProps(col.dataIndex),
//   }));

//   const handleDownloadJSON = (record) => {
//     const json = JSON.stringify(record, null, 2);
//     const blob = new Blob([json], { type: 'application/json' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `${record.studentName}_module_assigned.json`;
//     link.click();
//   };

//   return (
//     <div className="module-assigned-container">
//       <div className="header">
//         <DashboardOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
//         <img src="/logos/Government_of_Dubai_logo.svg.png" alt="Module Logo" className="logo" />
//         <div className="header-info">
//           <h2 className="header-title">
//             {selectedLanguage === 'arabic' ? 'الوحدات المكلفة للإدارة' : 'Assigned Modules'}
//           </h2>
//           <p className="header-description">
//             {selectedLanguage === 'arabic'
//               ? 'مرحبًا بك في لوحة التحكم الخاصة بالإدارة. استكشف الوحدات المكلفة وتتبع التقدم.'
//               : 'Welcome to the admin dashboard. Explore the assigned modules and track progress.'}
//           </p>
//           <ReadOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
//         </div>
//         {/* Back to Admin Login button */}
//         {/* <Link to="/admin-login">
//           <Button type="primary" size="large" style={{ marginLeft: 'auto' }}>
//             {selectedLanguage === 'arabic' ? 'العودة إلى تسجيل الإدارة' : 'Back to Admin Login'}
//           </Button>
//         </Link> */}
//       </div>
//       <Space style={{ marginBottom: 16 }}>
//         <Input.Search
//           placeholder={selectedLanguage === 'arabic' ? 'بحث' : 'Search'}
//           onSearch={(value) => setSearchText(value)}
//           style={{ width: 200 }}
//         />
//       </Space>
//       <Table
//         dataSource={data}
//         columns={columnsWithSearch}
//         loading={loading}
//         onChange={handleChange}
//         expandable={{
//           expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.studentName} details here</p>,
//         }}
//         footer={() => (
//           <p style={{ textAlign: 'right', marginTop: 16 }}>
//             {selectedLanguage === 'arabic' ? 'تم تسجيل الدخول في:' : 'Logged in at:'} {loginTime && loginTime.toLocaleString()}
//           </p>
//         )}
//       />
//     </div>
//   );
// }

// export default ModuleAssignedAdmin;


import React, { useEffect, useState } from "react";
import { Table, Space, Tag, Input, Button } from "antd";
import { SearchOutlined, DashboardOutlined, ReadOutlined, FilterOutlined } from "@ant-design/icons";
import axios from "axios";
import { useLanguage } from './LanguageContext';
import "./ModuleAssignedAdmin.css";

function ModuleAssignedAdmin() {
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
  const [loginTime, setLoginTime] = useState(null);
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`${selectedLanguage === 'arabic' ? 'ابحث في' : 'Search'} ${dataIndex}`}
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
            {selectedLanguage === 'arabic' ? 'ابحث' : 'Search'}
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            {selectedLanguage === 'arabic' ? 'إعادة تعيين' : 'Reset'}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <FilterOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      dataIndex === "studentName"
        ? record[dataIndex].toLowerCase().includes(value.toLowerCase())
        : record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById(`${dataIndex}-search`).select(), 100);
      }
    },
  });



  const columns = [
    {
      title: selectedLanguage === 'arabic' ? "اسم الطالب" : "Student Name",
      dataIndex: "studentName",
      key: "studentName",
      sorter: (a, b) => a.studentName.localeCompare(b.studentName),
      sortOrder: sortedInfo.columnKey === "studentName" && sortedInfo.order,
      ...getColumnSearchProps("studentName"),
    },
    {
      title: selectedLanguage === 'arabic' ? "رقم الطالب" : "Student ID",
      dataIndex: "studentID",
      key: "studentID",
      sorter: (a, b) => a.studentID.localeCompare(b.studentID),
      ...getColumnSearchProps("studentID"),
    },
    {
      title: selectedLanguage === 'arabic' ? "اسم الدورة" : "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      sorter: (a, b) => a.courseName.localeCompare(b.courseName),
      ...getColumnSearchProps("courseName"),
    },
    {
      title: selectedLanguage === 'arabic' ? "ناجح/رسوب/غير متاح" : "Course Passed",
      dataIndex: "coursePassed",
      key: "coursePassed",
      render: (text, record) => (
        <Tag color={text === "PASS" ? "green" : text === "FAIL" ? "red" : "gray"} key={text}>
          {text}
        </Tag>
      ),
      sorter: (a, b) => a.coursePassed.localeCompare(b.coursePassed),
      sortOrder: sortedInfo.columnKey === "coursePassed" && sortedInfo.order,
      ...getColumnSearchProps("coursePassed"),
    },
    {
      title: selectedLanguage === 'arabic' ? "الوقت المستغرق" : "Time Taken",
      dataIndex: "timeTaken",
      key: "timeTaken",
      sorter: (a, b) => a.timeTaken.localeCompare(b.timeTaken),
      sortOrder: sortedInfo.columnKey === "timeTaken" && sortedInfo.order,
      ...getColumnSearchProps("timeTaken"),
    },
    {
      title: selectedLanguage === 'arabic' ? "وقت الانجاز" : "Completion Time",
      dataIndex: "completionTime",
      key: "completionTime",
      sorter: (a, b) => a.completionTime.localeCompare(b.completionTime),
      sortOrder: sortedInfo.columnKey === "completionTime" && sortedInfo.order,
      ...getColumnSearchProps("completionTime"),
    },
    {
      title: selectedLanguage === 'arabic' ? "تاريخ الانجاز" : "Completion Date",
      dataIndex: "completionDate",
      key: "completionDate",
      sorter: (a, b) => a.completionDate.localeCompare(b.completionDate),
      sortOrder: sortedInfo.columnKey === "completionDate" && sortedInfo.order,
      ...getColumnSearchProps("completionDate"),
    },
    {
      title: selectedLanguage === 'arabic' ? "رقم الوحدة" : "Module Number",
      dataIndex: "moduleNumber",
      key: "moduleNumber",
      sorter: (a, b) => a.moduleNumber - b.moduleNumber,
      ...getColumnSearchProps("moduleNumber"),
    },
    {
      title: selectedLanguage === 'arabic' ? "حالة الانجاز" : "Completion Status",
      dataIndex: "completionStatus",
      key: "completionStatus",
      render: (text, record) => (
        <Tag title={`${selectedLanguage === 'arabic' ? 'حالة الانجاز' : 'Completion Status'}: ${record.completionStatus}`}>
          {record.completionStatus === "Complete" ? "Complete" : "Incomplete"}
        </Tag>
      ),
      sorter: (a, b) => a.completionStatus.localeCompare(b.completionStatus),
      sortOrder: sortedInfo.columnKey === "completionStatus" && sortedInfo.order,
      ...getColumnSearchProps("completionStatus"),
    },
    {
      title: selectedLanguage === 'arabic' ? "عدد المحاولات" : "Number of Attempts",
      dataIndex: "numberOfAttempts",
      key: "numberOfAttempts",
      sorter: (a, b) => a.numberOfAttempts - b.numberOfAttempts,
      sortOrder: sortedInfo.columnKey === "numberOfAttempts" && sortedInfo.order,
      ...getColumnSearchProps("numberOfAttempts"),
    },
  ];
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const moduleAssignedData = response.data.map((item, index) => ({
          studentName: item.name,
          studentID: `ID${index + 1}`,
          courseName: `C${index + 1}`,
          coursePassed: index % 2 === 0 ? "PASS" : "FAIL",
          timeTaken: `${index} Hrs ${index}mins`,
          completionTime: `${20 + index}:30`,
          completionDate: `20 Feb ${2024 + index}`,
          moduleNumber: index + 1,
          completionStatus: index % 2 === 0 ? "Complete" : "Incomplete",
          numberOfAttempts: Math.floor(Math.random() * 3) + 1, // Random number between 1 and 3
        }));
        setData(moduleAssignedData);

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

  const handleCommonSearch = (value) => {
    setSearchText(value);
  };

  const commonSearchProps = {
    placeholder: selectedLanguage === 'arabic' ? 'بحث' : 'Search',
    onSearch: handleCommonSearch,
    style: { width: 200 },
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  
  const columnsWithSearch = columns.map((col) => ({
    ...col,
    ...getColumnSearchProps(col.dataIndex),
  }));

  return (
    <div className="module-assigned-container">
      <div className="header">
        <DashboardOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
        <div className="header-info">
          <h2 className="header-title">
            {selectedLanguage === 'arabic' ? 'الوحدات المكلفة للإدارة' : 'Assigned Modules'}
          </h2>
          <p className="header-description">
            {selectedLanguage === 'arabic'
              ? 'مرحبًا بك في لوحة التحكم الخاصة بالإدارة. استكشف الوحدات المكلفة وتتبع التقدم.'
              : 'Welcome to the admin dashboard. Explore the assigned modules and track progress.'}
          </p>
          <ReadOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </div>
      </div>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search {...commonSearchProps} />
      </Space>
      <Table
        dataSource={data.filter((record) =>
          Object.values(record).some((value) =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
          )
        )}
        columns={columns}
        loading={loading}
        onChange={handleChange}
        expandable={{
          expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.studentName} details here</p>,
        }}
        footer={() => (
          <p style={{ textAlign: 'right', marginTop: 16 }}>
            {selectedLanguage === 'arabic' ? 'تم تسجيل الدخول في:' : 'Logged in at:'} {loginTime && loginTime.toLocaleString()}
          </p>
        )}
      />
    </div>
  );
}

export default ModuleAssignedAdmin;
// import React, { useEffect, useState } from "react";
// import { Table, Input, Space, Button } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import axios from "axios";

// function ModuleAssigned() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [sortedInfo, setSortedInfo] = useState({});

//   const columns = [
//     {
//       title: "Student Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name),
//       sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
//     },
//     {
//       title: "Module Assigned",
//       dataIndex: "moduleAssigned",
//       key: "moduleAssigned",
//       sorter: (a, b) => a.moduleAssigned.localeCompare(b.moduleAssigned),
//       sortOrder: sortedInfo.columnKey === "moduleAssigned" && sortedInfo.order,
//     },
//     {
//       title: "Module Number",
//       dataIndex: "moduleNumber",
//       key: "moduleNumber",
//       sorter: (a, b) => a.moduleNumber - b.moduleNumber,
//       sortOrder: sortedInfo.columnKey === "moduleNumber" && sortedInfo.order,
//     },
//     {
//       title: "Module Difficulty",
//       dataIndex: "moduleDifficulty",
//       key: "moduleDifficulty",
//       sorter: (a, b) => a.moduleDifficulty - b.moduleDifficulty,
//       sortOrder: sortedInfo.columnKey === "moduleDifficulty" && sortedInfo.order,
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <Button type="primary" onClick={() => handleDownload(record)}>
//           Download
//         </Button>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         const moduleAssignedData = response.data.map((item) => ({
//           name: item.name,
//           moduleAssigned: "Module X",
//           moduleNumber: 1,
//           moduleDifficulty: "Easy",
//         }));
//         setData(moduleAssignedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDownload = (record) => {
//     // Implement download logic here
//     console.log("Downloading log for student:", record.name);
//   };

//   return (
//     <div>
//       <Space style={{ marginBottom: 16 }}>
//         <Input.Search
//           placeholder="Search"
//           onSearch={(value) => setSearchText(value)}
//           style={{ width: 200 }}
//         />
//       </Space>
//       <Table
//         dataSource={data}
//         columns={columns}
//         loading={loading}
//         onChange={(pagination, filters, sorter) => setSortedInfo(sorter)}
//         onFilter={(value, record) =>
//           record.name.toLowerCase().includes(value.toLowerCase())
//         }
//         onFilterDropdown={(filterProps) => (
//           <div style={{ padding: 8 }}>
//             <Input
//               placeholder={`Search ${filterProps.dataIndex}`}
//               value={searchText}
//               onChange={(e) =>
//                 filterProps.setSelectedKeys(e.target.value ? [e.target.value] : [])
//               }
//               onPressEnter={() =>
//                 handleSearch(filterProps.selectedKeys, filterProps.confirm, filterProps.dataIndex)
//               }
//               style={{ width: 188, marginBottom: 8, display: "block" }}
//             />
//             <Space>
//               <Button
//                 type="primary"
//                 onClick={() =>
//                   handleSearch(filterProps.selectedKeys, filterProps.confirm, filterProps.dataIndex)
//                 }
//                 icon={<SearchOutlined />}
//                 size="small"
//                 style={{ width: 90 }}
//               >
//                 Search
//               </Button>
//               <Button
//                 onClick={() => handleReset(filterProps.clearFilters)}
//                 size="small"
//                 style={{ width: 90 }}
//               >
//                 Reset
//               </Button>
//             </Space>
//           </div>
//         )}
//         expandable={{
//           expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.name} details here</p>,
//         }}
//       />
//     </div>
//   );
// }

// export default ModuleAssigned;

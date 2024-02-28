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





import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button, Tag, Tooltip } from "antd";
import {
  SearchOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useLanguage } from './LanguageContext'; // Update the path
import "./ModuleAssigned.css";

function ModuleAssigned() {
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
  const [loginTime, setLoginTime] = useState(null);

  const columns = [
    {
      title: selectedLanguage === 'arabic' ? "اسم الطالب" : "Student Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? "الوحدة المكلفة" : "Module Assigned",
      dataIndex: "moduleAssigned",
      key: "moduleAssigned",
      sorter: (a, b) => a.moduleAssigned.localeCompare(b.moduleAssigned),
      sortOrder: sortedInfo.columnKey === "moduleAssigned" && sortedInfo.order,
      render: (text) => (
        <Tag color="geekblue" key={text}>
          {text}
        </Tag>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? "رقم الوحدة" : "Module Number",
      dataIndex: "moduleNumber",
      key: "moduleNumber",
      sorter: (a, b) => a.moduleNumber - b.moduleNumber,
      sortOrder: sortedInfo.columnKey === "moduleNumber" && sortedInfo.order,
    },
    {
      title: selectedLanguage === 'arabic' ? "صعوبة الوحدة" : "Module Difficulty",
      dataIndex: "moduleDifficulty",
      key: "moduleDifficulty",
      sorter: (a, b) => a.moduleDifficulty.localeCompare(b.moduleDifficulty),
      sortOrder: sortedInfo.columnKey === "moduleDifficulty" && sortedInfo.order,
      render: (text) => (
        <Tag
          color={text === "Easy" ? "green" : text === "Medium" ? "orange" : "red"}
          key={text}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? "عدد الوحدات المكلفة" : "Module Assigned Count",
      dataIndex: "moduleAssignedCount",
      key: "moduleAssignedCount",
      sorter: (a, b) => a.moduleAssignedCount - b.moduleAssignedCount,
      render: (text, record) => (
        <Tooltip title={`${selectedLanguage === 'arabic' ? 'الوحدات المكلفة' : 'Modules Assigned'}: ${record.moduleAssignedCount}`}>
          <InfoCircleOutlined style={{ color: "#1890ff" }} />
        </Tooltip>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? "عدد الوحدات المكتملة" : "Module Completed Count",
      dataIndex: "moduleCompletedCount",
      key: "moduleCompletedCount",
      sorter: (a, b) => a.moduleCompletedCount - b.moduleCompletedCount,
      render: (text, record) => (
        <Tooltip title={`${selectedLanguage === 'arabic' ? 'الوحدات المكتملة' : 'Modules Completed'}: ${record.moduleCompletedCount}`}>
          <CheckCircleOutlined style={{ color: "#52c41a" }} />
        </Tooltip>
      ),
    },
    {
      title: selectedLanguage === 'arabic' ? "حالة الانجاز" : "Completion Status",
      dataIndex: "completionStatus",
      key: "completionStatus",
      render: (text, record) => (
        <Tooltip title={`${selectedLanguage === 'arabic' ? 'حالة الانجاز' : 'Completion Status'}: ${record.completionStatus}`}>
          {record.completionStatus === "Completed" ? (
            <CheckCircleOutlined style={{ color: "#52c41a" }} />
          ) : (
            <InfoCircleOutlined style={{ color: "#1890ff" }} />
          )}
        </Tooltip>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const moduleAssignedData = response.data.map((item) => ({
          name: item.title, // Using "title" as an example field
          moduleAssigned: selectedLanguage === 'arabic' ? "الوحدة X" : "Module X",
          moduleNumber: 1,
          moduleDifficulty: "Easy",
          moduleAssignedCount: 10,
          moduleCompletedCount: 100,
          completionStatus: selectedLanguage === 'arabic' ? "غير مكتملة" : "Incomplete",
          // Add more fields based on your requirement
          body: item.body, // Example additional field from the "posts" endpoint
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
  }, [selectedLanguage]);
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
          placeholder={`Search ${dataIndex}`}
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
      dataIndex === "name"
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
    <div className="module-assigned-container">
      <div className="header">
        <DashboardOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
        <img src="/logos/Government_of_Dubai_logo.svg.png" alt="Module Logo" className="logo" />
        <div className="header-info">
          <h2 className="header-title">
            {selectedLanguage === 'arabic' ? 'الوحدات المكلفة' : 'Assigned Modules'}
          </h2>
          <p className="header-description">
            {selectedLanguage === 'arabic'
              ? 'مرحبًا بك في لوحة التحكم. استكشف الوحدات المكلفة وتتبع التقدم.'
              : 'Welcome to the dashboard. Explore the assigned modules and track progress.'}
          </p>
          <ReadOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </div>
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
          expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.name} details here</p>,
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

export default ModuleAssigned;




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

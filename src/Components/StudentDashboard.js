// // StudentDashboard.js
// import React from "react";
// import { Layout, Menu } from "antd";
// import { Routes, Route, Outlet } from "react-router-dom"; // Import Outlet
// import ModuleAssigned from "./ModuleAssigned"; // Import ModuleAssigned

//  // Create a CSS file for styling if needed

// const { Header, Content, Footer } = Layout;

// const StudentDashboard = () => {
//   return (
//     <Layout className="layout">
//       <Header>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           {/* Adjust the navigation items as needed */}
//           <Menu.Item key="1">Module Assigned</Menu.Item>
//         </Menu>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <h2>Welcome to Student Dashboard!</h2>
//         <Routes>
//           <Route path="/" element={<Outlet />}>
//             <Route index element={<ModuleAssigned />} />
//           </Route>
//         </Routes>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>Student Dashboard</Footer>
//     </Layout>
//   );
// };

// export default StudentDashboard;
// // StudentDashboard.js
// import React from "react";
// import { Layout, Menu } from "antd";


// const { Header, Content, Footer } = Layout;

// const StudentDashboard = () => {
//   return (
//     <Layout className="layout">
//       <Header>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           {/* Add Student Dashboard navigation items here */}
//         </Menu>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <h2>Welcome to Student Dashboard!</h2>
//         {/* Add Student Dashboard content here */}
//       </Content>
//       <Footer style={{ textAlign: "center" }}>Student Dashboard</Footer>
//     </Layout>
//   );
// };

// export default StudentDashboard;




// import React, { useState, useEffect } from "react";
// import { Layout, Menu, Tabs, Input, Alert, Button } from "antd";
// import { UserOutlined, SearchOutlined } from "@ant-design/icons";
// import ModuleAssigned from "./ModuleAssigned";
// import ModuleScore from "./ModuleScore";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import "./StudentDashboard.css"; // Import the custom stylesheet

// const { Header, Content, Footer } = Layout;
// const { TabPane } = Tabs;

// const StudentDashboard = () => {
//   const [currentTab, setCurrentTab] = useState("Dewa");
//   const [isContentVisible, setIsContentVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudentsData();
//   }, []);

//   const handleTabClick = (key) => {
//     setCurrentTab(key);
//     setIsContentVisible(true);
//     setIsSearchVisible(false);
//   };

//   const handleSearch = (value) => {
//     console.log("Searching for:", value);
//     setSearchResult(filterStudents(value));
//     setIsSearchVisible(true);
//   };

//   const fetchStudentsData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      
//       // Mocking scores for testing
//       const studentsWithScores = response.data.map((student) => ({
//         ...student,
//         score: Math.floor(Math.random() * 100), // Assign a random score for testing
//       }));
  
//       setStudents(studentsWithScores);
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   const filterStudents = (query) => {
//     return students.filter(
//       (student) =>
//         student.name.toLowerCase().includes(query.toLowerCase()) ||
//         student.email.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Header style={{ position: "relative", textAlign: "center" }}>
//         <h1 style={{ color: "#fff", marginBottom: 0 }}>Student Dashboard</h1>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={[currentTab]}
//           onClick={({ key }) => handleTabClick(key)}
//         >
//           <Menu.Item key="Dewa" icon={<UserOutlined />}>
//             Dewa
//           </Menu.Item>
//           <Menu.Item key="Gallery" icon={<UserOutlined />}>
//             Gallery
//           </Menu.Item>
//           <Menu.Item key="Project" icon={<UserOutlined />}>
//             Project
//           </Menu.Item>
//           <Menu.Item key="Classrooms" icon={<UserOutlined />}>
//             Classrooms
//           </Menu.Item>
//           <Menu.Item key="Resources" icon={<UserOutlined />}>
//             Resources
//           </Menu.Item>
//           <div style={{ position: "absolute", top: 0, right: 20 }}>
//             <SearchOutlined
//               style={{ fontSize: 20, color: "#fff", cursor: "pointer" }}
//               onClick={() => setIsSearchVisible(!isSearchVisible)}
//             />
//             {isSearchVisible && (
//               <Input.Search
//                 placeholder="Search"
//                 style={{ width: 200 }}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onSearch={() => handleSearch(searchQuery)}
//               />
//             )}
//           </div>
//         </Menu>
//         <div className="video-container">
//           <video autoPlay muted loop id="background-video">
//             <source src="/logos/Home_pge_video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         {/* Back to Student Login button */}
//         <Link to="/student-login" style={{ position: 'absolute', top: 20, right: 20 }}>
//           <Button type="primary" size="large">
//             Back to Student Login
//           </Button>
//         </Link>
//       </Header>
//       <Content className="content">
//         {isContentVisible && (
//           <>
//             <Tabs
//               defaultActiveKey={currentTab}
//               onChange={(key) => handleTabClick(key)}
//             >
//               <TabPane tab="Module Assigned" key="Dewa">
//                 {isSearchVisible && searchResult.length === 0 ? (
//                   <Alert
//                     message="No data available for the search."
//                     type="info"
//                     showIcon
//                   />
//                 ) : (
//                   <ModuleAssigned searchData={isSearchVisible ? searchResult : students} />
//                 )}
//               </TabPane>
//               <TabPane tab="Module Score" key="Gallery">
//                 <ModuleScore students={students} />
//               </TabPane>
//               {/* ... other TabPane elements ... */}
//             </Tabs>
//           </>
//         )}
//       </Content>
//       <Footer className="footer">Your footer content goes here.</Footer>
//     </Layout>
//   );
// };

// export default StudentDashboard;


// import React, { useState, useEffect } from "react";
// import { Layout, Menu, Tabs, Input, Alert, Button } from "antd";
// import { UserOutlined, SearchOutlined } from "@ant-design/icons";
// import ModuleAssigned from "./ModuleAssigned";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import "./StudentDashboard.css"; // Import the custom stylesheet

// const { Header, Content, Footer } = Layout;
// const { TabPane } = Tabs;

// const StudentDashboard = () => {
//   const [currentTab, setCurrentTab] = useState("Dewa");
//   const [isContentVisible, setIsContentVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudentsData();
//   }, []);

//   const handleTabClick = (key) => {
//     setCurrentTab(key);
//     setIsContentVisible(true);
//     setIsSearchVisible(false);
//   };

//   const handleSearch = (value) => {
//     console.log("Searching for:", value);
//     setSearchResult(filterStudents(value));
//     setIsSearchVisible(true);
//   };

//   const fetchStudentsData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      
//       // Mocking scores for testing
//       const studentsWithScores = response.data.map((student) => ({
//         ...student,
//         score: Math.floor(Math.random() * 100), // Assign a random score for testing
//       }));
  
//       setStudents(studentsWithScores);
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   const filterStudents = (query) => {
//     return students.filter(
//       (student) =>
//         student.name.toLowerCase().includes(query.toLowerCase()) ||
//         student.email.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Header style={{ position: "relative", textAlign: "center" }}>
//         <h1 style={{ color: "#fff", marginBottom: 0 }}>Student Dashboard</h1>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={[currentTab]}
//           onClick={({ key }) => handleTabClick(key)}
//         >
//           <Menu.Item key="Dewa" icon={<UserOutlined />}>
//             Dewa
//           </Menu.Item>
//           <Menu.Item key="Gallery" icon={<UserOutlined />}>
//             Gallery
//           </Menu.Item>
//           <Menu.Item key="Project" icon={<UserOutlined />}>
//             Project
//           </Menu.Item>
//           <Menu.Item key="Classrooms" icon={<UserOutlined />}>
//             Classrooms
//           </Menu.Item>
//           <Menu.Item key="Resources" icon={<UserOutlined />}>
//             Resources
//           </Menu.Item>
//           <div style={{ position: "absolute", top: 0, right: 20 }}>
//             <SearchOutlined
//               style={{ fontSize: 20, color: "#fff", cursor: "pointer" }}
//               onClick={() => setIsSearchVisible(!isSearchVisible)}
//             />
//             {isSearchVisible && (
//               <Input.Search
//                 placeholder="Search"
//                 style={{ width: 200 }}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onSearch={() => handleSearch(searchQuery)}
//               />
//             )}
//           </div>
//         </Menu>
//         <div className="video-container">
//           <video autoPlay muted loop id="background-video">
//             <source src="/logos/Home_pge_video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         {/* Back to Student Login button */}
//         <Link to="/student-login" style={{ position: 'absolute', top: 20, right: 20 }}>
//           <Button type="primary" size="large">
//             Back to Student Login
//           </Button>
//         </Link>
//       </Header>
//       <Content className="content">
//         {isContentVisible && (
//           <>
//             <Tabs
//               defaultActiveKey={currentTab}
//               onChange={(key) => handleTabClick(key)}
//             >
//               <TabPane tab="Module Assigned" key="Dewa">
//                 {isSearchVisible && searchResult.length === 0 ? (
//                   <Alert
//                     message="No data available for the search."
//                     type="info"
//                     showIcon
//                   />
//                 ) : (
//                   <ModuleAssigned searchData={isSearchVisible ? searchResult : students} />
//                 )}
//               </TabPane>
//               {/* ... other TabPane elements ... */}
//             </Tabs>
//           </>
//         )}
//       </Content>
     
//       <Footer className="footer">
//         <div className="footer-container">
//           <div className="footer-section">
//             <h2>About Dewa Learning</h2>
//             <ul>
//               <li>About us</li>
//               <li>Vacancies</li>
//               <li>Impact</li>
//               <li>Our network</li>
//               <li>Our supporters</li>
//               <li>Governance</li>
//               <li>Dewa Awards</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h2>How can we help?</h2>
//             <ul>
//               <li>Contact us</li>
//               <li>Finding us</li>
//               <li>News and views</li>
//               <li>Our podcast</li>
//               <li>Resources</li>
//               <li>Venue hire</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h2>Support</h2>
//             <ul>
//               <li>Accessibility</li>
//               <li>Cookies</li>
//               <li>Privacy policy</li>
//               <li>Terms and conditions</li>
//               <li>Safeguarding</li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h2>© Dewa Learning Ltd.</h2>
          
//         </div>
//       </Footer>
//     </Layout>
//   );
// };

// export default StudentDashboard;


// import React, { useState, useEffect } from "react";
// import { Layout, Menu, Tabs, Input, Alert, Button } from "antd";
// import { UserOutlined, SearchOutlined } from "@ant-design/icons";
// import ModuleAssigned from "./ModuleAssigned";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import "./StudentDashboard.css"; // Import the custom stylesheet

// const { Header, Content, Footer } = Layout;
// const { TabPane } = Tabs;

// const StudentDashboard = () => {
//   const [currentTab, setCurrentTab] = useState("Dewa");
//   const [isContentVisible, setIsContentVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [galleryData, setGalleryData] = useState([]);
//   const [projectData, setProjectData] = useState([]); // New state for Project data
//   const [classroomData, setClassroomData] = useState([]); // New state for Classrooms data
//   const [resourcesContent, setResourcesContent] = useState(""); // New state for Resources content
//   const [isSearchVisible, setIsSearchVisible] = useState(false); // New state for search visibility

//   useEffect(() => {
//     fetchStudentsData();
//     fetchGalleryData();
//     fetchProjectData(); // Fetch Project data when the component mounts
//     fetchClassroomData(); // Fetch Classrooms data when the component mounts
//     fetchResourcesContent(); // Fetch Resources content when the component mounts
//   }, []);

//   const handleTabClick = (key) => {
//     setCurrentTab(key);
//     setIsContentVisible(true);
//     setIsSearchVisible(false);
//   };

//   const handleSearch = (value) => {
//     console.log("Searching for:", value);
//     setSearchResult(filterStudents(value));
//     setIsSearchVisible(true);
//   };

//   const fetchStudentsData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       const studentsWithScores = response.data.map((student) => ({
//         ...student,
//         score: Math.floor(Math.random() * 100),
//       }));
//       setStudents(studentsWithScores);
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   const fetchGalleryData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
//       setGalleryData(response.data.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching gallery data:", error);
//     }
//   };

//   const fetchProjectData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setProjectData(response.data.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching project data:", error);
//     }
//   };

//   const fetchClassroomData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//       setClassroomData(response.data.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching classroom data:", error);
//     }
//   };

//   const fetchResourcesContent = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//       setResourcesContent(response.data.body);
//     } catch (error) {
//       console.error("Error fetching resources content:", error);
//     }
//   };

//   const filterStudents = (query) => {
//     return students.filter(
//       (student) =>
//         student.name.toLowerCase().includes(query.toLowerCase()) ||
//         student.email.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Header style={{ position: "relative", textAlign: "center" }}>
//         <h1 style={{ color: "#fff", marginBottom: 0 }}>Student Dashboard</h1>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={[currentTab]}
//           onClick={({ key }) => handleTabClick(key)}
//         >
//           <Menu.Item key="Dewa" icon={<UserOutlined />}>
//             Dewa
//           </Menu.Item>
//           <Menu.Item key="Gallery" icon={<UserOutlined />}>
//             Gallery
//           </Menu.Item>
//           <Menu.Item key="Project" icon={<UserOutlined />}>
//             Project
//           </Menu.Item>
//           <Menu.Item key="Classrooms" icon={<UserOutlined />}>
//             Classrooms
//           </Menu.Item>
//           <Menu.Item key="Resources" icon={<UserOutlined />}>
//             Resources
//           </Menu.Item>
//           <div style={{ position: "absolute", top: 0, right: 20 }}>
//             <SearchOutlined
//               style={{ fontSize: 20, color: "#fff", cursor: "pointer" }}
//               onClick={() => setIsSearchVisible(!isSearchVisible)}
//             />
//             {isSearchVisible && (
//               <Input.Search
//                 placeholder="Search"
//                 style={{ width: 200 }}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onSearch={() => handleSearch(searchQuery)}
//               />
//             )}
//           </div>
//         </Menu>
//         <div className="video-container">
//           <video autoPlay muted loop id="background-video">
//             <source src="/logos/Home_pge_video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <Link to="/student-login" style={{ position: 'absolute', top: 20, right: 20 }}>
//           <Button type="primary" size="large">
//             Back to Student Login
//           </Button>
//         </Link>
//       </Header>
//       <Content className="content">
//         {isContentVisible && (
//           <>
//             <div>
//               {currentTab === "Dewa" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Module Assigned" key="Dewa">
//                     {isSearchVisible && searchResult.length === 0 ? (
//                       <Alert
//                         message="No data available for the search."
//                         type="info"
//                         showIcon
//                       />
//                     ) : (
//                       <ModuleAssigned searchData={isSearchVisible ? searchResult : students} />
//                     )}
//                   </TabPane>
//                 </Tabs>
//               )}
//               {currentTab === "Gallery" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Gallery" key="Gallery">
//                     <div>
//                       <h2>Gallery Content</h2>
//                       <ul>
//                         {galleryData.map((item) => (
//                           <li key={item.id}>{item.title}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               )}
//               {currentTab === "Project" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Project" key="Project">
//                     <div>
//                       <h2>Project Content</h2>
//                       <ul>
//                         {projectData.map((item) => (
//                           <li key={item.id}>{item.title}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               )}
//               {currentTab === "Classrooms" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Classrooms" key="Classrooms">
//                     <div>
//                       <h2>Classrooms Content</h2>
//                       <ul>
//                         {classroomData.map((item) => (
//                           <li key={item.id}>{item.title}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               )}
//               {currentTab === "Resources" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Resources" key="Resources">
//                     <div>
//                       <h2>Resources Content</h2>
//                       <p>{resourcesContent}</p>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               )}
//             </div>
//           </>
//         )}
//       </Content>
//       <Footer className="footer">
//         <div className="footer-container">
//           <div className="footer-section">
//             <h2>About Dewa Learning</h2>
//             <ul>
//               <li>About us</li>
//               <li>Vacancies</li>
//               <li>Impact</li>
//               <li>Our network</li>
//               <li>Our supporters</li>
//               <li>Governance</li>
//               <li>Dewa Awards</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h2>How can we help?</h2>
//             <ul>
//               <li>Contact us</li>
//               <li>Finding us</li>
//               <li>News and views</li>
//               <li>Our podcast</li>
//               <li>Resources</li>
//               <li>Venue hire</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h2>Support</h2>
//             <ul>
//               <li>Accessibility</li>
//               <li>Cookies</li>
//               <li>Privacy policy</li>
//               <li>Terms and conditions</li>
//               <li>Safeguarding</li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h2>© Dewa Learning Ltd.</h2>
//         </div>
//       </Footer>
//     </Layout>
//   );
// };

// export default StudentDashboard;



// import React, { useState, useEffect } from "react";
// import { Layout, Menu, Tabs, Input, Alert, Button } from "antd";
// import { UserOutlined, SearchOutlined } from "@ant-design/icons";
// import ModuleAssigned from "./ModuleAssigned";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import "./StudentDashboard.css"; // Import the custom stylesheet

// const { Header, Content, Footer } = Layout;
// const { TabPane } = Tabs;

// const StudentDashboard = () => {
//   const [currentTab, setCurrentTab] = useState("Dewa");
//   const [isContentVisible, setIsContentVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [galleryData, setGalleryData] = useState([]);
//   const [projectData, setProjectData] = useState([]); // New state for Project data
//   const [classroomData, setClassroomData] = useState([]); // New state for Classrooms data
//   const [resourcesContent, setResourcesContent] = useState(""); // New state for Resources content
//   const [isSearchVisible, setIsSearchVisible] = useState(false); // New state for search visibility

//   useEffect(() => {
//     fetchStudentsData();
//     fetchGalleryData();
//     fetchProjectData(); // Fetch Project data when the component mounts
//     fetchClassroomData(); // Fetch Classrooms data when the component mounts
//     fetchResourcesContent(); // Fetch Resources content when the component mounts
//   }, []);

//   const handleTabClick = (key) => {
//     setCurrentTab(key);
//     setIsContentVisible(true);
//     setIsSearchVisible(false);
//   };

//   const handleSearch = (value) => {
//     console.log("Searching for:", value);
//     setSearchResult(filterStudents(value));
//     setIsSearchVisible(true);
//   };

//   const fetchStudentsData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       const studentsWithScores = response.data.map((student) => ({
//         ...student,
//         score: Math.floor(Math.random() * 100),
//       }));
//       setStudents(studentsWithScores);
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   const fetchGalleryData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
//       setGalleryData(response.data.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching gallery data:", error);
//     }
//   };

//   const fetchProjectData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setProjectData(response.data.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching project data:", error);
//     }
//   };

//   const fetchClassroomData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//       setClassroomData(response.data.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching classroom data:", error);
//     }
//   };

//   const fetchResourcesContent = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//       setResourcesContent(response.data.body);
//     } catch (error) {
//       console.error("Error fetching resources content:", error);
//     }
//   };

//   const filterStudents = (query) => {
//     return students.filter(
//       (student) =>
//         student.name.toLowerCase().includes(query.toLowerCase()) ||
//         student.email.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Header style={{ position: "relative", textAlign: "center" }}>
//         <h1 style={{ color: "#fff", marginBottom: 0 }}>Student Dashboard</h1>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={[currentTab]}
//           onClick={({ key }) => handleTabClick(key)}
//         >
//           <Menu.Item key="Dewa" icon={<UserOutlined />}>
//             Dewa
//           </Menu.Item>
//           <Menu.Item key="Module1.1" icon={<UserOutlined />}>
//             Module 1.1
//           </Menu.Item>
//           <Menu.Item key="Project" icon={<UserOutlined />}>
//             Module 1.2
//           </Menu.Item>
//           <Menu.Item key="Classrooms" icon={<UserOutlined />}>
//             Module 1.3
//           </Menu.Item>
//           <Menu.Item key="Resources" icon={<UserOutlined />}>
//             Module 1.4
//           </Menu.Item>
//           <div style={{ position: "absolute", top: 0, right: 20 }}>
//             <SearchOutlined
//               style={{ fontSize: 20, color: "#fff", cursor: "pointer" }}
//               onClick={() => setIsSearchVisible(!isSearchVisible)}
//             />
//             {isSearchVisible && (
//               <Input.Search
//                 placeholder="Search"
//                 style={{ width: 200 }}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onSearch={() => handleSearch(searchQuery)}
//               />
//             )}
//           </div>
//         </Menu>
//         <div className="video-container">
//           <video autoPlay muted loop id="background-video">
//             <source src="/logos/Home_pge_video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <Link to="/student-login" style={{ position: 'absolute', top: 20, right: 20 }}>
//           <Button type="primary" size="large">
//             Back to Student Login
//           </Button>
//         </Link>
//       </Header>
//       <Content className="content">
//         {isContentVisible && (
//           <>
//             <div>
//               {currentTab === "Dewa" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Module Assigned" key="Dewa">
//                     {isSearchVisible && searchResult.length === 0 ? (
//                       <Alert
//                         message="No data available for the search."
//                         type="info"
//                         showIcon
//                       />
//                     ) : (
//                       <ModuleAssigned searchData={isSearchVisible ? searchResult : students} />
//                     )}
//                   </TabPane>
//                 </Tabs>
//               )}
//               {currentTab === "Module1.1" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Module 1.1" key="Module1.1">
//                     <div>
//                       <h2>Module 1.1 - Installations of circuit breaker</h2>
//                       <ul>
//                         <li>Proposed Solution in AR Studio: Augmented Reality Experience (Actual Equipment)</li>
//                         <li>Proposed Solution in DEWA Academy Practical Lab: Augmented Reality Experience (Actual Equipment)</li>
//                         <li>Proposed Technology & Platform for augmented Reality Experiences:</li>
//                         <ul>
//                           <li>Platform Host Technology: Microsoft Azure Object Anchors Spatial Anchors</li>
//                           <p>Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a broad range of cloud services, including computing, analytics, storage, and networking. Users can pick and choose from these services to develop and scale new applications or run existing applications in the cloud platform.</p>
//                           <p>Azure Object Anchors is an augmented reality service that helps you create rich, immersive experiences by automatically aligning 3D content with physical objects. Gain a contextual understanding of objects without the need for markers or manual alignment. It saves significant touch labor, reduces alignment errors, and improves user experiences by building augmented-reality applications with Object Anchors.</p>
//                           <li>Azure Spatial Anchors empower developers with essential capabilities to build spatially-aware augmented reality applications. Azure Spatial Anchors enables developers to work with augmented reality platforms to perceive spaces, designate precise points of interest, and recall those points of interest from supported devices. These precise points of interest are referred to as Spatial Anchors.</li>
//                         </ul>
//                         <li>High-Level Steps to Follow:</li>
//                         <ul>
//                           <li>Determining Where to Install the Circuit Breaker:
//                             <ul>
//                               <li>Turn off the power supply to the electrical panel. Locate the Service Disconnect or Main circuit breaker in the panel and set it to the "Off" position.</li>
//                               <li>Inspect the circuit breaker arrangement for unused locations. Look for a blank area on the electrical panel that could accommodate a circuit breaker, paying particular attention to unused spaces at the top and bottom of the cover.</li>
//                               <li>Remove the electrical panel cover. Use a screwdriver to remove 3 of the screws supporting the cover. Then, use 1 arm to hold the panel cover in place as you unscrew the last screw. Finally, pull the cover away from the panel.</li>
//                               <li>Test the panel to make sure the power is off. Use a test light or meter set to check for the presence of power.</li>
//                               <li>Find an unused space next to or between existing circuit breakers. The new circuit breaker you install will need to be placed next to a circuit breaker already in place. Carefully compare this location to the cover that was removed earlier to make sure it aligns with an unused location on the cover.</li>
//                             </ul>
//                           </li>
//                           <li>Placing the Circuit Breaker in the Panel:
//                             <ul>
//                               <li>Make sure you have the correct circuit breaker. The panel label will list all the approved types of circuit breakers that can be installed in the panel.</li>
//                               <li>Set the circuit breaker handle to the OFF position.</li>
//                               <li>Align the circuit breaker with the bars in the panel.</li>
//                               <li>Firmly press on the circuit breaker to seat it onto the bus bar.</li>
//                               <li>Connect the circuit wiring to the electrical panel. After making sure the circuit breaker is still in the OFF position, connect the white neutral wire and the black hot wire to the breaker.</li>
//                             </ul>
//                           </li>
//                         </ul>
//                       </ul>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               )}
//               {currentTab === "Project" && (
//   <Tabs
//     defaultActiveKey={currentTab}
//     onChange={(key) => handleTabClick(key)}
//   >
//     <TabPane tab="Project" key="Project">
//       <div>
//         <h2>Module 1.2 - Intermediate Lighting Circuit</h2>
//         <ul>
//           <li>DEWA Academy: Module 1.2 - Intermediate Lighting Circuit</li>
//           <li>Proposed Solution in AR Studio: Augmented Reality Experience (Actual Equipment)</li>
//           <li>Proposed Solution in DEWA Academy Practical Lab: Augmented Reality Experience (Actual Equipment)</li>
//           <li>Proposed Technology & Platform for augmented Reality Experiences:</li>
//           <ul>
//             <li>Platform Host Technology: Microsoft Azure Object Anchors Spatial Anchors</li>
//             <p>Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a broad range of cloud services, including computing, analytics, storage, and networking. Users can pick and choose from these services to develop and scale new applications or run existing applications in the cloud platform.</p>
//             <p>Azure Object Anchors is an augmented reality service that helps you create rich, immersive experiences by automatically aligning 3D content with physical objects. Gain a contextual understanding of objects without the need for markers or manual alignment. It saves significant touch labor, reduces alignment errors, and improves user experiences by building augmented-reality applications with Object Anchors.</p>
//             <li>Azure Spatial Anchors empower developers with essential capabilities to build spatially-aware augmented reality applications. Azure Spatial Anchors enables developers to work with augmented reality platforms to perceive spaces, designate precise points of interest, and recall those points of interest from supported devices. These precise points of interest are referred to as Spatial Anchors.</li>
//           </ul>
//           <li>High-Level Steps to Follow:</li>
//           <ul>
//             <li>Connect the phase wire from the main supply to the two-way switch 1</li>
//             <li>Connect the two terminals of two-way switch 1 to two terminals of the intermediate switch.</li>
//             <li>Connect the two terminals of the intermediate switch to two-way switch 2.</li>
//             <li>Connect one terminal of the two-way switch to the phase of the lamp.</li>
//             <li>Connect the neutral of the main supply to the lamp neutral.</li>
//             <li>Connect the earth of the main supply to the lamp earth.</li>
//             <li>Switch On the Main Supply.</li>
//             <li>Switch On the RCCB.</li>
//             <li>Switch on the MCB.</li>
//           </ul>
//         </ul>
//       </div>
//     </TabPane>
//   </Tabs>
// )}
//               {currentTab === "Classrooms" && (
//   <Tabs
//     defaultActiveKey={currentTab}
//     onChange={(key) => handleTabClick(key)}
//   >
//     <TabPane tab="Classrooms" key="Classrooms">
//       <div>
//         <h2>Module 1.3 - Cable Jointing</h2>
//         <ul>
//           <li>Proposed Solution in AR Studio: Augmented Reality Experience (3D Printed Mockup Model - Digital Content Experience)</li>
//           <li>Proposed Solution in Cable Jointing Location: Augmented Reality Experience (3D Printed Mockup Model - Digital Content Experience)</li>
//           <li>Proposed Technology & Platform for augmented Reality Experiences:</li>
//           <ul>
//             <li>Platform Host Technology: Microsoft Azure Object Anchors Spatial Anchors</li>
//             <p>Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a broad range of cloud services, including computing, analytics, storage, and networking. Users can pick and choose from these services to develop and scale new applications or run existing applications in the cloud platform.</p>
//             <p>Azure Object Anchors is an augmented reality service that helps you create rich, immersive experiences by automatically aligning 3D content with physical objects. Gain a contextual understanding of objects without the need for markers or manual alignment. It saves significant touch labor, reduces alignment errors, and improves user experiences by building augmented-reality applications with Object Anchors.</p>
//             <li>Azure Spatial Anchors empower developers with essential capabilities to build spatially-aware augmented reality applications. Azure Spatial Anchors enables developers to work with augmented reality platforms to perceive spaces, designate precise points of interest, and recall those points of interest from supported devices. These precise points of interest are referred to as Spatial Anchors.</li>
//           </ul>
//           <li>High-Level Steps to Follow:</li>
//           <ul>
//             {/* ... (The steps you provided earlier for Module 1.3 - Cable Jointing) */}
//           </ul>
//         </ul>
//       </div>
//     </TabPane>
//   </Tabs>
// )}
//                {currentTab === "Resources" && (
//                 <Tabs
//                   defaultActiveKey={currentTab}
//                   onChange={(key) => handleTabClick(key)}
//                 >
//                   <TabPane tab="Resources" key="Resources">
//                     <div>
                      
//                       <h2>Module 1.4 - Measurement Tools used in Mechanical Workshop</h2>
//                       <ul>
//                         <li>Proposed Solution in AR Studio: Augmented Reality Experience (Actual Equipment - Digital Content Experience)</li>
//                         <li>Proposed Solution in DEWA Academy Practical Lab: Augmented Reality Experience (Actual Equipment - Digital Content Experience)</li>
//                         <li>Proposed Technology & Platform for augmented Reality Experiences:</li>
//                         <ul>
//                           <li>Platform Host Technology: Microsoft Azure Object Anchors Spatial Anchors</li>
//                           <p>Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a broad range of cloud services, including computing, analytics, storage, and networking. Users can pick and choose from these services to develop and scale new applications or run existing applications in the cloud platform.</p>
//                           <p>Azure Object Anchors is an augmented reality service that helps you create rich, immersive experiences by automatically aligning 3D content with physical objects. Gain a contextual understanding of objects without the need for markers or manual alignment. It saves significant touch labour, reduces alignment errors, and improves user experiences by building augmented-reality applications with Object Anchors.</p>
//                           <li>Azure Spatial Anchors empower developers with essential capabilities to build spatially-aware augmented reality applications. Azure Spatial Anchors enables developers to work with augmented reality platforms to perceive spaces, designate precise points of interest, and recall those points of interest from supported devices. These precise points of interest are referred to as Spatial Anchors.</li>
//                         </ul>
//                         <li>High-Level Steps to Follow:</li>
//                         <ul>
//                           <li>Drill Drift Procedure:</li>
//                           <ul>
//                             <li>Select a datum point and datum lines on the metal</li>
//                             <li>Check the long edge of the metal for straightness with a steel rule and engineer square.</li>
//                             {/* ... (Remaining steps for Module 1.4) */}
//                           </ul>
//                         </ul>
//                       </ul>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               )}
//             </div>
//           </>
//         )}
//       </Content>
//       <Footer className="footer">
//         <div className="footer-container">
//           <div className="footer-section">
//             <h2>About Dewa Learning</h2>
//             <ul>
//               <li>About us</li>
//               <li>Vacancies</li>
//               <li>Impact</li>
//               <li>Our network</li>
//               <li>Our supporters</li>
//               <li>Governance</li>
//               <li>Dewa Awards</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h2>How can we help?</h2>
//             <ul>
//               <li>Contact us</li>
//               <li>Finding us</li>
//               <li>News and views</li>
//               <li>Our podcast</li>
//               <li>Resources</li>
//               <li>Venue hire</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h2>Support</h2>
//             <ul>
//               <li>Accessibility</li>
//               <li>Cookies</li>
//               <li>Privacy policy</li>
//               <li>Terms and conditions</li>
//               <li>Safeguarding</li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h2>© Dewa Learning Ltd.</h2>
//         </div>
//       </Footer>
//     </Layout>
//   );
// };

// export default StudentDashboard;
// StudentDashboard.js



import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardTabs from './DashboardTabs';
import ReactApexChart from 'react-apexcharts';

const { Content } = Layout;

const StudentDashboard = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [moduleCompletedData, setModuleCompletedData] = useState([]);
  const [activeTab, setActiveTab] = useState('Next tab');
  const navigate = useNavigate();
  const { tabKey } = useParams();

  const handleAdmin = () => {
    navigate("/admin-dashboard");
  };

  const handleTabClick = (key) => {
    if (key === 'Next tab') {
      handleAdmin();
    } else if (key === 'Module Selection') {
      navigate("/module-selection");
    } else if (key === 'DEWA ACADEMY') {
      navigate("/dewa-academy");
    } else if (key === 'FLEET MANAGEMENT') {
      navigate("/fleet-management");
    }
  };

  useEffect(() => {
    fetchModuleCompletedData();
    setIsContentVisible(true);
    if (tabKey) {
      setActiveTab(tabKey);
    }
  }, [tabKey]);

  const fetchModuleCompletedData = async () => {
    try {
      const response = await axios.get('api/module-completed');
      setModuleCompletedData(response.data);
    } catch (error) {
      console.error('Error fetching module completed data:', error);
    }
  };

  // Dummy data for the bar chart
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    coursePassed: index % 2 === 0 ? 'PASS' : 'FAIL',
    completionStatus: index % 3 === 0 ? 'Complete' : 'Incomplete',
    moduleNumber: index + 1,
    firstName: `FirstName${index + 1}`,
    lastName: `LastName${index + 1}`,
  }));

  // Bar chart data
  const barChartOptions = {
    chart: {
      id: 'course-stats',
      type: 'bar',
      height: 400,
      background: '#f8f9fa', // Light gray background
    },
    xaxis: {
      categories: ['Course Passed', 'Passed Students', 'Failed Students', 'Students Completed All Courses'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '80%',
        barHeight: '100%',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' students';
      },
    },
    colors: ['#007bff'], // Change the bar color to blue
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' students';
        },
      },
    },
    title: {
      text: 'Student Dashboard - Bar Chart View',
      align: 'center',
      margin: 10,
      offsetY: 20,
      style: {
        fontSize: '20px',
      },
    },
  };

  const barChartSeries = [{
    name: 'Count',
    data: [50, 30, 10, 5],
  }];

  // Pie chart data
  const pieChartData = {
    pausedCourses: 30,
    passedStudents: 50,
    failedStudents: 10,
    studentsCompletedAllCourses: 5,
  };

  // Options for each pie chart
  const pausedCoursesOptions = {
    chart: {
      id: 'paused-courses-chart',
      type: 'pie',
      height: 300,
      background: '#f8f9fa', // Light gray background
    },
    labels: ['Paused Courses', 'Other Courses'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' students';
      },
    },
    colors: ['#ffc107', '#ced4da'], // Yellow for paused courses
    title: {
      text: 'Paused Courses Overview',
      align: 'center',
      margin: 10,
      offsetY: 20,
      style: {
        fontSize: '16px',
      },
    },
  };

  const passedStudentsOptions = {
    chart: {
      id: 'passed-students-chart',
      type: 'pie',
      height: 300,
      background: '#f8f9fa', // Light gray background
    },
    labels: ['Passed Students', 'Other Students'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' students';
      },
    },
    colors: ['#28a745', '#ced4da'], // Green for passed students
    title: {
      text: 'Passed Students Overview',
      align: 'center',
      margin: 10,
      offsetY: 20,
      style: {
        fontSize: '16px',
      },
    },
  };

  const failedStudentsOptions = {
    chart: {
      id: 'failed-students-chart',
      type: 'pie',
      height: 300,
      background: '#f8f9fa', // Light gray background
    },
    labels: ['Failed Students', 'Other Students'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' students';
      },
    },
    colors: ['#dc3545', '#ced4da'], // Red for failed students
    title: {
      text: 'Failed Students Overview',
      align: 'center',
      margin: 10,
      offsetY: 20,
      style: {
        fontSize: '16px',
      },
    },
  };

  const completedAllCoursesOptions = {
    chart: {
      id: 'completed-all-courses-chart',
      type: 'pie',
      height: 300,
      background: '#f8f9fa', // Light gray background
    },
    labels: ['Completed All Courses', 'Other Students'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' students';
      },
    },
    colors: ['#007bff', '#ced4da'], // Blue for completed all courses
    title: {
      text: 'Students Completed All Courses Overview',
      align: 'center',
      margin: 10,
      offsetY: 20,
      style: {
        fontSize: '16px',
      },
    },
  };

  const pausedCoursesSeries = [pieChartData.pausedCourses, dummyData.length - pieChartData.pausedCourses];
  const passedStudentsSeries = [pieChartData.passedStudents, dummyData.length - pieChartData.passedStudents];
  const failedStudentsSeries = [pieChartData.failedStudents, dummyData.length - pieChartData.failedStudents];
  const completedAllCoursesSeries = [pieChartData.studentsCompletedAllCourses, dummyData.length - pieChartData.studentsCompletedAllCourses];

  // Hardcoded dummy names for the list of students
  const hardcodedStudentNames = [
    'John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis',
    'David Wilson', 'Eva White', 'Frank Martin', 'Grace Taylor', 'Harry Miller',
    'Ivy Thompson', 'Jack Garcia', 'Kelly Hall', 'Leo Robinson', 'Mia Lewis',
    'Nathan Young', 'Olivia King', 'Paula Scott', 'Quincy Turner', 'Rachel Allen',
    'Samuel Moore', 'Tracy Lee', 'Ursula White', 'Victor Adams', 'Wendy Garcia',
    'Xavier Turner', 'Yvonne Baker', 'Zachary Murphy', 'Ava Edwards', 'Benjamin Clark',
    'Cynthia Reed', 'Dylan Hall', 'Emily White', 'Felix Adams', 'Grace Hall',
    'Henry Young', 'Isabel Wilson', 'Jake Turner', 'Kylie Garcia', 'Liam Turner',
  ];

  const handleTabChange = (key) => {
    setActiveTab(key);
   
    // Check if the selected tab is "Next tab" and navigate accordingly
    if (key === 'Next tab') {
      handleAdmin();
    } else if (key === 'Module Selection') {
      // Navigate to the module selection page
      navigate("/module-selection");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'DEWA ACADEMY':
        return (
          <>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h2>Students Completed All Courses:</h2>
                <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" />
              </Col>
              <Col span={24}>
                <h2>List of Students:</h2>
                <ul>
                  {hardcodedStudentNames.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <h2>Paused Courses Overview:</h2>
                <ReactApexChart options={pausedCoursesOptions} series={pausedCoursesSeries} type="pie" />
              </Col>
              <Col span={12}>
                <h2>Passed Students Overview:</h2>
                <ReactApexChart options={passedStudentsOptions} series={passedStudentsSeries} type="pie" />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <h2>Failed Students Overview:</h2>
                <ReactApexChart options={failedStudentsOptions} series={failedStudentsSeries} type="pie" />
              </Col>
              <Col span={12}>
                <h2>Students Completed All Courses Overview:</h2>
                <ReactApexChart options={completedAllCoursesOptions} series={completedAllCoursesSeries} type="pie" />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h2>List of Students:</h2>
                <ul>
                  {hardcodedStudentNames.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </>
        );
      default:
        // For other tabs, you can render an empty page or customize as needed
        return (
          <>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h2>Students Completed All Courses:</h2>
              <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" />
            </Col>
            <Col span={24}>
              <h2>List of Students:</h2>
              <ul>
                {hardcodedStudentNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <h2>Paused Courses Overview:</h2>
              <ReactApexChart options={pausedCoursesOptions} series={pausedCoursesSeries} type="pie" />
            </Col>
            <Col span={12}>
              <h2>Passed Students Overview:</h2>
              <ReactApexChart options={passedStudentsOptions} series={passedStudentsSeries} type="pie" />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <h2>Failed Students Overview:</h2>
              <ReactApexChart options={failedStudentsOptions} series={failedStudentsSeries} type="pie" />
            </Col>
            <Col span={12}>
              <h2>Students Completed All Courses Overview:</h2>
              <ReactApexChart options={completedAllCoursesOptions} series={completedAllCoursesSeries} type="pie" />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h2>List of Students:</h2>
              <ul>
                {hardcodedStudentNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <div>
              <Link to='/admin-dashboard'>
              <button>Next Tab</button>

              </Link>
            </div>
          </Row>
        </>
        
        );
    }
  };

  return (
    <Layout className="layout">
      <Content className="content">
        {isContentVisible && (
          <>
             <h1 style={{ color: 'black', marginBottom: 0 }}>Dashboard view</h1>
            {renderContent()}
          </>
        )}
      </Content>
   
    </Layout>
    
  );
};

export default StudentDashboard;


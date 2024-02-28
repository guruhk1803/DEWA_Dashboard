// // src/components/AdminDashboard.js
// import React from "react";
// import { Layout, Menu } from "antd";
// import { Layout, Menu } from "antd";
// import "antd/dist/antd.css";  // Add this line to import Ant Design styles
// import "./AdminDashboard.css"; 

// const { Header, Content, Footer } = Layout;

// const AdminDashboard = () => {
//   return (
//     <Layout className="layout">
//       <Header>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           {/* Add Admin Dashboard navigation items here */}
//         </Menu>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <h2>Welcome to Admin Dashboard!</h2>
//         {/* Add Admin Dashboard content here */}
//       </Content>
//       <Footer style={{ textAlign: "center" }}>Admin Dashboard</Footer>
//     </Layout>
//   );
// };

// export default AdminDashboard;




// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import { useLanguage } from './LanguageContext';
// import './AdminDashboard.css';
// import Dashboard from './Dashboard';
// import ModuleCompleted from './ModuleCompleted';
// import ModuleLeft from './ModuleLeft';

// const AdminDashboard = () => {
//   const { selectedLanguage } = useLanguage();

//   return (
//     <div className="admin-dashboard-container">
//       {/* Background Video */}
//       <video autoPlay muted loop id="background-video">
//         <source src="/logos/home_motion_video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="dashboard-content">
//         <h2>{selectedLanguage === 'arabic' ? 'لوحة تحكم المشرف' : 'Admin Dashboard'}</h2>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/module-assigned-admin">
//                 <div className="dashboard-link">
//                   <span className="link-label">{selectedLanguage === 'arabic' ? 'الوحدات المكلفة' : 'Module Assigned'}</span>
//                 </div>
//               </Link>
//             </li>
//             <li>
//               <Link to="/module-completed">
//                 <div className="dashboard-link">
//                   <span className="link-label">{selectedLanguage === 'arabic' ? 'الوحدات المكتملة' : 'Module Completed'}</span>
//                 </div>
//               </Link>
//             </li>
//             <li>
//               <Link to="/module-left">
//                 <div className="dashboard-link">
//                   <span className="link-label">{selectedLanguage === 'arabic' ? 'الوحدات المتبقية' : 'Module Left'}</span>
//                 </div>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import React, { useState, useEffect } from 'react';
import { Layout, Menu, Input, Alert, Button } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import './AdminDashboard.css';
import ModuleAssignedAdmin from './ModuleAssignedAdmin';
import axios from 'axios';
import { Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

const AdminDashboard = () => {
  const [currentTab, setCurrentTab] = useState('DEWA ACADEMY');
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [moduleAssignedData, setModuleAssignedData] = useState([]);
  const [moduleCompletedData, setModuleCompletedData] = useState([]);
  const [moduleLeftData, setModuleLeftData] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({
    pausedCourses: 0,
    passedStudents: 0,
    failedStudents: 0,
    studentsCompletedAllCourses: 0,
  });

  const [chartView, setChartView] = useState(null);

  const handleTabClick = async (key) => {
    setCurrentTab(key);
    setIsContentVisible(true);
    setIsSearchVisible(false);

    if (key === 'BarChartView') {
      setChartView('bar');
      await fetchBarChartData();
    } else if (key === 'PieChartView') {
      setChartView('pie');
      await fetchPieChartData();
    } else {
      setChartView(null);
    }
  };

  const handleSearch = (value) => {
    setSearchResult(filterModules(value));
    setIsSearchVisible(true);
  };

  useEffect(() => {
    fetchModuleAssignedData();
    fetchModuleCompletedData();
    fetchModuleLeftData();
    fetchPieChartData();
    fetchPieChartTablesData();
    setIsContentVisible(true);
  }, []);

  const fetchModuleAssignedData = async () => {
    try {
      const response = await axios.get('api/module-assigned-admin');
      setModuleAssignedData(response.data);
    } catch (error) {
      console.error('Error fetching module assigned data:', error);
    }
  };

  const fetchModuleCompletedData = async () => {
    try {
      const response = await axios.get('api/module-completed');
      setModuleCompletedData(response.data);
    } catch (error) {
      console.error('Error fetching module completed data:', error);
    }
  };

  const fetchModuleLeftData = async () => {
    try {
      const response = await axios.get('api/module-left');
      setModuleLeftData(response.data);
    } catch (error) {
      console.error('Error fetching module left data:', error);
    }
  };

  const fetchPieChartData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      const totalPausedCourses = response.data.reduce((sum, item) => sum + (item.pausedCourses || 0), 0);
      const totalPassedStudents = response.data.reduce((sum, item) => sum + (item.passedStudents || 0), 0);
      const totalFailedStudents = response.data.reduce((sum, item) => sum + (item.failedStudents || 0), 0);
      const totalStudentsCompletedAllCourses = response.data.reduce(
        (sum, item) => sum + (item.studentsCompletedAllCourses || 0),
        0
      );

      setPieChartData({
        pausedCourses: totalPausedCourses,
        passedStudents: totalPassedStudents,
        failedStudents: totalFailedStudents,
        studentsCompletedAllCourses: totalStudentsCompletedAllCourses,
      });
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
    }
  };

  const filterModules = (query) => {
    const combinedData = [...moduleAssignedData, ...moduleCompletedData, ...moduleLeftData];
    return combinedData.filter(
      (module) =>
        module.moduleName.toLowerCase().includes(query.toLowerCase()) ||
        module.moduleCode.toLowerCase().includes(query.toLowerCase())
    );
  };

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get('api/bar-chart-data');
      setBarChartData(response.data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  const [isBarChartVisible, setIsBarChartVisible] = useState(true);
  const [isPieChartViewVisible, setIsPieChartViewVisible] = useState(false);

  const handlePieChartViewToggle = () => {
    setIsPieChartViewVisible(!isPieChartViewVisible);
    setIsBarChartVisible(false);
    setIsContentVisible(true); // Ensure content is visible when toggling pie chart
  };

  const handleBarChartViewToggle = () => {
    setIsBarChartVisible(!isBarChartVisible);
    setIsPieChartViewVisible(false);
  };

  // Dummy data for the bar chart
const dummyData = Array.from({ length: 100 }, (_, index) => ({
  coursePassed: index % 2 === 0 ? 'PASS' : 'FAIL',
  completionStatus: index % 3 === 0 ? 'Complete' : 'Incomplete',
  moduleNumber: index + 1,
  firstName: `Johnson`,
  lastName: `Davis`,
}));
  const pausedCoursesSeries = [pieChartData.pausedCourses, dummyData.length - pieChartData.pausedCourses];
  const passedStudentsSeries = [pieChartData.passedStudents, dummyData.length - pieChartData.passedStudents];
  const failedStudentsSeries = [pieChartData.failedStudents, dummyData.length - pieChartData.failedStudents];
  const completedAllCoursesSeries = [pieChartData.studentsCompletedAllCourses, dummyData.length - pieChartData.studentsCompletedAllCourses];
 
 // Array of first names and last names
 const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry'];
 const lastNames = ['Smith', 'Johnson', 'Doe', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];

 // Randomly select a first name and last name for the class topper
 const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
 const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
// Calculate the total count of students and find the class topper
const totalCount = dummyData.length;
const classTopper = dummyData.reduce((topper, student) => {
  if (!topper || student.moduleNumber > topper.moduleNumber) {
    return student;
  }
  return topper;
}, null);



 // Bar chart data
 const barChartOptions = {
   chart: {
     id: 'course-stats',
     type: 'bar',
     height: 400, // Adjust the height as needed
   },
   xaxis: {
     categories: ['Course Passed', 'Passed Students', 'Failed Students', 'Students Completed All Courses'],
   },
   plotOptions: {
     bar: {
       horizontal: false,
       endingShape: 'rounded',
       columnWidth: '60%', // Adjust the column width
       barHeight: '100%', // Reduce the gap between bars
     },
   },
   dataLabels: {
     enabled: false,
   },
   colors: ['#28a745'], // Change the bar color to green
   tooltip: {
     y: {
       formatter: function (val) {
         return val + ' students';
       },
     },
   },
   yaxis: {
     max: totalCount + 2, // Set the maximum count value on the y-axis
   },
   title: {
     text: 'Class Statistics',
     align: 'center',
     margin: 10,
     offsetY: 20,
     style: {
       fontSize: '20px',
     },
   },
 };

 // Count students for each category
 const passCount = dummyData.filter((item) => item.coursePassed === 'PASS').length;
 const passedStudentsCount = dummyData.filter((item) => item.completionStatus === 'Complete').length;
 const failCount = dummyData.filter((item) => item.coursePassed === 'FAIL').length;
 const completedAllCoursesCount = dummyData.filter((item) => item.completionStatus === 'Complete' && item.moduleNumber === dummyData.length).length;

 const barChartSeries = [{
   name: 'Count',
   data: [passCount, passedStudentsCount, failCount, completedAllCoursesCount],
 }];
 // Function to download data as JSON and CSV
 const downloadAllStudentsData = () => {
  // Convert data to JSON
  const jsonData = JSON.stringify(dummyData, null, 2);

  // Create CSV content
  const csvContent = `data:text/csv;charset=utf-8,
    Course Passed,Completion Status,Module Number,First Name,Last Name
    ${dummyData.map(student => `${student.coursePassed},${student.completionStatus},${student.moduleNumber},${student.firstName},${student.lastName}`).join('\n')}
  `;

  // Create download links
  const jsonBlob = new Blob([jsonData], { type: 'application/json' });
  const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  const jsonUrl = URL.createObjectURL(jsonBlob);
  const csvUrl = URL.createObjectURL(csvBlob);

  // Create invisible links and trigger click
  const jsonLink = document.createElement('a');
  jsonLink.href = jsonUrl;
  jsonLink.download = 'students_data.json';

  const csvLink = document.createElement('a');
  csvLink.href = csvUrl;
  csvLink.download = 'students_data.csv';

  document.body.appendChild(jsonLink);
  jsonLink.click();
  document.body.removeChild(jsonLink);

  document.body.appendChild(csvLink);
  csvLink.click();
  document.body.removeChild(csvLink);
};
 // New state for pie chart data
 const [pausedStudents, setPausedStudents] = useState([]);
 const [passedStudents, setPassedStudents] = useState([]);
 const [failedStudents, setFailedStudents] = useState([]);
 const [completedAllCoursesStudents, setCompletedAllCoursesStudents] = useState([]);
 const [selectedPieChartCategory, setSelectedPieChartCategory] = useState(null);

  const handlePieChartClick = (category) => {
    setSelectedPieChartCategory(category);
    // Additional logic or state updates if needed
  };
 const fetchPieChartTablesData = async () => {
  try {
    // Fetch data for paused, passed, failed, and completed all courses students
    const pausedResponse = await axios.get('api/paused-students');
    const passedResponse = await axios.get('api/passed-students');
    const failedResponse = await axios.get('api/failed-students');
    const completedAllCoursesResponse = await axios.get('api/completed-all-courses-students');

    setPausedStudents(pausedResponse.data);
    setPassedStudents(passedResponse.data);
    setFailedStudents(failedResponse.data);
    setCompletedAllCoursesStudents(completedAllCoursesResponse.data);
  } catch (error) {
    console.error('Error fetching pie chart tables data:', error);
  }
};

const pieChartOptions = {
  chart: {
    width: '50%', // Set the width to 100%
    height: 800, // Adjust the height as needed
    type: 'pie',
  },
  labels: ['Paused Students', 'Passed Students', 'Failed Students', 'Completed All Courses Students'],
  colors: ['#FF4560', '#50A5F1', '#4CAF50', '#F1BA42'],
  responsive: [{
    options: {
      legend: {
        position: 'bottom',
      },
    },
  }],
  events: {
    dataPointSelection: (event, chartContext, config) => {
      const selectedCategory = config.w.config.labels[config.dataPointIndex];
      setSelectedPieChartCategory(selectedCategory);
      setIsPieChartViewVisible(true);
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



const pieChartSeries = [
  // Define your pie chart series data here
];

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
 // New state for the number of attempts
 const [numberOfAttemptsData, setNumberOfAttemptsData] = useState([]);

 useEffect(() => {
   // Fetch data for the number of attempts
   fetchNumberOfAttemptsData();
 }, []);

 const fetchNumberOfAttemptsData = async () => {
   try {
     // Sample logic to fetch the number of attempts data dynamically
     const response = await axios.get('api/number-of-attempts');
     setNumberOfAttemptsData(response.data);
   } catch (error) {
     console.error('Error fetching number of attempts data:', error);
   }
 };
  // Function to calculate the number of attempts for each student
  const calculateNumberOfAttempts = (student) => {
    const attempts = numberOfAttemptsData.filter((attempt) => attempt.studentId === student.studentId);
    return attempts.length;
  };
 return (
  <Layout className="layout">
   
      <h1 style={{ color: 'black', marginBottom: 0 }}>Dashboard view with Filters</h1>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentTab]} onClick={({ key }) => handleTabClick(key)}>
        <div style={{ position: 'absolute', top: 0, right: 20 }}>
          <SearchOutlined
            style={{ fontSize: 20, color: '#fff', cursor: 'pointer' }}
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          />
          {isSearchVisible && (
            <Input.Search
              placeholder="Search"
              style={{ width: 200 }}
              onChange={(e) => setSearchQuery(e.target.value)}
              onSearch={() => handleSearch(searchQuery)}
            />
          )}
          <Link to="/admin-login" style={{ marginLeft: 16 }}>
            <Button type="primary" size="large">
              Back to Admin Login
            </Button>
          </Link>
        </div>
      </Menu>
   
    <Content className="content">
      {isContentVisible && (
        <>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              {currentTab === 'DEWA ACADEMY' && (
                <>
                  <h2 style={{ marginTop: '90px' }}>Total Count of Students: {totalCount}</h2>
                  {classTopper && (
                    <h2>Class Topper: {classTopper.firstName} {classTopper.lastName}</h2>
                  )}
                  <Button type="primary" size="small" onClick={downloadAllStudentsData}>
                    View All Students
                  </Button>
           
          </>
        )}
        {currentTab === 'DEWA ACADEMY' && (
          <>
            {isBarChartVisible && (
              <>
                <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" />
                <div style={{ marginTop: 20 }}>
                  <Button onClick={handleBarChartViewToggle}>
                    Toggle Bar Chart View
                  </Button>
                </div>
              </>
            )}
            {isPieChartViewVisible && (
  <>
   
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

  </>
)}
            {currentTab === 'DEWA ACADEMY' && (
              <div style={{ marginTop: 20 }}>
                <Button onClick={handlePieChartViewToggle}>
                  Toggle Pie Chart View
                </Button>
              </div>
            )}
            {isBarChartVisible && (
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <h2>Bar Chart View</h2>
                  {/* Display the module assigned table here */}
                  {isSearchVisible && searchResult.length === 0 ? (
                    <Alert message="No data available for the search." type="info" showIcon />
                  ) : (
                    <ModuleAssignedAdmin searchData={isSearchVisible ? searchResult : moduleAssignedData} />
                  )}
                </Col>
              </Row>
            )}
 
{/* <ReactApexChart options={pieChartOptions} series={Object.values(pieChartData)} type="pie" /> */}

{isPieChartViewVisible && pieChartData && (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <h2>Pie Chart View</h2>
      {/* <ReactApexChart options={pieChartOptions} series={Object.values(pieChartData)} type="pie" /> */}
       {/* Display the module assigned table here */}
       {isSearchVisible && searchResult.length === 0 ? (
                    <Alert message="No data available for the search." type="info" showIcon />
                  ) : (
                    <ModuleAssignedAdmin searchData={isSearchVisible ? searchResult : moduleAssignedData} />
                  )}
    </Col>
  </Row>
)}
{/* {isPieChartViewVisible && (
  <>
   
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

  </>
)} */}

          </>
        )}
      </Col>
    </Row>
  </>
)}
        
      </Content>
       <Footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>About Dewa Learning</h2>
            <ul>
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/vacancies">Vacancies</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/our-network">Our network</Link></li>
              <li><Link to="/our-supporters">Our supporters</Link></li>
              <li><Link to="/governance">Governance</Link></li>
              <li><Link to="/dewa-awards">Dewa Awards</Link></li>
              {/* Add other links for "About Dewa Learning" section */}
            </ul>
          </div>

          <div className="footer-section">
            <h2>How can we help?</h2>
            <ul>
              <li><Link to="/contact-us">Contact us</Link></li>
              <li><Link to="/finding-us">Finding us</Link></li>
              <li><Link to="/news-and-views">News and views</Link></li>
              <li><Link to="/our-podcast">Our podcast</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/venue-hire">Venue hire</Link></li>
              {/* Add other links for "How can we help?" section */}
            </ul>
          </div>

          <div className="footer-section">
            <h2>Support</h2>
            <ul>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms and conditions</Link></li>
              <li><Link to="/safeguarding">Safeguarding</Link></li>
              {/* Add other links for "Support" section */}
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h2>© Dewa Learning Ltd.</h2>
        </div>
      </Footer>
    </Layout>
  );
  function getSelectedCategoryData() {
    switch (selectedPieChartCategory) {
      case 'Paused Students':
        return pausedStudents;
      case 'Passed Students':
        return passedStudents;
      case 'Failed Students':
        return failedStudents;
      case 'Completed All Courses Students':
        return completedAllCoursesStudents;
      default:
        return [];
    }
  }
};

export default AdminDashboard;




// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../Dashbaord"; // Adjust the import path as needed
// import ModuleAssigned from "../ModuleAssigned";
// import ModuleCompleted from "../ModuleCompleted";
// import ModuleLeft from "../ModuleLeft";
// import Login from "../Login";

// function AppRoutes() {
//   return (
//     <Routes>
      
//       <Route path="/home" element={<Dashboard />} />
//       <Route path="/" element={<Login />} />
//       <Route path="/student-dashboard" element={<Dashboard/>}/>
//       <Route path="/dashboard" element={<Dashboard/>}/>

//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

// // AppRoutes.js
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../Dashbaord"; // Adjust the import path as needed
// import ModuleAssigned from "../ModuleAssigned";
// import ModuleCompleted from "../ModuleCompleted";
// import ModuleLeft from "../ModuleLeft";
// import StudentDashboard from "../StudentDashboard"; // Import StudentDashboard

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//       <Route path="/student-dashboard/*" element={<StudentDashboard />} /> {/* Adjust the path */}
//     </Routes>
//   );
// }

// export default AppRoutes;
// // AppRoutes.js
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../Dashboard"; // Adjust the import path as needed
// import ModuleAssigned from "../ModuleAssigned";
// import ModuleCompleted from "../ModuleCompleted";
// import ModuleLeft from "../ModuleLeft";
// import StudentDashboard from "../StudentDashboard"; // Import StudentDashboard

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//       <Route path="/student-dashboard/*" element={<StudentDashboard />} /> {/* Adjust the path */}
//     </Routes>
//   );
// }

// export default AppRoutes;

// // AppRoutes.js
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from '../Home';
// import StudentLogin from '../StudentLogin';
// import AdminLogin from '../AdminLogin';
// import Dashboard from '../Dashboard';
// import ModuleAssigned from '../ModuleAssigned';
// import ModuleCompleted from '../ModuleCompleted';
// import ModuleLeft from '../ModuleLeft';
// import StudentSignup from '../StudentSignup';
// import AdminSignup from '../AdminSignup';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/student-login" element={<StudentLogin />} />
//       <Route path="/admin-login" element={<AdminLogin />} />
//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route path="module-assigned" element={<ModuleAssigned />} />
//         <Route path="module-completed" element={<ModuleCompleted />} />
//         <Route path="module-left" element={<ModuleLeft />} />
//       </Route>
//       <Route path="/student-signup" element={<StudentSignup />} />
//       <Route path="/admin-signup" element={<AdminSignup />} />
//     </Routes>
//   );
// }

// export default AppRoutes;


// // AppRoutes.js
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from '../Home';
// import StudentLogin from '../StudentLogin';
// import AdminLogin from '../AdminLogin';
// import AdminDashboard from '../AdminDashboard';
// import ModuleAssigned from '../ModuleAssigned';
// import ModuleAssignedAdmin from '../ModuleAssignedAdmin'; // Import the ModuleAssignedAdmin component
// import ModuleCompleted from '../ModuleCompleted';
// import ModuleLeft from '../ModuleLeft';
// import StudentSignup from '../StudentSignup';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/student-login" element={<StudentLogin />} />
//       <Route path="/admin-login" element={<AdminLogin />} />
//       <Route path="/admin-dashboard" element={<AdminDashboard />} />
//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-assigned-admin" element={<ModuleAssignedAdmin />} /> {/* Updated route for ModuleAssignedAdmin */}
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//       <Route path="/student-signup" element={<StudentSignup />} />
//     </Routes>
//   );
// }

// export default AppRoutes;






// // AppRoutes.js
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from '../Home';
// import StudentLogin from '../StudentLogin';
// import AdminLogin from '../AdminLogin';
// import AdminDashboard from '../AdminDashboard';
// import ModuleAssigned from '../ModuleAssigned';
// import ModuleAssignedAdmin from '../ModuleAssignedAdmin'; // Import the ModuleAssignedAdmin component
// import ModuleCompleted from '../ModuleCompleted';
// import ModuleLeft from '../ModuleLeft';
// import StudentSignup from '../StudentSignup';
// import StudentDashboard from '../StudentDashboard'; 

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/student-login" element={<StudentLogin />} />
//       <Route path="/admin-login" element={<AdminLogin />} />
//       <Route path="/admin-dashboard" element={<AdminDashboard />} />
//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-assigned-admin" element={<ModuleAssignedAdmin />} /> {/* Updated route for ModuleAssignedAdmin */}
//       <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* New route for StudentDashboard */}
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//       <Route path="/student-signup" element={<StudentSignup />} />
//     </Routes>
//   );
// }

// export default AppRoutes;



// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import StudentLogin from '../StudentLogin';
import AdminLogin from '../AdminLogin';
import AdminDashboard from '../AdminDashboard';
import ModuleAssigned from '../ModuleAssigned';
import ModuleAssignedAdmin from '../ModuleAssignedAdmin';
import ModuleCompleted from '../ModuleCompleted';
import ModuleLeft from '../ModuleLeft';
import StudentSignup from '../StudentSignup';
import StudentDashboard from '../StudentDashboard';
import TermsAndConditions from '../FooterHyperlinks/TermsAndConditions';
import PrivacyAndSecurity from '../FooterHyperlinks/PrivacyAndSecurity';
import Sitemap from '../FooterHyperlinks/Sitemap';
import WebsiteSurvey from '../FooterHyperlinks/WebsiteSurvey';
import TheWorkplaceAndCareers from '../FooterHyperlinks/TheWorkplaceAndCareers';
import CustomerHappinessCentres from '../FooterHyperlinks/CustomerHappinessCentres';
import CustomerCare from '../FooterHyperlinks/CustomerCare';
import CentreServices from '../FooterHyperlinks/CentreServices';
import SecurityEPass from '../FooterHyperlinks/SecurityEPass';
import DewaAcademyContent from '../DewaAcademyContent';
import FleetManagementPage from '../FleetManagementContent';
import DashboardTabs  from '../DashboardTabs';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path='/admin_tab' element={<DashboardTabs/>}/>
      <Route path="/dewa-academy" element={<DewaAcademyContent />} />
      <Route path="/fleet-management" element={<FleetManagementPage />} />
      <Route path="/module-assigned" element={<ModuleAssigned />} />
      <Route path="/module-assigned-admin" element={<ModuleAssignedAdmin />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      
      <Route path="/module-completed" element={<ModuleCompleted />} />
      <Route path="/module-left" element={<ModuleLeft />} />
      <Route path="/student-signup" element={<StudentSignup />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-and-security" element={<PrivacyAndSecurity />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/website-survey" element={<WebsiteSurvey />} />
      <Route path="/the-workplace-and-careers" element={<TheWorkplaceAndCareers />} />
      <Route path="/customer-happiness-centres" element={<CustomerHappinessCentres />} />
      <Route path="/customer-care" element={<CustomerCare />} />
      <Route path="/centre-services" element={<CentreServices />} />
      <Route path="/security-e-pass" element={<SecurityEPass />} />
    </Routes>
  );
}

export default AppRoutes;



// // AppRoutes.js
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from '../Home';
// import StudentLogin from '../StudentLogin';
// import AdminLogin from '../AdminLogin';
// import AdminDashboard from '../AdminDashboard';
// import ModuleAssigned from '../ModuleAssigned';
// import ModuleCompleted from '../ModuleCompleted';
// import ModuleLeft from '../ModuleLeft';
// import StudentSignup from '../StudentSignup';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/student-login" element={<StudentLogin />} />
//       <Route path="/admin-login" element={<AdminLogin />} />
//       <Route path="/admin-dashboard" element={<AdminDashboard />}>
        
//         <Route path="module-assigned" element={<ModuleAssigned />} />
//         <Route path="module-completed" element={<ModuleCompleted />} />
//         <Route path="module-left" element={<ModuleLeft />} />
//       </Route>
//       <Route path="/student-signup" element={<StudentSignup />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../Dashbaord"; // Correct the import path
// import ModuleAssigned from "../ModuleAssigned";
// import ModuleCompleted from "../ModuleCompleted";
// import ModuleLeft from "../ModuleLeft";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//     </Routes>
//   );
// }

// export default AppRoutes;




// // AppRoutes.js
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../Dashbaord"; // Adjust the import path as needed
// import ModuleAssigned from "../ModuleAssigned";
// import ModuleCompleted from "../ModuleCompleted";
// import ModuleLeft from "../ModuleLeft";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/module-assigned" element={<ModuleAssigned />} />
//       <Route path="/module-completed" element={<ModuleCompleted />} />
//       <Route path="/module-left" element={<ModuleLeft />} />
//     </Routes>
//   );
// }

// export default AppRoutes;
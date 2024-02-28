// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// import AppRoutes from './Components/AppRoutes'; // Adjust the path

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Router>
//     <AppRoutes /> {/* Use AppRoutes as the initial route */}
//   </Router>,
//   document.getElementById('root')
// );

// reportWebVitals();


// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AzureAD } from 'react-aad-msal';
import { LanguageProvider } from './Components/LanguageContext'; // Adjust the path
import AppRoutes from './Components/AppRoutes';
import { authProvider } from './authProvider'; // Adjust the path

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <AzureAD provider={authProvider} forceLogin={true}>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </AzureAD>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();



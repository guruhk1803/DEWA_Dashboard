// import { Space } from "antd";
// import "./App.css";
// import AppFooter from "./Components/AppFooter";
// import AppHeader from "./Components/AppHeader";
// import PageContent from "./Components/PageContent";
// import SideMenu from "./Components/SideMenu";

// function App() {
//   return (
//     <div className="App">
//       <AppHeader />
//       <div className="SideMenuAndPageContent">
//         <SideMenu></SideMenu>
//         <PageContent></PageContent>

//       </div>
//       <AppFooter />
//     </div>
//   );
// }
// export default App;

// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import LearnMore from './LearnMore';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from './authProvider';

function App() {
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        if (authenticationState === AuthenticationState.InProgress) {
          return <p>Authenticating...</p>;
        }

        if (authenticationState === AuthenticationState.Unauthenticated) {
          return (
            <div>
              {error && (
                <p>
                  <span>An error occurred during authentication, please try again!</span>
                </p>
              )}
              <p>
                <span>Hey stranger, you look new!</span>
                <button onClick={login}>Login</button>
              </p>
            </div>
          );
        }

        if (authenticationState === AuthenticationState.Authenticated) {
          return (
            <div>
              <Routes>
                <Route
                  path="/learn-more"
                  element={accountInfo ? <LearnMore /> : <Navigate to="/" />}
                />
                <Route
                  path="/"
                  element={accountInfo ? <Dashboard /> : <Navigate to="/learn-more" />}
                />
              </Routes>
              <button onClick={logout}>Logout</button>
            </div>
          );
        }

        return null;
      }}
    </AzureAD>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign-up" element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;




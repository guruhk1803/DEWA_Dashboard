// import React, { useState } from "react";
// import { Button, Input, notification } from "antd";
// import "./Login.css"; // Import your custom styles if needed
// import {  useNavigate } from "react-router-dom";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const history = useNavigate();

//   const handleLogin = () => {
//     // Validate credentials against .env file
//     const isStudentLogin =
//       username === process.env.REACT_APP_STUDENT_USERNAME &&
//       password === process.env.REACT_APP_STUDENT_PASSWORD;
//     const isManagerLogin =
//       username === process.env.REACT_APP_MANAGER_USERNAME &&
//       password === process.env.REACT_APP_MANAGER_PASSWORD;

//     if (isStudentLogin || isManagerLogin) {
//       setUserType(isStudentLogin ? "student" : "manager");
//       onLogin({ isStudent: isStudentLogin, isManager: isManagerLogin });
//       history.push(isStudentLogin ? "/student-dashboard" : "/manager-dashboard");
//     } else {
//       notification.error({
//         message: "Login Failed",
//         description: "Invalid username or password. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="login-container">
//       <Input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <Input.Password
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button type="primary" onClick={handleLogin}>
//         Login
//       </Button>
//     </div>
//   );
// };

// export default Login;
// // src/components/Login.js
// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Simulate login logic
//     if (username === process.env.REACT_APP_ADMIN_ID && password === process.env.REACT_APP_ADMIN_PASSWORD) {
//       onLogin('admin');
//     } else if (username.startsWith('student') && password === process.env.REACT_APP_STUDENT_PASSWORD) {
//       onLogin(username);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginType, setLoginType] = useState('');

//   const handleLogin = () => {
//     if (loginType === 'student') {
//       if (
//         username === process.env.REACT_APP_STUDENT_ID &&
//         password === process.env.REACT_APP_STUDENT_PASSWORD
//       ) {
//         onLogin('student');
//       } else {
//         alert('Invalid student credentials');
//       }
//     } else if (loginType === 'admin') {
//       if (
//         username === process.env.REACT_APP_ADMIN_ID &&
//         password === process.env.REACT_APP_ADMIN_PASSWORD
//       ) {
//         onLogin('admin');
//       } else {
//         alert('Invalid admin credentials');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={() => setLoginType('student')}>Student Login</button>
//       <button onClick={() => setLoginType('admin')}>Admin Login</button>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login logic
    if (username === process.env.REACT_APP_ADMIN_ID && password === process.env.REACT_APP_ADMIN_PASSWORD) {
      onLogin('admin');
    } else if (username.startsWith('student') && password === process.env.REACT_APP_STUDENT_PASSWORD) {
      onLogin(username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
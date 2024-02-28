// // src/components/AdminLogin.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement admin login logic
//     if (username === process.env.REACT_APP_ADMIN_USERNAME && password === process.env.REACT_APP_ADMIN_PASSWORD) {
//       alert('Admin Login Successful!');
//       // Implement the logic for successful admin login
//     } else {
//       alert('Invalid admin credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Admin Login</button>
//       <p>
//         Not an admin? <Link to="/student-login">Student Login</Link>
//       </p>
//     </div>
//   );
// };

// export default AdminLogin;



// AdminLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useLanguage } from './LanguageContext'; // Update the path


import './AdminLogin.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  const handleLogin = () => {
    // Implement admin login logic
    if (
      adminId === process.env.REACT_APP_ADMIN_ID &&
      adminPassword === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      setLoggedIn(true);
      navigate('/admin_tab'); // Redirect to Admin Dashboard
    } else {
      alert(
        selectedLanguage === 'arabic'
          ? 'بيانات تسجيل الدخول غير صحيحة'
          : 'Invalid admin credentials'
      );
    }
  };

  return (
    <div className="login-container">
      <h2>
        {selectedLanguage === 'arabic'
          ? 'تسجيل دخول المشرف'
          : 'Admin Login'}
      </h2>
      <input
        type="text"
        placeholder={
          selectedLanguage === 'arabic' ? 'رقم المشرف' : 'Admin ID'
        }
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <input
        type="password"
        placeholder={
          selectedLanguage === 'arabic'
            ? 'كلمة مرور المشرف'
            : 'Admin Password'
        }
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
      />
      <Button type="primary" onClick={handleLogin}>
        {selectedLanguage === 'arabic'
          ? 'تسجيل دخول المشرف'
          : 'Admin Login'}
      </Button>

      {loggedIn && (
        <div>
          {/* You can add additional components here if needed */}
        </div>
      )}

      <div>
        <label>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          {selectedLanguage === 'arabic'
            ? 'موافق على الشروط والأحكام'
            : 'Agree to the terms and conditions'}
        </label>
      </div>

      <p>
        {selectedLanguage === 'arabic'
          ? 'هل تمتلك حسابًا؟'
          : 'Already a user?'}{' '}
        <Link to="/student-login">
          {selectedLanguage === 'arabic' ? 'تسجيل الدخول' : 'Login'}
        </Link>
      </p>
    </div>
  );
};

export default AdminLogin;

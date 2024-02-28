// // src/components/StudentLogin.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const StudentLogin = () => {
//   const [studentId, setStudentId] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [agree, setAgree] = useState(false);

//   const handleGenerateOTP = () => {
//     // Implement OTP generation logic (you can use a library or your own logic)
//     const generatedOTP = '123456'; // Replace with actual OTP generation logic
//     setOtp(generatedOTP);
//   };

//   const handleLogin = () => {
//     if (agree && otp === '123456') {
//       // Implement the logic for successful student login
//       alert('Student Login Successful!');
//     } else {
//       alert('Invalid credentials or terms not agreed');
//     }
//   };

//   return (
//     <div className="student-login-container">
//       <h2>Student Login</h2>
//       <input
//         type="text"
//         placeholder="Student ID"
//         value={studentId}
//         onChange={(e) => setStudentId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Student Name"
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleGenerateOTP}>Generate OTP</button>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={agree}
//           onChange={() => setAgree(!agree)}
//         />
//         I agree to the terms and conditions
//       </label>
//       <button onClick={handleLogin}>Login</button>
//       <div className="signup-link">
//         <p>Not a user?</p>
//         <Link to="/signup">Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;



// // src/components/StudentLogin.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const StudentLogin = () => {
//   const [studentId, setStudentId] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [agree, setAgree] = useState(false);

//   const handleGenerateOTP = () => {
//     // Implement OTP generation logic (you can use a library or your own logic)
//     const generatedOTP = '123456'; // Replace with actual OTP generation logic
//     setOtp(generatedOTP);
//   };

//   const handleLogin = () => {
//     if (agree && otp === '123456') {
//       // Implement the logic for successful student login
//       alert('Student Login Successful!');
//     } else {
//       alert('Invalid credentials or terms not agreed');
//     }
//   };

//   return (
//     <div className="student-login-container">
//       <h2>Student Login</h2>
//       <input
//         type="text"
//         placeholder="Student ID"
//         value={studentId}
//         onChange={(e) => setStudentId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Student Name"
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleGenerateOTP}>Generate OTP</button>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={agree}
//           onChange={() => setAgree(!agree)}
//         />
//         I agree to the terms and conditions
//       </label>
//       <button onClick={handleLogin}>Login</button>
//       <div className="signup-link">
//         <p>Not a user?</p>
//         <Link to="/signup">Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const StudentLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('REACT_APP_STUDENT_ID:', process.env.REACT_APP_STUDENT_ID);
//     console.log('REACT_APP_STUDENT_PASSWORD:', process.env.REACT_APP_STUDENT_PASSWORD);

//     // Implement student login logic
//     if (username === process.env.REACT_APP_STUDENT_ID && password === process.env.REACT_APP_STUDENT_PASSWORD) {
//       alert('Student Login Successful!');
//       // Implement the logic for successful student login
//     } else {
//       alert('Invalid student credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Student Login</h2>
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
//       <button onClick={handleLogin}>Student Login</button>
//       <p>
//         Not a student? <Link to="/admin-login">Admin Login</Link>
//       </p>
//     </div>
//   );
// };

// export default StudentLogin;



// // StudentLogin.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const StudentLogin = () => {
//   const [studentId, setStudentId] = useState('');
//   const [studentPassword, setStudentPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [agreed, setAgreed] = useState(false);
//   const navigate = useNavigate(); // Hook for navigation

//   const generateOTP = () => {
//     const randomOTP = Math.floor(1000 + Math.random() * 9000);
//     setOtp(randomOTP.toString());
//   };

//   const handleLogin = () => {
//     if (studentId.startsWith('start') && studentPassword.startsWith('password') && agreed && otp !== '') {
//       alert('Student Login Successful!');
//       // Use the navigate function to redirect to the dashboard
//       navigate('/dashboard');
//     } else {
//       alert('Invalid student credentials or agreement not accepted');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Student Login</h2>
//       <input
//         type="text"
//         placeholder="Student ID*"
//         onChange={(e) => setStudentId(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password*"
//         onChange={(e) => setStudentPassword(e.target.value)}
//         required
//       />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />
//         <button onClick={generateOTP}>Generate OTP</button>
//       </div>
//       <label>
//         <input type="checkbox" onChange={() => setAgreed(!agreed)} /> I agree to terms and conditions
//       </label>
//       <button onClick={handleLogin}>Student Login</button>
//     </div>
//   );
// };

// export default StudentLogin;




// StudentLogin.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import { useLanguage } from './LanguageContext'; // Update the path
import './StudentLogin.css';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    fetchData();
  }, []);

  const generateOTP = () => {
    const randomOTP = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomOTP.toString());
  };

  const handleLogin = () => {
    const validCredentials =
      studentId === process.env.REACT_APP_STUDENT_ID &&
      studentPassword === process.env.REACT_APP_STUDENT_PASSWORD;

    if (validCredentials && agreed && otp !== '') {
      alert('Student Login Successful!');
      fetchData();
      navigate('/student-dashboard'); // Redirect to the student dashboard
    } else {
      alert('Invalid student credentials or agreement not accepted');
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>
        {selectedLanguage === 'arabic' ? 'تسجيل الدخول للطلاب' : 'Student Login'}
      </h2>
      <input
        type="text"
        placeholder={
          selectedLanguage === 'arabic' ? 'رقم الطالب' : 'Student ID'
        }
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="password"
        placeholder={
          selectedLanguage === 'arabic' ? 'كلمة المرور' : 'Password'
        }
        onChange={(e) => setStudentPassword(e.target.value)}
      />
      <Button type="primary" onClick={generateOTP}>
        {selectedLanguage === 'arabic' ? 'توليد رمز OTP' : 'Generate OTP'}
      </Button>
      <input
        type="text"
        placeholder={
          selectedLanguage === 'arabic' ? 'أدخل رمز OTP' : 'Enter OTP'
        }
        value={otp}
        disabled
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          {selectedLanguage === 'arabic'
            ? 'أوافق على الشروط والأحكام'
            : 'I agree to terms and conditions'}
        </label>
      </div>
      <Button type="primary" onClick={handleLogin}>
        {selectedLanguage === 'arabic' ? 'تسجيل دخول الطالب' : 'Student Login'}
      </Button>

      <p>
        {selectedLanguage === 'arabic'
          ? 'ليس طالبًا؟'
          : 'Not a student?'}{' '}
        <Link to="/admin-login">
          {selectedLanguage === 'arabic' ? 'تسجيل دخول المشرف' : 'Admin Login'}
        </Link>
      </p>
    </div>
  );
};

export default StudentLogin;

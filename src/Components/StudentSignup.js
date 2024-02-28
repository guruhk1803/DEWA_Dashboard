// // src/components/StudentSignup.js
// import React from 'react';

// const StudentSignup = () => {
//   // Implement student signup logic
//   return (
//     <div>
//       <h2>Student Signup</h2>
//       {/* Include signup form elements for students */}
//     </div>
//   );
// };

// export default StudentSignup;


// StudentSignup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useLanguage } from './LanguageContext'; // Update the path

const StudentSignup = () => {
  const { selectedLanguage } = useLanguage();

  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notARobot, setNotARobot] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Simple validation checks
    if (!studentName || !studentId || !studentPassword || !confirmPassword || !notARobot) {
      setError(selectedLanguage === 'arabic' ? 'يرجى ملء جميع الحقول' : 'Please fill in all the fields');
      return;
    }

    // Check if passwords match
    if (studentPassword !== confirmPassword) {
      setError(selectedLanguage === 'arabic' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }

    // Implement student signup logic here
    // Validate data and perform signup actions
    console.log('Student Signup:', {
      studentName,
      studentId,
      studentPassword,
      confirmPassword,
      notARobot,
    });

    // Redirect to the student login page
    window.location.href = '/student-login';
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>
          {selectedLanguage === 'arabic'
            ? 'إنشاء حساب طالب'
            : 'Create Student Account'}
        </h2>
        <form>
          <div>
            <label>
              {selectedLanguage === 'arabic'
                ? 'اسم الطالب:'
                : 'Student Name:'}
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <div>
            <label>
              {selectedLanguage === 'arabic'
                ? 'رقم الطالب:'
                : 'Student ID:'}
            </label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div>
            <label>
              {selectedLanguage === 'arabic'
                ? 'كلمة المرور:'
                : 'Password:'}
            </label>
            <input
              type="password"
              value={studentPassword}
              onChange={(e) => setStudentPassword(e.target.value)}
            />
          </div>
          <div>
            <label>
              {selectedLanguage === 'arabic'
                ? 'تأكيد كلمة المرور:'
                : 'Confirm Password:'}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={notARobot}
                onChange={() => setNotARobot(!notARobot)}
              />
              {selectedLanguage === 'arabic'
                ? 'ليس روبوتًا'
                : 'Not a robot'}
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <Button type="primary" onClick={handleSignup}>
              {selectedLanguage === 'arabic'
                ? 'إنشاء حساب'
                : 'Create Account'}
            </Button>
          </div>
          <div>
            <p>
              {selectedLanguage === 'arabic'
                ? 'هل لديك حساب؟'
                : 'Already have an account?'}{' '}
              <Link to="/student-login">
                {selectedLanguage === 'arabic' ? 'تسجيل الدخول' : 'Login'}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;

// src/components/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <Link to="/student-signup"> {/* Updated path for student signup */}
        <button>Student Signup</button>
      </Link>
      <Link to="/admin-signup"> {/* Updated path for admin signup */}
        <button>Admin Signup</button>
      </Link>
    </div>
  );
};

export default SignUp;

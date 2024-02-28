
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginType, setLoginType] = useState('');

//   const handleLogin = () => {
//     if (loginType === 'student') {
//       if (
//         username === process.env.REACT_APP_STUDENT_ID &&
//         password === process.env.REACT_APP_STUDENT_PASSWORD
//       ) {
//         alert('Student Login Successful!');
//         // Implement the logic for successful student login
//       } else {
//         alert('Invalid student credentials');
//       }
//     } else if (loginType === 'admin') {
//       if (
//         username === process.env.REACT_APP_ADMIN_ID &&
//         password === process.env.REACT_APP_ADMIN_PASSWORD
//       ) {
//         alert('Admin Login Successful!');
//         // Implement the logic for successful admin login
//       } else {
//         alert('Invalid admin credentials');
//       }
//     }
//   };

//   return (
//     <div className="home-container">
//       <h2>Welcome to the Learning Platform</h2>
//       <div className="login-section">
//         <div className="login-options">
//           <div className="login-option">
//             <h3>Student Login</h3>
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => setLoginType('student')}>Student Login</button>
//           </div>
//           <div className="login-option">
//             <h3>Admin Login</h3>
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => setLoginType('admin')}>Admin Login</button>
//           </div>
//         </div>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Home;

// // src/components/Home.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginType, setLoginType] = useState('');

//   const handleLogin = () => {
//     if (loginType === 'student') {
//       if (
//         username === process.env.REACT_APP_STUDENT_ID &&
//         password === process.env.REACT_APP_STUDENT_PASSWORD
//       ) {
//         alert('Student Login Successful!');
//         // Redirect to the student dashboard
//         window.location.href = "/student-dashboard";
//       } else {
//         alert('Invalid student credentials');
//       }
//     } else if (loginType === 'admin') {
//       if (
//         username === process.env.REACT_APP_ADMIN_ID &&
//         password === process.env.REACT_APP_ADMIN_PASSWORD
//       ) {
//         alert('Admin Login Successful!');
//         // Redirect to the admin dashboard
//         window.location.href = "/admin-dashboard";
//       } else {
//         alert('Invalid admin credentials');
//       }
//     }
//   };

//   return (
//     <div className="home-container">
//       <h2>Welcome to the Learning Platform</h2>
//       <div className="login-section">
//         <div className="login-options">
//           <div className="login-option">
//             <h3>Student Login</h3>
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => setLoginType('student')}>Student Login</button>
//           </div>
//           <div className="login-option">
//             <h3>Admin Login</h3>
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => setLoginType('admin')}>Admin Login</button>
//           </div>
//         </div>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Home;



// // src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2>Welcome to the Learning Platform</h2>
//       <h2>Explore our modules and enhance your skills</h2>
//       <div className="link-container">
//         <Link to="/student-login" className="link">
//           Student Login
//         </Link>
//         <Link to="/admin-login" className="link link-secondary">
//           Admin Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2>Welcome to the Learning Platform</h2>
//       <div className="login-section">
//         <div className="login-options">
//           <div className="login-option">
//             <h3>Student Login</h3>
//             <Link to="/student-login" className="link">
//               Student Login
//             </Link>
//           </div>
//           <div className="login-option">
//             <h3>Admin Login</h3>
//             <Link to="/admin-login" className="link">
//               Admin Login
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="signup-section">
//         {/* Link to the student signup page */}
//         <Link to="/student-signup" className="link">
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

// // Home.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Icon from '@mdi/react';
// import { mdiEmoticonHappy, mdiEmoticonNeutral, mdiEmoticonSad } from '@mdi/js';
// import { useLanguage } from './LanguageContext';
// import HelpChat from './AppFooter/HelpChat';

// import './Home.css';

// const Home = () => {
//   const { selectedLanguage, changeLanguage } = useLanguage();
//   const [happinessRating, setHappinessRating] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [isHappinessMeterOpen, setHappinessMeterOpen] = useState(false);

//   // Placeholder logic for user authentication status
//   const isAuthenticated = false; // Set to true if the user is authenticated

//   const backgroundImageStyle = {
//     backgroundImage: `url(${process.env.PUBLIC_URL}/logos/DEWA Acadamy Banner.png)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   const handleRating = (rating) => {
//     setHappinessRating(rating);
//     setSubmitted(true); // Auto-submit for demonstration purposes
//   };

//   const handleClose = () => {
//     setHappinessRating('');
//     setSubmitted(false);
//     setHappinessMeterOpen(false);
//   };

//   return (
//     <div className="home-container" style={backgroundImageStyle}>
//       <div className="logo-section">
//         <Link to="https://www.digitaldubai.ae/home-page" target="_blank" rel="noopener noreferrer">
//           <img
//             src="/logos/Government_of_Dubai_logo.svg.png"
//             alt="Government of Dubai Logo"
//             className="logo-left"
//           />
//         </Link>
//         <Link to="https://www.dewa.gov.ae/en/" target="_blank" rel="noopener noreferrer">
//           <img
//             src="/logos/dewalogo2024.png"
//             alt="DEWA Logo 2024"
//             className="logo-right"
//           />
//         </Link>
//       </div>
//       <div className="language-tab" onClick={changeLanguage}>
//         {selectedLanguage === 'english' ? 'EN' : 'عربى'}
//       </div>

//       <h2>{selectedLanguage === 'arabic' ? 'مرحبًا بك في أكاديمية ديوا' : 'Welcome to DEWA'}</h2>

//       <div className="login-section">
//         {isAuthenticated ? (
//           <Link to="/dashboard" className="link">
//             {selectedLanguage === 'arabic' ? 'الانتقال إلى لوحة القيادة' : 'Go to Dashboard'}
//           </Link>
//         ) : (
//           <div className="login-options">
//             {/* Admin Login */}
//             <div className="login-option">
//               <Link to="/admin-login" className="link">
//                 <h3>{selectedLanguage === 'arabic' ? 'تسجيل الدخول للمشرفين' : 'Admin Login'}</h3>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="signup-section">
//         {!isAuthenticated && (
//           <p>
//             {selectedLanguage === 'arabic' ? 'ليس لديك حساب بعد؟' : 'Don\'t have an account yet?'}
//             <Link to="/student-signup" className="link">
//               {selectedLanguage === 'arabic' ? 'سجل' : 'Sign Up'}
//             </Link>
//           </p>
//         )}
//       </div>

//       <div className="logos-bottom-section">
//         <a href="https://twitter.com/dewaofficial" target="_blank" rel="noopener noreferrer">
//           <img src="/logos/twitter.png" alt="Twitter Logo" className="social-logo-small" />
//         </a>
//         <a href="https://www.facebook.com/dewaofficial" target="_blank" rel="noopener noreferrer">
//           <img src="/logos/facebook.png" alt="Facebook Logo" className="social-logo-small" />
//         </a>
//         <a href="https://www.instagram.com/dewaofficial/" target="_blank" rel="noopener noreferrer">
//           <img src="/logos/instagram.png" alt="Instagram Logo" className="social-logo-small" />
//         </a>
//         <a href="https://www.youtube.com/user/DEWAVIDEOGALLERY/videos" target="_blank" rel="noopener noreferrer">
//           <img src="/logos/youtube.png" alt="YouTube Logo" className="social-logo-small" />
//         </a>
//         <a href="https://www.linkedin.com/company/dewaofficial/" target="_blank" rel="noopener noreferrer">
//           <img src="/logos/linkedin.png" alt="LinkedIn Logo" className="social-logo-small" />
//         </a>
//         <div className="happiness-meter-icon-bottom" onClick={() => setHappinessMeterOpen(true)}>
//           <Icon path={mdiEmoticonHappy} size={1} />
//         </div>
//       </div>

//       {/* HelpChat component as a small button */}
//       <div className="help-chat-button-bottom-left">
//         <HelpChat />
//       </div>

//       <div className="footer-links">
//   <Link href="https://www.google.com" target="_blank">
//     Privacy Policy
//   </Link>
//   <span style={{ margin: '0 8px' }}>|</span>
//   <Link href="https://www.google.com" target="_blank">
//     Terms of Use
//   </Link>
// </div>

//       {isHappinessMeterOpen && (
//         <div className="happiness-popup">
//           <div className="happiness-header">
//             <h3>{selectedLanguage === 'arabic' ? 'مقياس السعادة' : 'Happiness Meter'}</h3>
//             <button className="close-button" onClick={handleClose}>
//               X
//             </button>
//           </div>
//           <div className="smiley-options">
//             <div className={`smiley-option ${happinessRating === 'good' ? 'selected' : ''}`} onClick={() => handleRating('good')}>
//               <Icon path={mdiEmoticonHappy} size={2} />
//             </div>
//             <div className={`smiley-option ${happinessRating === 'average' ? 'selected' : ''}`} onClick={() => handleRating('average')}>
//               <Icon path={mdiEmoticonNeutral} size={2} />
//             </div>
//             <div className={`smiley-option ${happinessRating === 'bad' ? 'selected' : ''}`} onClick={() => handleRating('bad')}>
//               <Icon path={mdiEmoticonSad} size={2} />
//             </div>
//           </div>
//           {submitted && (
//             <div className="thank-you-message">
//               {selectedLanguage === 'arabic' ? 'شكرًا لتقييمك!' : 'Thank you for your Feedback!'}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiEmoticonHappy, mdiEmoticonNeutral, mdiEmoticonSad } from '@mdi/js';
import { useLanguage } from './LanguageContext';
import HelpChat from './AppFooter/HelpChat';

import './Home.css';

const Home = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [happinessRating, setHappinessRating] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isHappinessMeterOpen, setHappinessMeterOpen] = useState(false);

  // Placeholder logic for user authentication status
  const isAuthenticated = false; // Set to true if the user is authenticated

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/logos/DEWA Acadamy Banner.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleRating = (rating) => {
    setHappinessRating(rating);
    setSubmitted(true); // Auto-submit for demonstration purposes
  };

  const handleClose = () => {
    setHappinessRating('');
    setSubmitted(false);
    setHappinessMeterOpen(false);
  };

  return (
    <div className="home-container" style={backgroundImageStyle}>
      <div className="logo-section">
        <Link to="https://www.digitaldubai.ae/home-page" target="_blank" rel="noopener noreferrer">
          <img
            src="/logos/Government_of_Dubai_logo.svg.png"
            alt="Government of Dubai Logo"
            className="logo-left"
          />
        </Link>
        <Link to="https://www.dewa.gov.ae/en/" target="_blank" rel="noopener noreferrer">
          <img
            src="/logos/dewalogo2024.png"
            alt="DEWA Logo 2024"
            className="logo-right"
          />
        </Link>
      </div>
      <div className="language-tab" onClick={changeLanguage}>
        {selectedLanguage === 'english' ? 'EN' : 'عربى'}
      </div>

      <h2>{selectedLanguage === 'arabic' ? 'مرحبًا بك في أكاديمية ديوا' : 'Welcome to DEWA'}</h2>

      <div className="login-section">
        {isAuthenticated ? (
          <Link to="/dashboard" className="link">
            {selectedLanguage === 'arabic' ? 'الانتقال إلى لوحة القيادة' : 'Go to Dashboard'}
          </Link>
        ) : (
          <div className="login-options">
            {/* Admin Login */}
            <div className="login-option">
              <Link to="/admin-login" className="link">
                <h3>{selectedLanguage === 'arabic' ? 'تسجيل الدخول للمشرفين' : 'Admin Login'}</h3>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="signup-section">
        {!isAuthenticated && (
          <p>
            {selectedLanguage === 'arabic' ? 'ليس لديك حساب بعد؟' : 'Don\'t have an account yet?'}
            <Link to="/student-signup" className="link">
              {selectedLanguage === 'arabic' ? 'سجل' : 'Sign Up'}
            </Link>
          </p>
        )}
      </div>

      {/* Removed social media links */}

      {/* HelpChat component as a small button */}
      <div className="help-chat-button-bottom-left">
        <HelpChat />
      </div>

      <div className="footer-links">
        <Link href="https://www.google.com" target="_blank">
          Privacy Policy
        </Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link href="https://www.google.com" target="_blank">
          Terms of Use
        </Link>
      </div>

      {isHappinessMeterOpen && (
        <div className="happiness-popup">
          <div className="happiness-header">
            <h3>{selectedLanguage === 'arabic' ? 'مقياس السعادة' : 'Happiness Meter'}</h3>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
          </div>
          <div className="smiley-options">
            <div className={`smiley-option ${happinessRating === 'good' ? 'selected' : ''}`} onClick={() => handleRating('good')}>
              <Icon path={mdiEmoticonHappy} size={2} />
            </div>
            <div className={`smiley-option ${happinessRating === 'average' ? 'selected' : ''}`} onClick={() => handleRating('average')}>
              <Icon path={mdiEmoticonNeutral} size={2} />
            </div>
            <div className={`smiley-option ${happinessRating === 'bad' ? 'selected' : ''}`} onClick={() => handleRating('bad')}>
              <Icon path={mdiEmoticonSad} size={2} />
            </div>
          </div>
          {submitted && (
            <div className="thank-you-message">
              {selectedLanguage === 'arabic' ? 'شكرًا لتقييمك!' : 'Thank you for your Feedback!'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

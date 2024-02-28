// import { Typography, Button } from "antd";

// function AppFooter() {
//   // Handle the logic when the Help button is clicked
//   const handleHelpClick = () => {
//     // Implement the desired functionality, e.g., opening a chatbox
//     console.log("Help button clicked");
//   };

//   return (
//     <div className="AppFooter">
//       {/* Only one Help button */}
//       <Button type="primary" onClick={handleHelpClick}>
//         Help
//       </Button>
//       <Typography.Link href="https://www.google.com" target={"_blank"}>
//         Privacy Policy
//       </Typography.Link>
//       <Typography.Link href="https://www.google.com" target={"_blank"}>
//         Terms of Use
//       </Typography.Link>
//     </div>
//   );
// }

// export default AppFooter;
import React from "react";
import { Typography } from "antd";
import HelpChat from "./HelpChat";

const { Link } = Typography;

function AppFooter() {
  return (
    <div className="AppFooter">
      <HelpChat />

      <Link href="https://www.google.com" target="_blank">
        Privacy Policy
      </Link>
      <Link href="https://www.google.com" target="_blank">
        Terms of Use
      </Link>
    </div>
  );
}

export default AppFooter;

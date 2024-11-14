// 'use client';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from '@mui/material';

// export default function TopBar() {

//   // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event) => {
//     //setAnchorElNav(event.currentTarget);
//     alert("work")
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed"> {/* Changed position to fixed */}
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={handleOpenNavMenu}

//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             GGrader
//           </Typography>
//           <Button color="inherit"
//             sx={{
//                 backgroundColor: '#4CAF50', // เปลี่ยนสีพื้นหลัง
//                 color: 'white', // เปลี่ยนสีตัวอักษร
//                 padding: '6px 16px', // ปรับขนาดปุ่ม
//                 borderRadius: '8px', // เพิ่มขอบโค้งมน
//                 '&:hover': { // สไตล์เมื่อ hover
//                     backgroundColor: '#45A049',
//                 },
//                 }}
//           >Connect Wallet</Button>
//         </Toolbar>
//       </AppBar>
//       {/* Add a spacer div to prevent content from hiding behind the AppBar */}
//       <Toolbar />
//     </Box>
//   );
// }

"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { usePathname, useRouter } from 'next/navigation';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  //const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget); // Open the menu
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null); // Close the menu
  };

  const handleNavtoHome = () => {
    // back to home
    //router.push(`GGrader/home`);
    //alert("Go to Home")
    //<Link to={'/HomePage'}>Home</Link>
    //navigate('/HomePage'); // Navigate to the Home page
    setAnchorElNav(null);
  };

  const handleNavtoProblemCreatePage = () => {
    // go to problem create page
    //router.push(`GGrader/problem_create`);
    alert("Go to problem create page");
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu} // Opens the menu on click
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu} // Closes the menu
            >
              <MenuItem onClick={handleNavtoHome}>
                <Link
                  to="/HomePage"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleNavtoProblemCreatePage}>
                <Link
                  to="/CreateProblem"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Create New Problem
                </Link>
              </MenuItem>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GGrader
            </Typography>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "6px 16px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#45A049",
                },
              }}
            >
              Connect Wallet
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
}

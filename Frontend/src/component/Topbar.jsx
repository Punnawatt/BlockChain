// "use client";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { Link } from "react-router-dom";


// export default function TopBar() {
//   //const router = useRouter();

//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget); // Open the menu
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null); // Close the menu
//   };

//   const handleNavtoHome = () => {
//     // back to home
//     //router.push(`GGrader/home`);
//     //alert("Go to Home")
//     //<Link to={'/HomePage'}>Home</Link>
//     //navigate('/HomePage'); // Navigate to the Home page
//     setAnchorElNav(null);
//   };

//   const handleNavtoProblemCreatePage = () => {
//     // go to problem create page
//     //router.push(`GGrader/problem_create`);
//     alert("Go to problem create page");
//     setAnchorElNav(null);
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="fixed">
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={handleOpenNavMenu} // Opens the menu on click
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElNav}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu} // Closes the menu
//             >
//               <MenuItem onClick={handleNavtoHome}>
//                 <Link
//                   to="/problems"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   Home
//                 </Link>
//               </MenuItem>
//               <MenuItem onClick={handleNavtoProblemCreatePage}>
//                 <Link
//                   to="/CreateProblem"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   Create New Problem
//                 </Link>
//               </MenuItem>
//             </Menu>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               GGrader
//             </Typography>
//             <Button
//               color="inherit"
//               sx={{
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 padding: "6px 16px",
//                 borderRadius: "8px",
//                 "&:hover": {
//                   backgroundColor: "#45A049",
//                 },
//               }}
//             >
//               Connect Wallet
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <Toolbar />
//       </Box>
//     </>
//   );
// }

// // "use client";
// // import * as React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";
// // import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import { Link } from "react-router-dom";
// // import { ethers } from "ethers";

// // export default function TopBar() {
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [walletAddress, setWalletAddress] = React.useState(null);

// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget); // Open the menu
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null); // Close the menu
// //   };

// //   const connectWallet = async () => {
// //     if (window.ethereum) {
// //       try {
// //         // Request wallet connection
// //         const accounts = await window.ethereum.request({
// //           method: "eth_requestAccounts",
// //         });
// //         setWalletAddress(accounts[0]); // Save the connected wallet address
// //         console.log("Connected wallet:", accounts[0]);
// //       } catch (error) {
// //         console.error("Wallet connection failed:", error);
// //       }
// //     } else {
// //       alert("MetaMask is not installed. Please install it to use this feature.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Box sx={{ flexGrow: 1 }}>
// //         <AppBar position="fixed">
// //           <Toolbar>
// //             <IconButton
// //               size="large"
// //               edge="start"
// //               color="inherit"
// //               aria-label="menu"
// //               sx={{ mr: 2 }}
// //               onClick={handleOpenNavMenu} // Opens the menu on click
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               anchorEl={anchorElNav}
// //               open={Boolean(anchorElNav)}
// //               onClose={handleCloseNavMenu} // Closes the menu
// //             >
// //               <MenuItem onClick={handleCloseNavMenu}>
// //                 <Link
// //                   to="/problems"
// //                   style={{ textDecoration: "none", color: "inherit" }}
// //                 >
// //                   Home
// //                 </Link>
// //               </MenuItem>
// //               <MenuItem onClick={handleCloseNavMenu}>
// //                 <Link
// //                   to="/CreateProblem"
// //                   style={{ textDecoration: "none", color: "inherit" }}
// //                 >
// //                   Create New Problem
// //                 </Link>
// //               </MenuItem>
// //             </Menu>
// //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //               GGrader
// //             </Typography>
// //             <Button
// //               onClick={connectWallet} // Connect wallet when clicked
// //               sx={{
// //                 backgroundColor: "#4CAF50",
// //                 color: "white",
// //                 padding: "6px 16px",
// //                 borderRadius: "8px",
// //                 "&:hover": {
// //                   backgroundColor: "#45A049",
// //                 },
// //               }}
// //             >
// //               {walletAddress
// //                 ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
// //                 : "Connect Wallet"}
// //             </Button>
// //           </Toolbar>
// //         </AppBar>
// //         <Toolbar />
// //       </Box>
// //     </>
// //   );
// // }

// // "use client";
// // import * as React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";
// // import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import { ethers } from "ethers"; // Import ethers.js

// // export default function TopBar() {
// //   const [walletAddress, setWalletAddress] = React.useState(null); // State for wallet connection
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);

// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget); // Open the menu
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null); // Close the menu
// //   };

// //   const connectWallet = async () => {
// //     if (window.ethereum) {
// //       try {
// //         const provider = new ethers.BrowserProvider(window.ethereum);
// //         const accounts = await provider.send("eth_requestAccounts", []);
// //         setWalletAddress(accounts[0]); // Save the connected wallet address
// //       } catch (err) {
// //         console.error("Error connecting wallet:", err);
// //       }
// //     } else {
// //       alert("MetaMask is not installed. Please install it to connect your wallet.");
// //     }
// //   };

// //   const disconnectWallet = () => {
// //     setWalletAddress(null); // Clear the wallet address to simulate disconnect
// //   };

// //   return (
// //     <>
// //       <Box sx={{ flexGrow: 1 }}>
// //         <AppBar position="fixed">
// //           <Toolbar>
// //             <IconButton
// //               size="large"
// //               edge="start"
// //               color="inherit"
// //               aria-label="menu"
// //               sx={{ mr: 2 }}
// //               onClick={handleOpenNavMenu} // Opens the menu on click
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               anchorEl={anchorElNav}
// //               open={Boolean(anchorElNav)}
// //               onClose={handleCloseNavMenu} // Closes the menu
// //             >
// //               <MenuItem onClick={handleCloseNavMenu}>Home</MenuItem>
// //               <MenuItem onClick={handleCloseNavMenu}>Create New Problem</MenuItem>
// //             </Menu>
// //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //               GGrader
// //             </Typography>
// //             {walletAddress ? (
// //               <Button
// //                 color="inherit"
// //                 sx={{
// //                   backgroundColor: "#f44336",
// //                   color: "white",
// //                   padding: "6px 16px",
// //                   borderRadius: "8px",
// //                   "&:hover": {
// //                     backgroundColor: "#e53935",
// //                   },
// //                 }}
// //                 onClick={disconnectWallet}
// //               >
// //                 Disconnect ({walletAddress.slice(0, 6)}...{walletAddress.slice(-4)})
// //               </Button>
// //             ) : (
// //               <Button
// //                 color="inherit"
// //                 sx={{
// //                   backgroundColor: "#4CAF50",
// //                   color: "white",
// //                   padding: "6px 16px",
// //                   borderRadius: "8px",
// //                   "&:hover": {
// //                     backgroundColor: "#45A049",
// //                   },
// //                 }}
// //                 onClick={connectWallet}
// //               >
// //                 Connect Wallet
// //               </Button>
// //             )}
// //           </Toolbar>
// //         </AppBar>
// //         <Toolbar />
// //       </Box>
// //     </>
// //   );
// // }
"use client";
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
//import { WalletContext } from "./WalletContext"; // Import the WalletContext
import { WalletContext } from "../module/WalletContext/page";
export default function TopBar() {
  const { walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext); // Use context
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#1976D2" }}>
          <Toolbar>
            {/* Menu Icon */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            {/* Menu Items */}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/problems"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/CreateProblem"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Create New Problem
                </Link>
              </MenuItem>
            </Menu>

            {/* App Title */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GGrader
            </Typography>

            {/* Connect/Disconnect Wallet Button */}
            {walletAddress ? (
              <Button
                color="inherit"
                sx={{
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#e53935",
                  },
                }}
                onClick={disconnectWallet}
              >
                Disconnect ({walletAddress.slice(0, 6)}...{walletAddress.slice(-4)})
              </Button>
            ) : (
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
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
}

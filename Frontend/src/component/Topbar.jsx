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
import { WalletContext } from "../module/WalletContext/page";
export default function TopBar() {
  const { walletAddress, connectWallet, disconnectWallet } =
    useContext(WalletContext); // Use context
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
                Disconnect ({walletAddress.slice(0, 6)}...
                {walletAddress.slice(-4)})
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

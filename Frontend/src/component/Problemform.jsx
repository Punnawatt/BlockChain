import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function Problemform() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Problem Created:", { title, details });
    // Clear the form
    setTitle("");
    setDetails("");
  };

  return (
    <Box
      sx={{
        width: "100vw", // Set width to 100% of the viewport width
        maxWidth: "90%", // Ensure it doesn't go beyond the screen
        margin: "auto",
        mt: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
        alignItems: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ alignSelf: "flex-start" }}>
        Create Problem
      </Typography>

      <TextField
        label="Problem Name"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <TextField
        label="Detail"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        required
      />
    </Box>
  );
}

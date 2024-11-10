import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Form } from "react-router-dom";

export default function Submit() {
  const [details, setDetails] = useState('');

  return (
    <Form method="post" action="/">
    <Box
      sx={{
        width: '100vw',          // Set width to 100% of the viewport width
        maxWidth: '90%',         // Ensure it doesn't go beyond the screen
        margin: 'auto',
        mt: 4,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#F3DDD1',
        boxShadow: 3,
        borderRadius: 2,
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ alignSelf: 'flex-start' }}>
        Submit Your Code
      </Typography>

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

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Handle submit action
          console.log("Submitted details:", details);
        }}
      >
        Submit
      </Button>
    </Box>
    </Form>
  );
}

import React from 'react';
import { Button, TextField, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField label="Username" />
      <TextField label="Password" type="password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}

export default App;

"use client";  // Indicates this is a client component

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Management
        </Typography>
        <Button color="inherit">
          <Link href="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link href="/employees/EmployeeList">Employees</Link>
        </Button>
        {/* <Button color="inherit">
          <Link href="/employees/AddEmployee">Add Employee</Link>
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

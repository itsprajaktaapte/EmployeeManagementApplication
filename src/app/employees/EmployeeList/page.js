"use client"; 

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function EmployeesListPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/data/employees.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          border: "2px solid #3f51b5",
          borderRadius: "8px",
          backgroundColor: "#8dbacd",
          width: "80%",
          maxWidth: "800px",
          maxHeight: "500px", 
          overflowY: "auto",  
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>ID</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Position</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Typography variant="body2">{employee.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{employee.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{employee.position}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

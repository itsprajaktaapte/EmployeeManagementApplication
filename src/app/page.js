import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#8dbacd",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: "10px",
            border: "2px solid #3f51b5",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" sx={{ color: "#3f51b5", fontWeight: "bold" }}>
            Welcome to Employee Management System
          </Typography>
        </Box>
      </Box>
    </>
  );
}

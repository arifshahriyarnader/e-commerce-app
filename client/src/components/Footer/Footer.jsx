import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#1976D2", color: "#fff", textAlign: "center", padding:2 }}
    >
      <Typography variant="body1">&copy; Arif Shahriyar Nader</Typography>
    </Box>
  );
};

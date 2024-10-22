
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 12,
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Mobile Number"
          name="mobile"
          variant="outlined"
          fullWidth
          required
          type="tel"
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

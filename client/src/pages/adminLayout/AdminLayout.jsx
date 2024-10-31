import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
} from "../../common/components";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <Stack width={1} px={8} spacing={2}>
      <Typography variant="h5" paddingTop={12}>
        Welcome Admin!
      </Typography>
      <Box py={4}>
        <ButtonGroup>
          <Button color="inherit" component={Link} to="/admin">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/admin/inventory">
            Inventory
          </Button>
          <Button color="inherit" component={Link} to="/admin/admin-profile">
            Profile
          </Button>
        </ButtonGroup>
      </Box>
      <Outlet />
    </Stack>
  );
};

import { Link } from "react-router-dom";
import { Box, Button, AppBar as MuiAppBar, Toolbar, Typography } from "../../common/components";
import { CartMenu } from "./CartMenu";
import { ProfileMenu } from "./ProfileMenu";

export const AppBar = () => {
  return (
    <MuiAppBar>
      <Toolbar sx={{ position: "static" }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        React E-Commerce App
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
    <Button color="inherit" component={Link} to="/contact">Contact</Button>
      
      <Box display="flex" gap={4}>
        <CartMenu />
        <ProfileMenu />
      </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

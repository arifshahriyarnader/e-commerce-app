import { Link } from "react-router-dom";
import { Box, Button, IconButton, AppBar as MuiAppBar, Toolbar, Typography } from "../../common/components";
import { ShoppingCartIcon } from "../../common/icons";

export const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        React E-Commerce App
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
    <Button color="inherit" component={Link} to="/contact">Contact</Button>
      
      <Box>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

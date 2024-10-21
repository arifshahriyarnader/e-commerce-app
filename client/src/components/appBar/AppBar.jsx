import {AppBar as MuiAppBar, Typography} from '../../common/components';


 export const AppBar = () => {
  return (
    <MuiAppBar>
      <Typography variant='h6' component="div" sx={{flexGrow:1}}>React E-Commerce App</Typography>
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
    </MuiAppBar>
   
  )
}


import { useContext } from "react";
import { CartContext } from "../../contexts";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);
  const handleAddProductToCart = () => {
    addProductToCart(product);
  };

  return (
    <Card>
      <CardMedia sx={{ height: 300, width:300 }} image={product.image} />
      <CardContent>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="h5">{`$${product.price}`}</Typography> 
      </Box>
    </CardContent>
    <CardActions sx={{justifyContent:"flex-end"}}>
    <Button variant="contained" endIcon={<AddShoppingCartIcon />} 
        onClick={handleAddProductToCart} >
          Add to Cart
        </Button>
    </CardActions>
    </Card>
    
  );
};

export default ProductCard;

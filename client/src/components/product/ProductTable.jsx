import { useProduct } from '../../api/queries';
import { Box, Table, TableEmptyState, } from '../../common/components';

export const ProductTable = () => {
  const {isLoading, products} = useProduct();

  const getFormattedRows =() => products.map(product =>({
    id:product.id,
    name:product.name,
    price:product.price,
    quantity:product.quantity
  }))

  return (
    <Box py={4}>
     <Table columns={[
      {
        field:'name',
        headerName:'Product Name',
        flex:1
    },
    {
      field:'price',
      headerName:'Price',
      headerAlign:'center',
      type:'number',
      width:150
    },
    {
      field:'quantity',
      headerName:'Quantity',
      headerAlign:'center',
      width:150,
      type:'number'
    },
     ]} rows={getFormattedRows()} loading={isLoading}
     slots={{
      noRowsOverlay:() => <TableEmptyState />,
     }}
     sx={{
      minHeight:400,}} />
    </Box>
  )
}


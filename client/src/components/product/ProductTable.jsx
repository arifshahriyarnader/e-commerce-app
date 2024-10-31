import { useProduct } from '../../api/queries';
import { Box, Table, TableEmptyState, } from '../../common/components';

export const ProductTable = () => {
  const {isLoading, products} = useProduct();
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
      type:'number',
      width:150
    },
    {
      field:'quantity',
      headerName:'Quantity',
      width:150,
      type:'number'
    },
     ]} rows={[]} loading={isLoading}
     slots={{
      noRowsOverlay:() => <TableEmptyState />,
     }}
     sx={{
      minHeight:400,}} />
    </Box>
  )
}


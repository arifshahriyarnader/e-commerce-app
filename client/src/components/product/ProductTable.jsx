import { Box, Button, Table, TableEmptyState } from "../../common/components";
import { useProduct } from "../../api/queries";
import { DeleteIcon, EditIcon, SettingsIcon } from "../../common/icons";

const ProductRowActions = ({ row }) => {
  return (
    <Box>
      <Button size="small" startIcon={<EditIcon />}>Edit</Button>
      <Button color="error" size="small" endIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Box>
  );
};

export const ProductTable = () => {
  const { isLoading, products } = useProduct();

  const getFormattedRows = () =>
    products.map((product,index) => ({
      id: product.id,
      serial:index+1,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    }));

  return (
    <Box py={4}>
      <Table
        columns={[
          {
            field:"serial",
            headerName:"Serial",
            width:100,
            headerAlign:"center",
            align:"center"
          },
          {
            field: "name",
            headerName: "Product Name",
            flex: 1,
          },
          {
            field: "price",
            headerName: "Price",
            headerAlign: "center",
            type: "number",
            width: 150,
            valueFormatter: (value) => `$${value}`,
          },
          {
            field: "quantity",
            headerName: "Quantity",
            headerAlign: "center",
            width: 150,
            type: "number",
          },
          {
            field: "actions",
            align: "center",
            headerAlign:"center",
            minWidth: 200,
            renderCell: () => <ProductRowActions />,
            renderHeader: () => <SettingsIcon />,
            sortable:false,
          },
        ]}
        rows={getFormattedRows()}
        loading={isLoading}
        paginationMode="client"
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 15]}
        slots={{
          noRowsOverlay: () => <TableEmptyState />,
        }}
        sx={{
          minHeight: 400,
          '& .MuiDataGrid-columnHeaderTitle':{
            fontWeight:700
          },
        }}
      />
    </Box>
  );
};

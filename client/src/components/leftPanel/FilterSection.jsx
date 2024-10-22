import { Box, Button } from "@mui/material";

export const FilterSection = () => {
  const categories = [
    "Laptops",
    "Gaming",
    "Accesories",
    "Peripherals",
    "Storage",
    "Components",
    "Monitors",
    "Printers",
  ];
  return (
    <Box paddingTop={4}>
      {categories.map((category, index) => {
        return (
          <Button
            key={index}
            sx={{ textTransform: "capitalize", fontSize: 18 }}
          >
            {category}
          </Button>
        );
      })}
      <Button variant="contained" sx={{ textTransform: "capitalize", fontSize: 18 }}>
        Clear Filters
      </Button>
    </Box>
  );
};

import React from 'react'
import { Box, Stack } from '../../common/components'
import { FilterSection, ProductGrid } from '../../components'
export const Home = () => {
  return (
    <Box sx={{display:"flex", gap:4,paddingLeft:4, paddingRight:4}}>
    <Stack>
      <FilterSection />
      <ProductGrid />
    </Stack>
  </Box>
 
  )
}


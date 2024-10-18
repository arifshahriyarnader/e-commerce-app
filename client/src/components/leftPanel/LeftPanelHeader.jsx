import { Stack, Typography } from '@mui/material'
import React from 'react'

export const LeftPanelHeader = ({title}) => {
  return (
    <Stack sx={{fontWeight:600}}>
      <Typography variant='h5'>{title}</Typography>
    </Stack>
  )
}


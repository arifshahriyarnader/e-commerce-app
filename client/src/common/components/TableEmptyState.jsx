import { Box, Typography } from '../../common/components'
import { InfoOutlinedIcon } from '../icons'

export const TableEmptyState = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'text.secondary',
      }}
    >
      <InfoOutlinedIcon fontSize="large" />
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        No data available
      </Typography>
    </Box>
  )
}


import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Employer = ({ 
  height = '70vh' 
}) => {

  return (
    <Box minHeight={height}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      employer
    </Box>
  );
}
export default Employer;

import React from 'react';
import PromoCarousel from "../components/PromoCarousel";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

export default function Taquilla() {
return (
    // Puedes envolverlo en un Box si necesitas darle margen vertical
    <Box sx={{ mt: 0.7, mb: 4 }}> {/* 'my' le da espacio arriba y abajo */}
      <PromoCarousel />
  <Typography
  variant="h3"
  component="h1"
  sx={{
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontFamily: 'NATS-Regular, sans-serif',
    py: 4,
    fontSize: '3.0rem',
    mt: 2,
  }}
>
  Compra tus boletos
</Typography>
    </Box>
  );
}
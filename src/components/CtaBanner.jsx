import React from 'react';
import { Box, Button, Typography } from '@mui/material'; // Ya no necesitamos Container aquí
import { Link } from 'react-router-dom';

function CtaBanner() {
  return (
    // El Box ahora es el elemento principal. Le pasamos el margen que antes tenía el Container.
    <Box
      sx={{
        backgroundColor: '#F6C667',
        backgroundImage: 'url(/stickert.png)',
        backgroundSize: 'cover',
        p: { xs: 4, md: 6 },
        mt: 1.5, // Margen superior negativo para SUBIR el banner
        mb: 8,  // Mantenemos el margen inferior para el espacio de abajo
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // Nota: Para un look de ancho completo, usualmente se quitan el borde y el radio.
        // borderRadius: '20px', 
        // border: '3px solid #7E1128',
      }}
    >
      <Typography
        variant="h4"
        component="p"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'NATS-Regular, Helvetica',
          textTransform: 'uppercase',
          mb: 3,
        }}
      >
        Compra aquí tus boletos :)
      </Typography>

      <Button
        component={Link}
        to="/taquilla"
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: '#333',
          fontSize: '25px',
          fontWeight: 'bold',
          fontFamily: 'NATS-Regular, Helvetica',
          borderRadius: '50px',
          px: 13,
          py: 1,
          textTransform: 'none',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            transform: 'scale(1.03)',
          },
        }}
      >
        Taquilla
      </Button>
    </Box>
  );
}

export default CtaBanner;
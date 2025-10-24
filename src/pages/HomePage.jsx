import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageCarousel from "../components/ImageCarousel";
import CtaBanner from '../components/CtaBanner';

function HomePage() {
  const items = [
    { title: 'Domo Digital', image: '/domo.webp', path: '/domo-digital' },
    { title: 'Observatorio', image: '/obse.jpg', path: '/observatorio' },
    { title: 'Talleres', image: '/talle.jpeg', path: '/talleres' },
    { title: 'Sala de Conferencias', image: '/confe.jpg', path: '/conferencias' },
  ];

  return (
    <Box sx={{ backgroundColor: '#7E1128', minHeight: '100vh', pb: 2 }}>
      
      <Box sx={{ mt: '10px' }}>
        <ImageCarousel />
      </Box>

      {/* 👇 2. Usamos el componente del Banner de CTA aquí */}
      <CtaBanner />

      {/* Sección de Atracciones */}
      <Container sx={{ mt: { xs: 6, md: 10 } }}>
       <Typography
  variant="h4"
  sx={{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    mb: 6,
    fontFamily: 'NATS-Regular, Helvetica', // <-- Línea añadida
    wordSpacing: '5px', // Puedes ajustar el valor en píxeles
    letterSpacing: '0px', // Puedes ajustar el valor en píxeles
  }}
>
  DESCUBRE NUESTRAS ACTIVIDADES
</Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}
        >
          {items.map((item) => (
            <Box key={item.title} component={Link} to={item.path} sx={{ textDecoration: 'none' }}>
              <Card sx={{ cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" align="center" color="textPrimary">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

    </Box>
  );
}

export default HomePage;
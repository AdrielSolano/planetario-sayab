import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Container,
} from '@mui/material';

function HomePage() {
  const items = [
    { title: 'Domo Digital', image: '/domo-digital.jpg' },
    { title: 'Observatorio', image: '/observatorio.jpg' },
    { title: 'Talleres', image: '/talleres.jpg' },
    { title: 'Sala de Conferencias', image: '/sala-conferencias.jpg' },
  ];

  return (
    <Box>
      {/* 1. Hero / Banner */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '500px' },
          backgroundImage: 'url(/hero-planetario.jpg)', // tu imagen del hero
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            p: { xs: 2, md: 4 },
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Bienvenidos al Planetario Sayab
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Explora el universo, aprende con las estrellas
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#038C3E',
              '&:hover': {
                backgroundColor: '#0CF25D',
                color: '#034159',
              },
            }}
          >
            Comprar Boletos
          </Button>
        </Box>
      </Box>

      <Container sx={{ mt: 6 }}>
        {/* 2. Atracciones / Galería de servicios */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: '#025951',
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Nuestras Atracciones
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {items.map((item) => (
            <Card
              key={item.title}
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* 3. Mapa y ubicación */}
        <Box sx={{ mt: 8, mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Dónde Estamos
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              title="Mapa Planetario Sayab"
              src="https://www.google.com/maps/embed?pb=!1m18!..." // reemplaza por URL válida
              width="100%"
              height="400"
              style={{ border: 0, maxWidth: '800px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Calle Principal #123, Colonia Centro, Playa del Carmen, Quintana Roo
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;

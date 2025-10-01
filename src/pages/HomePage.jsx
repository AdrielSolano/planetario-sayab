import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  const items = [
    { title: 'Domo Digital', image: '/domo.webp', path: '/domo-digital' },
    { title: 'Observatorio', image: '/obse.jpg', path: '/observatorio' },
    { title: 'Talleres', image: '/talle.jpeg', path: '/talleres' },
    { title: 'Sala de Conferencias', image: '/confe.jpg', path: '/conferencias' },
  ];

  return (
<Box sx={{ backgroundColor: '#7E1128', minHeight: '100vh', pb: 2 }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '500px' },
          backgroundImage: 'url(/hero-planetario.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      />

      <Container sx={{ mt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 } }}>
        {/* Atracciones */}
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', mb: 6 }}
        >
          Nuestras Atracciones
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

        {/* Mapa */}
        <Box sx={{ mt: 8, mb: 8 }}>
          <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, color: '#fff', fontWeight: 'bold' }}>
            Dónde Estamos
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              title="Mapa Planetario Sayab"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.2125209404724!2d-87.0893643!3d20.6504438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e42e6729f5caf%3A0xd7547d42c1109a7f!2sSAYAB%20Planetario%20de%20Playa%20del%20Carmen!5e0!3m2!1ses!2smx!4v1694567890123!5m2!1ses!2smx"
              width="100%"
              height="400"
              style={{ border: 0, maxWidth: '800px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>

          <Typography variant="body1" align="center" color="white" sx={{ mt: 2, fontFamily: 'NATS-Regular, Helvetica' }}>
            Calle 125 Norte S/n, Lote 16, Manzana 1, 77712 Playa del Carmen, México
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;

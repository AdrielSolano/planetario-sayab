import * as React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#590303ff',
        color: 'white',
        mt: 10,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={15}>
          {/* Logo e info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img
                src="/a.jpg" // Reemplaza con tu nombre de archivo real si es diferente
                alt="Planetario Sayab"
                height="60"
              />
            </Box>
            <Typography variant="body2" sx={{ maxWidth: '300px' }}>
              Planetario Sayab · Playa del Carmen <br />
              Acércate al universo a través de la ciencia y la tecnología.
            </Typography>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+52 984 688 3956</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">difusionsayab@gmail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Calle 125 Norte S/n, Lote 16, Manzana 1 77712 Playa del Carmen, Mexico              
              </Typography>
            </Box>
          </Grid>

          {/* Redes Sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.facebook.com/Planetariodeplayadelcarmen"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.instagram.com/planetarioplaya/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Línea inferior */}
        <Box sx={{ mt: 5, borderTop: '1px solid rgba(255, 255, 255, 0.2)', pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Planetario Sayab. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

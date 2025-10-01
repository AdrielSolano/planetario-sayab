import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
} from '@mui/material';
import { School, Public, Groups, LightMode } from '@mui/icons-material';

export default function Nosotros() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Título principal */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#f20c0cff' }}
        >
          Sobre Nosotros
        </Typography>

        {/* Descripción general */}
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#eee' }}
        >
          El Planetario Sayab de Playa del Carmen es un espacio educativo y de exploración astronómica que busca despertar la curiosidad científica de todas las edades mediante experiencias interactivas, observaciones astronómicas, talleres tecnológicos y mucho más.
        </Typography>

        <Divider sx={{ bgcolor: '#f20c0cff', mb: 6 }} />

        {/* Misión, Visión, Valores */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', border: '1px solid #444' }}>
              <CardContent>
                <Avatar sx={{ bgcolor: '#f20c0cff', mb: 2 }}>
                  <LightMode />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                  Misión
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd' }}>
                  Fomentar el conocimiento científico, tecnológico y astronómico a través de experiencias significativas, accesibles y divertidas para toda la comunidad.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', border: '1px solid #444' }}>
              <CardContent>
                <Avatar sx={{ bgcolor: '#f20c0cff', mb: 2 }}>
                  <Public />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                  Visión
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd' }}>
                  Ser un referente regional en divulgación científica, innovación tecnológica y educación astronómica, impactando positivamente en niños, jóvenes y adultos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', border: '1px solid #444' }}>
              <CardContent>
                <Avatar sx={{ bgcolor: '#f20c0cff', mb: 2 }}>
                  <Groups />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                  Valores
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd' }}>
                  Curiosidad, Inclusión, Respeto, Aprendizaje continuo, Ciencia abierta para todos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Compromiso final */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <School sx={{ fontSize: 50, color: '#f20c0cff' }} />
          <Typography variant="h5" sx={{ mt: 2, color: '#f20c0cff' }}>
            Nuestro Compromiso
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: '#eee' }}>
            En Planetario Sayab estamos comprometidos con la educación de calidad,
            fomentando la participación de niños, jóvenes y adultos en proyectos de ciencia,
            tecnología, astronomía y medio ambiente.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// TallerCard.jsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PeopleIcon from '@mui/icons-material/People';

// Recibe el objeto 'taller' y la función 'onVerMas' como props
export default function TallerCard({ taller, onVerMas }) {
  const hasAvailability = taller.availableSlots > 0;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={taller.image}
        alt={taller.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip
          label={taller.category.toUpperCase()}
          color="secondary"
          size="small"
          sx={{ mb: 1 }}
        />
        <Typography gutterBottom variant="h5" component="div">
          {taller.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {taller.description}
        </Typography>

        {/* Info Rápida */}
        <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
          <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{taller.schedule}</Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
          <ChildCareIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{taller.ageRange}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <PeopleIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            color={hasAvailability ? 'text.primary' : 'error'}
            fontWeight="bold"
          >
            {hasAvailability
              ? `¡${taller.availableSlots} lugares disponibles!`
              : 'Taller Lleno'}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => onVerMas(taller)} // Llama a la función del padre
          disabled={!hasAvailability} // Deshabilita si está lleno
        >
          {hasAvailability ? 'Ver Detalles y Reservar' : 'Lleno'}
        </Button>
      </CardActions>
    </Card>
  );
}
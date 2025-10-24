// ReservationSuccess.jsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Container,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Estilos para ocultar botones al imprimir
const printStyles = {
  '@media print': {
    '.no-print': {
      display: 'none',
    },
    body: {
      margin: '1rem',
    },
  },
};

// Recibe el objeto 'reservation' y la función 'onBack'
export default function ReservationSuccess({ reservation, onBack }) {
  const { taller, code } = reservation;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container maxWidth="sm" sx={printStyles}>
      <Paper elevation={6} sx={{ p: 4, mt: 4 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            ¡Reservación Exitosa!
          </Typography>
          <Typography variant="h6">
            Tu lugar para el taller está reservado.
          </Typography>

          <Box
            border="2px dashed"
            borderColor="grey.500"
            borderRadius={2}
            p={3}
            my={3}
            width="100%"
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              TICKET DE RESERVACIÓN
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" component="p">
              {taller.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {taller.schedule}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Inicia: {taller.startDate}
            </Typography>
            <Typography variant="h4" color="primary" sx={{ my: 2 }}>
              CÓDIGO: <strong>{code}</strong>
            </Typography>
          </Box>

          <Typography variant="h6" component="p" gutterBottom>
            Instrucciones Siguientes:
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Por favor, presenta este código (o una captura de pantalla) en la
            <strong> taquilla física del Planetario</strong> para realizar tu
            pago y formalizar tu inscripción.
          </Typography>

          <Box
            display="flex"
            gap={2}
            justifyContent="center"
            width="100%"
            className="no-print"
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={onBack}
              size="large"
            >
              Volver a Talleres
            </Button>
            <Button
              variant="contained"
              onClick={handlePrint}
              size="large"
            >
              Imprimir/Guardar Ticket
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
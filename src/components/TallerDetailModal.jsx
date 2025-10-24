// TallerDetailModal.jsx
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  LinearProgress,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// ... (El 'style' de la caja del modal sigue igual)
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 600 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


// Agregamos la prop 'onReserve'
export default function TallerDetailModal({ taller, open, onClose, onReserve }) {
  if (!taller) return null;

  const cupoPercentage =
    ((taller.totalSlots - taller.availableSlots) / taller.totalSlots) * 100;

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-taller-title">
      <Box sx={style}>
        {/* ... (Todo el contenido del modal sigue igual: CloseIcon, Título, Descripción, Cupo...) */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography id="modal-taller-title" variant="h4" component="h2">
          {taller.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Instructor: {taller.instructor}
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography variant="body1">
            <strong>Descripción:</strong> {taller.description}
          </Typography>
          <Typography variant="body1">
            <strong>Inicia:</strong> {taller.startDate}
          </Typography>
          <Typography variant="body1">
            <strong>Horario:</strong> {taller.schedule}
          </Typography>
          <Typography variant="body1">
            <strong>Edades:</strong> {taller.ageRange}
          </Typography>
        </Box>

        {/* Barra de Cupo */}
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Cupo:
          </Typography>
          <LinearProgress
            variant="determinate"
            value={cupoPercentage}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <Typography variant="body2" color="text.secondary" align="right">
            {`${
              taller.totalSlots - taller.availableSlots
            } / ${taller.totalSlots} ocupados`}
          </Typography>
        </Box>

        {/* === CAMBIO IMPORTANTE AQUÍ === */}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={() => onReserve(taller)} // <-- En lugar del alert, llama a onReserve
        >
          ¡Reservar Lugar Ahora!
        </Button>
      </Box>
    </Modal>
  );
}
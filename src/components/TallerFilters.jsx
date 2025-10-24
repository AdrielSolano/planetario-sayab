// TallerFilters.jsx
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Paper,
} from '@mui/material';

// Recibe los filtros actuales y la función para cambiarlos como props
export default function TallerFilters({ filters, onFilterChange }) {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filtrar Talleres
      </Typography>

      {/* 1. Filtro de Búsqueda */}
      <TextField
        fullWidth
        label="Buscar por nombre"
        variant="outlined"
        name="search"
        value={filters.search}
        onChange={onFilterChange}
        sx={{ mb: 2 }}
      />

      {/* 2. Filtro de Categorías */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Categorías</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.category.robótica}
                onChange={onFilterChange}
                name="robótica"
              />
            }
            label="Robótica"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.category.programación}
                onChange={onFilterChange}
                name="programación"
              />
            }
            label="Programación"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.category.habilidades}
                onChange={onFilterChange}
                name="habilidades"
              />
            }
            label="Habilidades y Lógica"
          />
        </FormGroup>
      </FormControl>

      {/* 3. Filtro de Edad */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Edad Recomendada</FormLabel>
        <RadioGroup
          name="ageRange"
          value={filters.ageRange}
          onChange={onFilterChange}
        >
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="6-8" control={<Radio />} label="6-8 años" />
          <FormControlLabel value="9-12" control={<Radio />} label="9-12 años" />
          <FormControlLabel value="13+" control={<Radio />} label="13+ años" />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
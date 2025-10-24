// Talleres.jsx
import React, { useState, useMemo } from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';

// Importa los componentes que creamos
import TallerCard from '../components/TallerCard';
import TallerFilters from '../components/TallerFilters';
import TallerDetailModal from '../components/TallerDetailModal';
import ReservationSuccess from '../components/ReservationSuccess';

// Importa los datos de ejemplo
import { DUMMY_TALLERES } from '../components/dummyData';

export default function Talleres() {
  // ... (El estado 'talleres' y 'filters' sigue igual)
  const [talleres] = useState(DUMMY_TALLERES);
  const [filters, setFilters] = useState({
    search: '',
    category: {
      robótica: false,
      programación: false,
      habilidades: false,
    },
    ageRange: 'todos',
  });
  
  // ... (El estado del modal sigue igual)
  const [selectedTaller, setSelectedTaller] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- (2) NUEVO ESTADO PARA LA RESERVACIÓN ---
  const [reservation, setReservation] = useState(null);

  // --- (FUNCIÓN CORREGIDA) ---
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      // Maneja los checkboxes de categoría
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: {
          ...prevFilters.category,
          [name]: checked,
        },
      }));
    } else {
      // Maneja el resto (search, radio buttons)
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };
  
  // --- (El 'handleOpenModal' y 'handleCloseModal' siguen igual) ---
  const handleOpenModal = (taller) => {
    setSelectedTaller(taller);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTaller(null);
  };
  
  // --- (3) NUEVAS FUNCIONES PARA LA RESERVACIÓN ---
  const handleReserve = (taller) => {
    // ... (Tu lógica de reservación está bien)
    const fakeCode = `SAYAB-${Math.floor(Math.random() * 10000 + 1000)}`;
    const newReservation = {
      taller: taller,
      code: fakeCode,
    };
    setReservation(newReservation);
    handleCloseModal();
  };
  
  const handleBackToTalleres = () => {
    setReservation(null); 
  };
  
  
  // --- (FUNCIÓN CORREGIDA) ---
  const filteredTalleres = useMemo(() => {
    // 1. Filtrar por Búsqueda
    let result = talleres.filter((taller) =>
      taller.title.toLowerCase().includes(filters.search.toLowerCase())
    );

    // 2. Filtrar por Rango de Edad
    if (filters.ageRange !== 'todos') {
      result = result.filter((taller) =>
        filters.ageRange === '6-8'
          ? taller.ageRange === '6-8 años'
          : filters.ageRange === '9-12'
          ? taller.ageRange === '9-12 años'
          : filters.ageRange === '13+'
          ? taller.ageRange === '13+ años'
          : true
      );
    }

    // 3. Filtrar por Categoría
    const activeCategories = Object.keys(filters.category).filter(
      (key) => filters.category[key]
    );

    if (activeCategories.length > 0) {
      result = result.filter((taller) =>
        activeCategories.includes(
          taller.category.toLowerCase().split(' ')[0] // Compara 'robótica' con 'Robótica'
        )
      );
    }

    return result; // <-- Esta línea es la que faltaba
  }, [talleres, filters]);

  // --- (4) RENDERIZACIÓN CONDICIONAL ---
  
  if (reservation) {
    return (
      <ReservationSuccess
        reservation={reservation}
        onBack={handleBackToTalleres}
      />
    );
  }
  
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Talleres del Planetario
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Explora, filtra y reserva tu lugar.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Columna de Filtros (Sidebar) */}
        <Grid item xs={12} md={3}>
          <TallerFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </Grid>

        {/* Columna de Contenido (Tarjetas) */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {/* Esta es la línea 124. Ahora 'filteredTalleres' será un array [] y 'length' funcionará */}
            {filteredTalleres.length > 0 ? (
              filteredTalleres.map((taller) => (
                <Grid item key={taller.id} xs={12} sm={6} lg={4}>
                  <TallerCard taller={taller} onVerMas={handleOpenModal} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" align="center" color="text.secondary">
                  No se encontraron talleres con esos filtros.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      {/* El Modal (solo se renderiza si hay un taller seleccionado) */}
      <TallerDetailModal
        taller={selectedTaller}
        open={isModalOpen}
        onClose={handleCloseModal}
        onReserve={handleReserve} 
      />
    </Container>
  );
}


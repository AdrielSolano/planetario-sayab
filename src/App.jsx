import * as React from 'react';
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css'; // Asegúrate de tener las animaciones en este archivo

export default function App() {
  return (
    <Router>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #590303ff 20%, #ffffff 50%, #590303ff 100%)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Estrellas animadas */}
        <Box className="stars">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Box>

        {/* Contenido encima */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <AppRoutes />
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

import * as React from 'react';
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, GlobalStyles } from '@mui/material';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyles styles={{
        body: {
          margin: 0,
          overflowX: 'hidden',  // 👈 evita scroll horizontal
          backgroundColor: '#7E1128', // 👈 mantiene tu fondo
        },
        '*': { boxSizing: 'border-box' },
      }} />

      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

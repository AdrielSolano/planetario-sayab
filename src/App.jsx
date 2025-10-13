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
        html: {
          scrollbarGutter: 'stable',
          overflowX: 'hidden', // <-- AÑADE ESTO AQUÍ
        },
        body: {
          margin: 0,
          overflowX: 'hidden', // <-- ASEGÚRATE DE QUE ESTÉ AQUÍ TAMBIÉN
          backgroundColor: '#7E1128', 
        },
        '*': { boxSizing: 'border-box' },
      }} />
      
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
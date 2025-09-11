import * as React from 'react';
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

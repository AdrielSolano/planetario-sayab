import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import DomoDigital from '../pages/DomoDigital.jsx'; // si es export default, no uses llaves

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/domo-digital" element={<DomoDigital />} />
      {/* Agrega aquí más rutas si necesitas */}
    </Routes>
  );
}

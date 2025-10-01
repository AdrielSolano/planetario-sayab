import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import DomoDigital from '../pages/DomoDigital.jsx'; // si es export default, no uses llaves
import { Observatorio } from '../pages/Observatorio.jsx';
import { Talleres } from '../pages/Talleres.jsx';
import { Conferencias } from '../pages/Conferencias.jsx';
import Noticias from '../pages/Noticias.jsx'; // si es export default, no uses llaves
import Nosotros from '../pages/Nosotros.jsx'; // si es export default, no uses llaves
import Taquilla from '../pages/Taquilla.jsx'; // si es export default, no uses llaves

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/domo-digital" element={<DomoDigital />} />
      <Route path="/observatorio" element={<Observatorio />} />
      <Route path="/talleres" element={<Talleres />} />
      <Route path="/conferencias" element={<Conferencias />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/taquilla" element={<Taquilla />} />
      <Route path="/noticias" element={<Noticias />} />
    </Routes>
  );
}

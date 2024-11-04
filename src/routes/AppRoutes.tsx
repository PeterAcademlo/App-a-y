import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Dashboard from '../pages/admin/HomePage'; // Cambia esto si usas otra página para el acceso general
import PrivateRoute from './PrivateRoute';
import Register from '../pages/login/Register';
import Rcuenta from '../pages/login/Rcuenta';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rcuenta" element={<Rcuenta />} /> {/* Ruta para Rcuenta */}
        <Route path="/register" element={<Register />} /> {/* Ruta para Register */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

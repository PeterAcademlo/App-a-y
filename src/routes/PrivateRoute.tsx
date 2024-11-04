import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store'; // Asegúrate de importar correctamente tu estado raíz

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  // Si el usuario no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Renderiza el contenido si el usuario está autenticado
  return children;
};

export default PrivateRoute;

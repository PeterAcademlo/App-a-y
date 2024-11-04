// src/routes/ProtectedRoute.tsx
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/Credenciales";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<unknown>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/"); // Si no está logueado, redirige al login
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Limpia la suscripción al desmontar el componente
  }, [navigate]);

  if (loading) return <p>Cargando...</p>;

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;

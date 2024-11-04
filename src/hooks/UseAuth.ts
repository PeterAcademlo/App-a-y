import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/Credenciales';
import { login, logout } from '../redux/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email!);
        dispatch(
          login({
            id: user.uid,
            email: user.email!,
            name: '', // Agrega el nombre del usuario aquí, si está disponible
            role: '' // Asigna el rol apropiado o un valor vacío si aún no está disponible
          })
        );
      } else {
        setUser(null);
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return { user };
};

export default useAuth;

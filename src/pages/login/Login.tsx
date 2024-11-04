import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Credenciales";
import { login } from "../../redux/slices/authSlice"; // Acción de login de Redux
import Logo from "../../hooks/Logo";
import { UserData } from "../../interface/InterData"; // Importa la interfaz UserData

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Manejar el inicio de sesión
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { uid, email: userEmail, displayName } = userCredential.user;

      // Simulación: Definir un rol para el usuario (puede venir de Firestore si lo deseas)
      const userRole = "admin"; // Cambia según corresponda

      // Crear el objeto UserData con los datos obtenidos
      const userData: UserData = {
        id: uid,
        email: userEmail || "",
        name: displayName || "Usuario sin nombre",
        role: userRole,
      };

      // Dispatch de la acción login para guardar al usuario en el estado global
      dispatch(login(userData));
      console.log("Inicio de sesión exitoso:", userData);

      // Redirigir a la vista de inicio
      navigate("/home", { replace: true });
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
      console.error("Error de autenticación:", error);
    }
  };

  return (
    <div className="md:h-screen flex flex-col justify-center items-center">
      <Logo />
      <div className="bg-white shadow-lg rounded-3xl md:mt-0 sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 w-[25vw] text-center">
            Iniciar sesión en la plataforma
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Tu email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Tu contraseña
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="text-white bg-[var(--secondary)] hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Acceder
              </button>
              <a
                href="#"
                className="text-sm text-teal-500 hover:underline ml-auto"
                onClick={() => navigate("/rcuenta")}
              >
                ¿Perdiste tu contraseña?
              </a>
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          </form>
          <div className="flex justify-between text-sm font-medium text-gray-500">
            ¿No estás registrado?
            <a
              href="#"
              className="text-teal-500 hover:underline"
              onClick={() => navigate("/register")}
            >
              Crear una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

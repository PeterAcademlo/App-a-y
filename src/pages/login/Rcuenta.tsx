import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/Credenciales";
import { FirebaseError } from "firebase/app";
import VolverAlLogin from "../../hooks/Volver-al-login";
import Logo from "../../hooks/Logo";

const Rcuenta = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Reinicia el estado de error antes de intentar
    setSuccess(""); // Reinicia el estado de éxito antes de intentar
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(
        "¡Correo enviado! Revisa tu bandeja de entrada para cambiar tu contraseña."
      );
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Manejando casos específicos de Firebase
        switch (error.code) {
          case "auth/user-not-found":
            setError(
              "No se encontró ninguna cuenta con este correo electrónico."
            );
            break;
          case "auth/invalid-email":
            setError("El formato del correo electrónico no es válido.");
            break;
          default:
            setError(
              "Ocurrió un error. Por favor, intenta de nuevo más tarde."
            );
            break;
        }
      } else {
        setError("Error desconocido. Inténtalo de nuevo.");
      }
    }
  };

  return (
    <div className="md:h-screen flex flex-col justify-center items-center">
      <Logo/>
      <div className="bg-white shadow-lg rounded-3xl md:mt-0 sm:max-w-screen-sm xl:p-0 ">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 w-[25vw]">
            Recuperar Contraseña
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Ingresa tu Email:
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 text-xs mb-4">{success}</p>
            )}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-white bg-[var(--secondary)] hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Enviar enlace de recuperación
              </button>
            </div>
          </form>
          <VolverAlLogin/>
        </div>
      </div>
    </div>
  );
};

export default Rcuenta;

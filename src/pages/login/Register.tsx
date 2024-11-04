import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/Credenciales";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/Credenciales";
import Logo from "../../hooks/Logo";
import VolverAlLogin from "../../hooks/Volver-al-login";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role] = useState("colaborador"); // Rol por defecto
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: name }); // Actualizar el perfil del usuario con su nombre completo
      await addDoc(collection(db, "usuario"), {
        email: user.email, // Guardar la información del usuario en Firestore
        name: name,
        role: role, // Guardar el rol
        fechaC: serverTimestamp(), // Fecha y hora de creación
      });
      setSuccess("¡Cuenta creada con éxito!");
      setError("");
    } catch {
      setError(
        "Error al crear la cuenta. Es posible que el correo ya esté registrado."
      );
      setSuccess("");
    }
  };
  return (
    <div className="md:h-screen flex flex-col justify-center items-center">
      <Logo/>
      <div className="bg-white shadow-lg rounded-3xl md:mt-0 sm:max-w-screen-sm xl:p-0">
        <div className="sm:p-8 lg:p-10 space-y-8 mx-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 w-[25vw] text-center">
            Crear una cuenta:
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Nombre Completo:
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Email:
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
            <div>
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Rol:
              </label>
              <input
                type="text"
                id="role"
                value={role}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Contraseña:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 text-xs mb-4">{success}</p>
            )}
            <div className=" flex align-center justify-between">
            <button
              type="submit"
              className="text-white bg-[var(--secondary)] hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
            >
              Crear Cuenta
            </button>
            <VolverAlLogin/>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;

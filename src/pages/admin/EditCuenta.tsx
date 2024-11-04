import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../services/Credenciales";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { UserData } from "../../interface/InterData";
import Spiner from "../../hooks/Spiner";

const EditarPerfil: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState("");

  // Estados para mostrar las contraseñas
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const usersCollection = collection(db, "usuario");
        const userDocs = await getDocs(usersCollection);

        const allUsersData: UserData[] = userDocs.docs.map((doc) => ({
          ...(doc.data() as UserData),
          id: doc.id,
        }));
        const loggedInUserData = allUsersData.find(
          (u) => u.email === user.email
        );
        setUserData(loggedInUserData || null);
        console.log("Datos del usuario logueado:", loggedInUserData);
      } else {
        console.log("No hay usuario logueado.");
      }
    };
    fetchUserData();
  }, [navigate]);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setCurrentPasswordError("");
    if (!currentPassword) {
      setCurrentPasswordError("Este campo es obligatorio.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("La nueva contraseña y la confirmación no coinciden.");
      return;
    }
    const user = auth.currentUser;
    if (user) {
      setLoading(true);
      try {
        const credential = EmailAuthProvider.credential(
          user.email!,
          currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setLoading(false);
        alert("Contraseña actualizada con éxito.");
        navigate("/home");
      } catch {
        setError("La contraseña actual no es correcta.");
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-quarto-color">
      <div className="bg-white p-8 rounded-3xl shadow-md w-96">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-7">
          Editar Perfil
        </h2>
        {userData ? (
          <form className="space-y-6" onSubmit={handlePasswordChange}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-3"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Rol
              </label>
              <p className="text-gray-900">{userData.role}</p>
            </div>
            {/* Contraseña actual */}
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña Actual
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  {showCurrentPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              {currentPasswordError && (
                <p className="text-red-600 text-sm">{currentPasswordError}</p>
              )}
            </div>

            {/* Nueva contraseña */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nueva Contraseña
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  {showNewPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>
            {/* Confirmar nueva contraseña */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirmar Nueva Contraseña
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  {showConfirmPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
                type="submit"
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar Cambios"}
              </button>
              <button
                className="text-sm text-teal-600 hover:underline"
                onClick={() => navigate("/home")}
                type="button"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <Spiner/>
        )}
      </div>
    </div>
  );
};

export default EditarPerfil;

import React from "react";
import asistencia from "../../assets/icons/user-logo.png";
import tarea from "../../assets/icons/tareas-logo.png";
import gusuarios from "../../assets/icons/user-account-solid-240.png";
import gnoticias from "../../assets/icons/receipt-regular-240.png";
import perfil from "../../assets/icons/user-circle-regular-240-otroColor.png";
import { useNavigate } from "react-router-dom";
import Logo from "../../hooks/Logo";

interface SliderHomeProps {
  setVistaSeleccionada: (vista: string) => void;
}

const SliderHome: React.FC<SliderHomeProps> = ({ setVistaSeleccionada }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--blanco-color)] w-[20vw] flex flex-col items-center justify-between p-4 shadow-md rounded-2xl">
      <div className="pr-8">
        <Logo />
      </div>
      <div className="flex flex-col gap-4 h-[50vh]">
        <button
          className="flex items-center bg-[var(--secondary)] pl-5 w-[16vw] h-[7vh] rounded-md"
          onClick={() => setVistaSeleccionada("empresas")}
        >
          <img className="w-6 h-6" src={asistencia} />
          <a className="ml-3 text-gray-50">Empresas</a>
        </button>
        <button
          className="flex items-center bg-[var(--secondary)] pl-5 w-[16vw] h-[7vh] rounded-md"
          onClick={() => setVistaSeleccionada("controlDisponibilidad")}
        >
          <img className="w-6 h-6" src={tarea} />
          <a className="ml-3 text-gray-50">Control de disponibilidad</a>
        </button>
        <button
          className="flex items-center bg-[var(--secondary)] pl-5 w-[16vw] h-[7vh] rounded-md"
          onClick={() => setVistaSeleccionada("gestionUsuarios")}
        >
          <img className="w-6 h-6" src={gusuarios} />
          <a className="ml-3 text-gray-50">Gestión de usuarios</a>
        </button>
        <button
          className="flex items-center bg-[var(--secondary)] pl-5 w-[16vw] h-[7vh] rounded-md"
          onClick={() => setVistaSeleccionada("gestionNoticias")}
        >
          <img className="w-6 h-6" src={gnoticias} />
          <a className="ml-3 text-gray-50">Gestión de noticias</a>
        </button>
      </div>
      <div className="flex flex-col items-center ustify-between w-[16vw] h-[25vh] bg-[var(--secondary)] rounded-xl">
        <img
          src={perfil}
          className="bg-[var(--blanco-color)] w-[5vw] h-[10vh] rounded-full relative -top-10"
          alt="Avatar"
        />
        <div className="flex flex-col items-center justify-center relative bottom-6">
          <b className="text-[var(--blanco-color)]">Peter Capillo</b>
          <u className="text-[var(--primary-color)] text-sm">
            Peter18capillo@gmail.com
          </u>
        </div>
        <button
          className="text-teal-100 hover:underline mt-2"
          onClick={() => navigate("/editCuenta")}
        >
          Editar Contraseña
        </button>
      </div>
    </div>
  );
};

export default SliderHome;

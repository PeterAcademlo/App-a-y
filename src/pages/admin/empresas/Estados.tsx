import React from "react";

interface EstadosProps {
  setEstadoSeleccionado: React.Dispatch<React.SetStateAction<"progreso" | "documentos">>;
}

const Estados: React.FC<EstadosProps> = ({ setEstadoSeleccionado }) => {
  return (
    <div className="flex gap-5">
      <button
        className="flex items-center justify-center bg-[var(--secondary)] w-[14vw] h-[5vh] rounded-sm"
        onClick={() => setEstadoSeleccionado("progreso")}
      >
        <a className="text-gray-50">Progreso de tareas</a>
      </button>
      <button
        className="flex items-center justify-center bg-[var(--secondary)] w-[14vw] h-[5vh] rounded-sm"
        onClick={() => setEstadoSeleccionado("documentos")}
      >
        <a className="text-gray-50">Documentos disponibles</a>
      </button>
    </div>
  );
};

export default Estados;

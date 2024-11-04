import React from "react";
import Tareas from "./Tareas";
import { Tarea } from "../../../interface/HomePageData";

interface ProgresoTareasProps {
  empresaSeleccionada: string | null;
  setTareasFiltradas: React.Dispatch<React.SetStateAction<Tarea[]>>;
}

const ProgresoTareas: React.FC<ProgresoTareasProps> = ({
  empresaSeleccionada,
  setTareasFiltradas,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 w-[75vw] h-[70vh] rounded-s-2xl bg-gray-50 ">
      <div>
        <a className="text-zinc-950 text-xl">Pendientes</a>
        <div className="w-[24vw] h-[54vh] overflow-y-scroll custom-scrollbar bg-white rounded-md shadow-[0_1px_4px_0_rgba(0,0,0,0.15)] mt-2">
          <Tareas empresaId={empresaSeleccionada} onTareasFiltradas={setTareasFiltradas} />
        </div>
        <button className="flex justify-center items-center w-[24vw] h-[7vh] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)] mt-3 text-black">
          Agregar tarea +
        </button>
      </div>

      <div>
        <a className="text-zinc-950 text-xl">En proceso</a>
        <div className="w-[24vw] h-[54vh] overflow-y-scroll custom-scrollbar bg-white rounded-md shadow-[0_1px_4px_0_rgba(0,0,0,0.15)] mt-2">
          <Tareas empresaId={empresaSeleccionada} onTareasFiltradas={setTareasFiltradas} />
        </div>
        <button className="w-[24vw] h-[7vh]"></button>
      </div>

      <div>
        <a className="text-zinc-950 text-xl">Realizados</a>
        <div className="w-[24vw] h-[54vh] overflow-y-scroll custom-scrollbar bg-white rounded-md shadow-[0_1px_4px_0_rgba(0,0,0,0.15)] mt-2">
          <Tareas empresaId={empresaSeleccionada} onTareasFiltradas={setTareasFiltradas} />
        </div>
        <button className="w-[24vw] h-[7vh]"></button>
      </div>
    </div>
  );
};

export default ProgresoTareas;

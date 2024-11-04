import { useState } from "react";
import Empresas from "./empresas/Empresas";
import Estados from "./empresas/Estados";
import SliderHome from "./SliderHome";
import ProgresoTareas from "./empresas/ProgresoTareas";
import DocumentosDisponibles from "./empresas/Documentosdisponibles";
import { Tarea } from "../../interface/HomePageData";
import ControlDisponibilidad from "./controlDisponibilidad/ControlDisponibilidad";

function HomePage() {
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState<string | null>(null);
  const [, setTareasFiltradas] = useState<Tarea[]>([]);
  const [vistaSeleccionada, setVistaSeleccionada] = useState<string>("empresas");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState<"progreso" | "documentos">("progreso");

  return (
    <div className="flex justify-center items-center gap-5 w-[98vw] h-[92vh]">
      <SliderHome setVistaSeleccionada={setVistaSeleccionada} />
      <div className="flex flex-col gap-1">
        {vistaSeleccionada === "empresas" && (
          <>
            <Empresas onEmpresaSeleccionada={setEmpresaSeleccionada} />
            <Estados setEstadoSeleccionado={setEstadoSeleccionado} />
            {estadoSeleccionado === "progreso" ? (
              <ProgresoTareas
                empresaSeleccionada={empresaSeleccionada}
                setTareasFiltradas={setTareasFiltradas}
              />
            ) : (
              <DocumentosDisponibles />
            )}
          </>
        )}
        {vistaSeleccionada === "controlDisponibilidad" && <ControlDisponibilidad />}
        {/* Agrega aquí otras vistas según lo necesites */}
      </div>
    </div>
  );
}

export default HomePage;

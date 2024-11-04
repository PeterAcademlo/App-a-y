import { useEffect, useState } from "react";
import { db } from "../../../services/Credenciales";
import { collection, getDocs } from "firebase/firestore";
import perfil from "../../../assets/icons/user-logo.png";
import puntitos from "../../../assets/icons/dots-vertical-rounded-regular-240.png";
import { Tarea } from "../../../interface/HomePageData";

interface TareasProps {
  empresaId: string | null;
  onTareasFiltradas: (tareas: Tarea[]) => void;
}

export default function Tareas({ empresaId, onTareasFiltradas }: TareasProps) {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const tareasCollection = collection(db, "empleados");
        const tareaSnapshot = await getDocs(tareasCollection);
        const tareasList = tareaSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Tarea[];

        const tareasFiltradas = empresaId
          ? tareasList.filter((tarea) => tarea.empresa === empresaId)
          : tareasList;

        setTareas(tareasFiltradas);
        onTareasFiltradas(tareasFiltradas); // Enviamos las tareas filtradas al padre
      } catch (error) {
        console.error("Error fetching tareas: ", error);
      }
    };

    fetchTareas();
  }, [empresaId, onTareasFiltradas]);

  return (
    <div className=" justify-items-center box-border py-3">
      {tareas.map((tarea) => (
        <div
          key={tarea.id}
          className="w-[21vw] h-[20vh] bg-white rounded-lg flex justify-center items-center gap-2.5 shadow-[0_1px_4px_0_rgba(0,0,0,0.15)]"
        >
          <img
            src={perfil}
            className="bg-[var(--secondary)] ml-2 w-[vw] h-[4vw] rounded-full mb-[8vh]"
            alt="Perfil"
          />
          <div className="w-[14.5vw]">
            <div className="leading-none">
              <div className="flex flex-row justify-between">
                <b>{tarea.nombre}</b>
                <img className="w-5" src={puntitos} />
              </div>
              <i className="text-[var(--accent-color)]">{tarea.correo}</i>
            </div>
            <div className="h-px w-[14vw] my-[0.3vh] bg-[var(--primary-color)]"></div>
            <div className="h-[4vw]">{tarea.tarea}</div>
            <div className="flex justify-end items-center text-center gap-1.5 mr-2.5">
              <div
                className={`bg-${
                  tarea.estado === "finalizado" ? "green" : "yellow"
                }-500 mt-[0.3vh] w-3.5 h-3.5 rounded-full`}
              ></div>
              <b>
                {tarea.estado.charAt(0).toUpperCase() + tarea.estado.slice(1)}
              </b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

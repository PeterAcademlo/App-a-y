import React, { useEffect, useState } from "react";
import { db } from "../../../services/Credenciales";
import { collection, getDocs } from "firebase/firestore";

interface Empresa {
  id: string;
  nombre: string;
}

interface EmpresasProps {
  onEmpresaSeleccionada: (empresaId: string) => void;
}

const Empresas: React.FC<EmpresasProps> = ({ onEmpresaSeleccionada }) => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  const cargarEmpresas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "empresas"));
      const listaEmpresas: Empresa[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        nombre: doc.id, // O `doc.data().nombre` si tienes ese campo en Firestore
      }));
      setEmpresas(listaEmpresas);
    } catch (error) {
      console.error("Error al cargar las empresas:", error);
    }
  };

  useEffect(() => {
    cargarEmpresas();
  }, []);

  return (
    <div className="w-[72.3vw] h-[15vh] flex items-center gap-8">
      {empresas.map((empresa) => (
        <button
          key={empresa.id}
          onClick={() => onEmpresaSeleccionada(empresa.id)}
          className="w-[12vw] h-[12vh] rounded-lg flex flex-col p-2 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
        >
          <a className="text-[13px] font-sans text-accent">Empresa</a>
          <b className="text-black text-[1.1rem] font-sans">{empresa.nombre}</b>
        </button>
      ))}
    </div>
  );
};

export default Empresas;

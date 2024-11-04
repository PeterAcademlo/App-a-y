import React from "react";
import Colaboradores from "./Colaboradores";
import Meses from "./Meses";
import Dias from "./Dias";

const ControlDisponibilidad: React.FC = () => {
  return (
    <>
      <Colaboradores />
      <Meses />
      <Dias />
    </>
  );
};

export default ControlDisponibilidad;

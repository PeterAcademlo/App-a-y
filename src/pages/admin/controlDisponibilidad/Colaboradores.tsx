import React from "react";
import puntitos from "../../../assets/icons/dots-vertical-rounded-regular-240.png";

const Colaboradores: React.FC = () => {
  return (
    <div className="w-[72.3vw] h-[15vh] flex items-center gap-8">
      <button className="w-[15vw] h-[12vh] rounded-lg flex flex-col p-2 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        <div className="w-full flex flex-row justify-between">
          <a className="text-[1.1rem] font-sans text-accent">Colaborador X</a>
          <img className="w-5" src={puntitos}/>
        </div>
        <a className="text-[13px] font-sans text-accent">Correo</a>
      </button>
    </div>
  );
};

export default Colaboradores;

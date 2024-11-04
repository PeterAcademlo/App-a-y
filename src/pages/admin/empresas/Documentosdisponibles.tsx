import React from "react";
import documento from "../../../assets/icons/news-regular-240.png";

const DocumentosDisponibles: React.FC = () => {
  return (
    <div className="flex pt-2 justify-center gap-4 w-[75vw] h-[70vh] shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
      <div>
        <a className="text-zinc-950 text-xl">No leídas</a>
        <div className="w-[24vw] h-[53vh] bg-white overflow-y-scroll custom-scrollbar rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)] p-1">
          <div className="p-2 w-[22vw] h-[15vh] bg-slate-50 m-1 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            <a className="text-lg ml-2 text-zinc-950">Título del documento</a>
            <div className="flex justify-around gap-1 mt-2">
              <img className="w-11 h-11" src={documento} />
              <p className="w-[17vw] leading-none text-zinc-950">
                Aqui íra el detalle del documento para que se elabore y
                descargue
              </p>
            </div>
          </div>
        </div>
        <button className=" flex justify-center items-center w-[24vw] h-[7vh] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)] mt-3 text-black">
          Añadir archivo +
        </button>
      </div>

      <div className="">
        <div>
          <a className="text-zinc-950 text-xl">Leídas</a>
          <div className="w-[48vw] h-[53vh] bg-white overflow-y-scroll custom-scrollbar rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)] p-1">
            <div className="p-2 w-[22vw] h-[15vh] bg-slate-50 m-1 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              <a className="text-lg ml-2 text-zinc-950">Título del documento</a>
              <div className="flex justify-around gap-1 mt-2">
                <img className="w-11 h-11" src={documento} />
                <p className="w-[17vw] leading-none text-zinc-950">
                  Aqui íra el detalle del documento para que se elabore y
                  descargue
                </p>
              </div>
            </div>
          </div>
          <button className=" flex justify-center items-center w-[48vw] h-[7vh] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.3)] mt-3  text-black">
            Añadir archivo +
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentosDisponibles;

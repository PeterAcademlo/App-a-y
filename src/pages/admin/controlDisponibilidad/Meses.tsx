import React from "react";

const Meses: React.FC = () => {
  return (
    <div className="flex gap-5 w-[72.3vw] h-[10vh] overflow-x-scroll custom-scrollbar">
      <div>
        <button className="flex items-center justify-center bg-[var(--secondary)] w-[14vw] h-[5vh] rounded-sm">
          <a className="text-gray-50">Octubre 2024</a>
        </button>
      </div>
      <div>
        <button className="flex items-center justify-center bg-[var(--secondary)] w-[14vw] h-[5vh] rounded-sm">
          <a className="text-gray-50">Noviembre 2024</a>
        </button>
      </div>
      <div>
        <button className="flex items-center justify-center bg-[var(--secondary)] w-[14vw] h-[5vh] rounded-sm">
          <a className="text-gray-50">Diciembre 2024</a>
        </button>
      </div>
    </div>
  );
};

export default Meses;

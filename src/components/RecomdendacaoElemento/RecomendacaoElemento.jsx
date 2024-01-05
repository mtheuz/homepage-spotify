import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
function RecomendacaoElemento() {
  return (
    <a
      href="#"
      className="items-center justify-center p-4 rounded-md bg-zinc-600/10 hover:bg-zinc-400/10 group"
    >
      <div className="relative">
        <img
          className="w-32 h-32 rounded-sm mb-3"
          src="src\assets\img\BK-Icarus.jpeg"
          alt="BK-icarus"
        />
        <button className="absolute z-10 bottom-0 right-0 mb-2 mr-2 rounded-full bg-black invisible group-hover:visible transition delay-200">
          <FaCirclePlay color="#32CD32" size={40} />
        </button>
      </div>
      <strong className="text-sm font-bold">ICARUS</strong>
      <div className="text-xs text-zinc-400 mt-1">
        BK, Nansy Silvvz, Gigantes
      </div>
    </a>
  );
}

export default RecomendacaoElemento;

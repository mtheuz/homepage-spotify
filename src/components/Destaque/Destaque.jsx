import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";

function Destaque() {
  return (
    <a className=" group flex flex-row items-center text-sm font-bold bg-zinc-400/20 hover:bg-zinc-400/40 cursor-pointer rounded-sm ">
              <img
                className="w-14 h-14 rounded-sm mr-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <p>ICARUS</p>
              <button className="ml-auto rounded-full bg-black mr-2 drop-shadow-sm invisible group-hover:visible ">
               <FaCirclePlay color="#32CD32" size={45}/>
              </button>
              
    </a>
  )
}

export default Destaque
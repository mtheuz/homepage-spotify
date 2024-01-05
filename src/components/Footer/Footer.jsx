import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { CgPlayButtonR } from "react-icons/cg";
import { TbMicrophone2 } from "react-icons/tb";
import { IoShuffleOutline } from "react-icons/io5";
import { BsRepeat } from "react-icons/bs";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { MdOutlineViewAgenda } from "react-icons/md";
import { TbDevices2 } from "react-icons/tb";
import { LuVolume2 } from "react-icons/lu";

function Footer() {
  return (
    <footer className="flex justify-between p-4 items-center w-screen bg-black bottom-0 fixed ">
      <div className="flex flex-row">
        <img
          className="w-12 h-12 rounded-sm"
          src="src\assets\img\BK-Icarus.jpeg"
          alt="BK-icarus"
        />
        <div className="text-white pl-3 space-y-0">
          <strong className="text-xs font-medium">Amanhecer</strong>
          <p className="text-[10px] text-zinc-400">BK,Nansy Silvvz, Gigantes</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col  items-center">
          <div className="flex flex-row gap-3 items-center ">
            <IoShuffleOutline color="rgb(161 161 170)" size={20} />
            <MdSkipPrevious color="white" size={20} />
            <FaCirclePlay color="white" size={28} />
            <MdSkipNext color="white" size={20} />
            <BsRepeat color="rgb(161 161 170)" size={15} />
          </div>

          <div className="flex items-center justify-center">
            <span className="text-zinc-400 text-xs">0:30</span>
            <div className="w-96 h-1 mr-3 ml-3 rounded-full bg-slate-400/40">
              <div className="w-32 bg-white h-1 rounded-full"></div>
            </div>
            <span className="text-zinc-400 text-xs">3:59</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 pr-3">
        <CgPlayButtonR color="rgb(161 161 170)" size={15} />
        <TbMicrophone2 color="rgb(161 161 170)" size={15} />
        <MdOutlineViewAgenda color="rgb(161 161 170)" size={15} />
        <TbDevices2 color="rgb(161 161 170)" size={15} />
        <LuVolume2 color="rgb(161 161 170)" size={15} />
        <div className="flex items-center justify-center">
            <div className="w-20 h-1  rounded-full bg-slate-400/40">
              <div className="w-16 bg-white h-1 rounded-full"></div>
            </div>
          </div>
        <FaUpRightAndDownLeftFromCenter color="rgb(161 161 170)" size={13} />
      </div>
    </footer>
  );
}

export default Footer;

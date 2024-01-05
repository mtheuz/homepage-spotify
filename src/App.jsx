import "./App.css";
import { GoHome } from "react-icons/go";
import { IoSearch, IoAddOutline } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { GrLinkNext, GrPrevious, GrNext } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa6";

import Album from "./components/Album/Album";
import Footer from "./components/Footer/Footer";
import Destaque from "./components/Destaque/Destaque";
export default function App() {
  return (
    <div className="h-screen flex flex-col mt-4">
      <div className="flex flex-1">
        <aside className=" w-72">
          <nav className=" h-24 flex flex-col justify-center pl-3 space-y-3 mb-1.5 bg-zinc-900/50 rounded-lg text-zinc-400 text-sm ">
            <a
              href="#"
              className="flex flex-row items-center gap-3 hover:text-zinc-100"
            >
              <GoHome color="gray" size={25} />
              Inicio
            </a>
            <a
              href="#"
              className="flex flex-row items-center gap-3 hover:text-zinc-100"
            >
              <IoSearch color="gray" size={25} />
              Buscar
            </a>
          </nav>

          <nav className="  flex-1 h-screen bg-zinc-900/50 rounded-lg text-white">
            <a
              href="#"
              className="flex flex-row items-center justify-between gap-3 text-sm text-zinc-400 pl-3 pt-3"
            >
              <div className="flex flex-row items-center gap-3">
                <LuLibrary size={25} color="gray" />
                Sua Biblioteca
              </div>

              <div className="flex flex-row items-center gap-4 pr-3">
                <IoAddOutline size={20} />
                <GrLinkNext size={15} />
              </div>
            </a>
            <Album />
          </nav>
        </aside>
        <main className="flex-1 bg-zinc-900/50 rounded-lg flex-1 ml-1.5 text-white p-4">
          <div className="flex justify-between">
            <div className="flex flex-row gap-2">
              <div className="p-2 rounded-full bg-zinc-900">
                <GrPrevious size={15} />
              </div>

              <div className="p-2 rounded-full bg-zinc-900">
                <GrNext size={15} />
              </div>
            </div>
            <div className="flex flex-row gap-">
              <div className="p-2 rounded-full bg-zinc-900">
                <FaRegBell size={15} />
              </div>
              <div className="p-2 rounded-full bg-zinc-900">
                <PiUsersThreeBold size={15} />
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold mt-4 mb-4 text-zinc-100">
            Boa noite
          </h1>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <Destaque />
            <Destaque />
            <Destaque />
            <Destaque />
            <Destaque />
            <Destaque />
          </div>
          <hi className="text-xl font-bold mb-4 text-zinc-100">
            Feito para Matheus Mota
          </hi>
          <div className="grid grid-cols-7 gap-3">
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>
            <a href="#" className="items-center justify-center p-4 rounded-md bg-zinc-600/10">
              <img
                className="w-32 h-32 rounded-sm mb-3"
                src="src\assets\img\BK-Icarus.jpeg"
                alt="BK-icarus"
              />
              <strong className="text-sm font-bold">ICARUS</strong>
              <div className="text-xs text-zinc-400 mt-1">BK,Nansy Silvvz, Gigantes</div>
            </a>

         
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

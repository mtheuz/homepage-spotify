import "./App.css";
import { GoHome } from "react-icons/go";
import { IoSearch, IoAddOutline } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { GrLinkNext } from "react-icons/gr";
import Album from "./components/Album/Album";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <div className="h-screen flex flex-col mt-4">
      <div className="flex flex-1">
        <aside className=" w-72">
        <nav  className=" h-24 flex flex-col justify-center pl-3 space-y-3 mb-1.5 bg-zinc-900/50 rounded-lg text-zinc-400 text-sm ">
          <a href="#" className="flex flex-row items-center gap-3 hover:text-zinc-100">
          <GoHome color="gray" size={25} />
            Inicio</a>
          <a href="#" className="flex flex-row items-center gap-3 hover:text-zinc-100">
          <IoSearch color="gray" size={25}/>
            Buscar</a>
        </nav>

        <nav className="  flex-1 h-screen bg-zinc-900/50 rounded-lg text-white">
          <a href="#" className="flex flex-row items-center justify-between gap-3 text-sm text-zinc-400 pl-3 pt-3">
            <div className="flex flex-row items-center gap-3">
            <LuLibrary size={25} color="gray"/>
            Sua Biblioteca
            </div>
            
            <div className="flex flex-row items-center gap-4 pr-3">
            <IoAddOutline size={20}/>
            <GrLinkNext size={15}/>
            </div>
          </a>
          <Album/>
        </nav>
        </aside>
        <main className="flex-1 bg-zinc-900/50 rounded-lg flex-1 ml-1.5 text-white">main</main>
      </div>
      <Footer/>
      
      
    </div>
  );
}

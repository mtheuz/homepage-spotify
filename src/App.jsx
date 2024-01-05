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
import RecomendacaoElemento from "./components/RecomdendacaoElemento/RecomendacaoElemento";
import Recomendacao from "./components/Recomendacao/Recomendacao";
export default function App() {
  return (
    <div className="h-screen flex flex-col mt-4">
      <div className="flex flex-1">
        <aside className=" w-72 ml-1.5">
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

          <nav className="  flex-1 h-full bg-zinc-900/50 rounded-lg text-white mb-5">
            <div
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
            </div>
            <div className="flex flex-row justify-between text-xs font-normal text-zinc-400 p-3 mt-3 mb-3">
              <IoSearch color="gray" size={15} />
              <strong>Recentes</strong>
            </div>

            <Album
              img="src\assets\img\musicas_curtidas.png"
              nome="Músicas Curtidas"
              descricao={"Playlist-617 músicas"}
            />
            <Album
              img="src\assets\img\seus-episodios.png"
              nome="Seus Episódios"
              descricao={"Episodios salvos e baixados"}
            />
            <Album
              img="src\assets\img\BK-Icarus.jpeg"
              nome="ICARUS"
              descricao={"Album-BK"}
            />
            <Album
              img="src\assets\img\BK-Icarus.jpeg"
              nome="ICARUS"
              descricao={"Album-BK"}
            />
            <Album
              img="src\assets\img\BK-Icarus.jpeg"
              nome="ICARUS"
              descricao={"Album-BK"}
            />
            <Album
              img="src\assets\img\BK-Icarus.jpeg"
              nome="ICARUS"
              descricao={"Album-BK"}
            />
          </nav>
        </aside>
        <main className="flex-1 bg-zinc-900/50 rounded-lg  ml-1.5 text-white p-4">
          <div className="flex justify-between">
            <div className="flex flex-row gap-2">
              <div className="p-2 rounded-full bg-zinc-900">
                <GrPrevious size={15} />
              </div>

              <div className="p-2 rounded-full bg-zinc-900">
                <GrNext size={15} />
              </div>
            </div>
            <div className="flex flex-row gap-3">
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
          <Recomendacao titulo="Feito para Matheus Mota" />
          <Recomendacao titulo="Feito para Matheus Mota" />
          <Recomendacao titulo="Feito para Matheus Mota" />
          <Recomendacao titulo="Feito para Matheus Mota" />
        </main>
      </div>
      <Footer />
    </div>
  );
}

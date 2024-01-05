import React from "react";
import RecomendacaoElemento from "../RecomdendacaoElemento/RecomendacaoElemento";

function Recomendacao({titulo}) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-zinc-100">
        {titulo}
      </h1>
      <div className="grid grid-cols-7 gap-3">
        <RecomendacaoElemento />
        <RecomendacaoElemento />
        <RecomendacaoElemento />
        <RecomendacaoElemento />
        <RecomendacaoElemento />
        <RecomendacaoElemento />
        <RecomendacaoElemento />
      </div>
    </div>
  );
}

export default Recomendacao;

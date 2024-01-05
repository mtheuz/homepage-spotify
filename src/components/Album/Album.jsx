import React from 'react'

function Album({img, nome, descricao}) {
  return (
    <nav className="p-2 rounded-md  hover:bg-zinc-400/10 cursor-pointer">
            <div className="flex flex-row items-center">
              <img className="w-10 h-10 rounded-sm"src={img} alt="BK-icarus"/>
              
              <div className="flex-col pl-3 text-xs font-medium">
                <strong>{nome}</strong>
                <p className="text-zinc-400">{descricao}</p>
              </div>
              
            </div>
    </nav>
  )
}

export default Album
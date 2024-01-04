import React from 'react'

function Album() {
  return (
    <nav className="p-3">
            <div className="flex flex-row items-center">
              <img className="w-10 h-10 rounded-sm"src="src\assets\img\BK-Icarus.jpeg" alt="BK-icarus"/>
              <div className="flex-col pl-3 text-xs font-medium">
                <strong>ICARUS</strong>
                <p className="text-zinc-400">Àlbum - BK</p>
              </div>
              
            </div>
    </nav>
  )
}

export default Album
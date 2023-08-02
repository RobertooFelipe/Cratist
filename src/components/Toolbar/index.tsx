'use client'

import { useState } from 'react'
import { ToolbarProps } from './types'
import { useToolbar } from './useToolbar'
import { appWindow } from '@tauri-apps/api/window'
import { MdOutlineMinimize, MdClose } from 'react-icons/md'
import { FiMaximize, FiMinimize } from 'react-icons/fi'

export default function Toolbar({}: ToolbarProps) {
  const [maximize, setMaximize] = useState(false)
  const {} = useToolbar()

  const handleMaxUnMaxWin = () => {
    setMaximize((prev) => !prev)

    if (maximize) {
      appWindow.unmaximize()
      return
    }
    appWindow.maximize()
  }

  return (
    <div className="absolute top-0 flex w-full items-center p-2">
      <div
        className="h-4 w-full cursor-move"
        onMouseDown={() => appWindow.startDragging()}
      />
      <div className="flex gap-4">
        <button
          className="delay-150 duration-300 ease-out hover:scale-125"
          onClick={() => appWindow.minimize()}
        >
          <MdOutlineMinimize color="#00E0FF" size={18} />
        </button>

        {maximize ? (
          <button
            className="delay-150 duration-300 ease-out hover:scale-125"
            onClick={handleMaxUnMaxWin}
          >
            <FiMinimize color="#00E0FF" size={15} />
          </button>
        ) : (
          <button
            className="delay-150 duration-300 ease-out hover:scale-125"
            onClick={handleMaxUnMaxWin}
          >
            <FiMaximize color="#00E0FF" size={15} />
          </button>
        )}

        <button
          className="delay-150 duration-300 ease-out hover:scale-125"
          onClick={() => appWindow.close()}
        >
          <MdClose color="#00E0FF" size={18} />
        </button>
      </div>
    </div>
  )
}

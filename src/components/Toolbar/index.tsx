'use client'

import { ToolbarProps } from './types'
import { useToolbar } from './useToolbar'
import { appWindow } from '@tauri-apps/api/window'

export default function Toolbar({}: ToolbarProps) {
  const {} = useToolbar()

  return (
    <div>
      <button
        className="absolute left-0 top-0 rounded bg-white p-4"
        onClick={() => appWindow.close()}
      >
        X
      </button>
    </div>
  )
}

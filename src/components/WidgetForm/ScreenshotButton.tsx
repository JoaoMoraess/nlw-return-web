import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import React, { useState } from 'react'
import { Loading } from './Loading'

type Props = {
  screenshot: string | null
  onShot: (v: string | null) => void
}

export const ScreenshotButton: React.FC<Props> = ({ onShot, screenshot }) => {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenShot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onShot(base64Image)

    setIsTakingScreenShot(false)
  }

  if (screenshot) {
    return (
      <button
        onClick={() => onShot(null)}
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash weight='fill' />
      </button>
    )
  }

  return (
    <button type='button' onClick={handleTakeScreenshot} className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transitions-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'>
      {isTakingScreenShot
        ? (
          <Loading />
          )
        : (
          <Camera className='w-6 h-6 text-zinc-100' />
          )}
    </button>
  )
}

import { ChatTeardropDots } from 'phosphor-react'
import React from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from 'components/WidgetForm'

export const Widget: React.FC = () => {
  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end'>
      <Popover.Panel><WidgetForm /></Popover.Panel>

      <Popover.Button className='group flex justify-between items-center bg-brand-500 rounded-full px-3 h-12 text-white'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='transition-all duration-500 ease-linear max-w-0 overflow-hidden group-hover:max-w-xs'>
        <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}

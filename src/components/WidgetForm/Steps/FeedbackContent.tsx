import { CloseButton } from 'components/CloseButton'
import React, { FormEvent, useState } from 'react'
import { FeedbackTypes, feedbackTypes } from 'components/WidgetForm'
import { ArrowLeft } from 'phosphor-react'
import { ScreenshotButton } from '../ScreenshotButton'

type Props = {
  feedbackType: FeedbackTypes
  undoFeedbackStep: () => void
  onSent: () => void
}

export const FeedbackContent: React.FC<Props> = ({ feedbackType, undoFeedbackStep, onSent }) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('')

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const handleSubmitFeedback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ screenshot, comment })
    onSent()
  }

  return (
    <>
      <header>
        <button onClick={() => undoFeedbackStep()} className='top-5 left-5 absolute text-zinc-700 hover:text-zinc-100'>
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            className='w-6 h-6'
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-w-2 scrollbar-thumb-rounded-full'
          placeholder='Conte com detalhes o que esta acontecendo...'
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            onShot={(v) => setScreenshot(v)}
            screenshot={screenshot}
          />

          <button
            type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar feedback
          </button>
        </footer>
      </form>

    </>
  )
}

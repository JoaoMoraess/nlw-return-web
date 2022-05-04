import React, { useState } from 'react'

import bugImageUrl from 'assets/bug.svg'
import ideaImageUrl from 'assets/idea.svg'
import thoughtImageUrl from 'assets/thought.svg'
import { FeedbackType as FeedbackTypeSteps } from './Steps/FeedbackType'
import { FeedbackContent as FeedbackContentStep } from './Steps/FeedbackContent'
import { FeedbackSuccess as FeedbackSuccessStep } from './Steps/FeedbackSuccess'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackTypes = keyof typeof feedbackTypes

export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent
        ? (
        <FeedbackSuccessStep onRestart={handleRestartFeedback} />
          )
        : (
        <>
          {!feedbackType
            ? (
              <FeedbackTypeSteps onFeedbackTypeChange={setFeedbackType} />
              )
            : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                undoFeedbackStep={handleRestartFeedback}
                onSent={() => setFeedbackSent(true)}
              />
              )
          }
        </>
          )}
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ Pela <a className='underline underline-offset-1' href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}

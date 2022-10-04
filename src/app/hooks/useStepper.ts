import { useCallback, useState } from 'react'

interface UseStepperArgs {
  /**
   * current active index of stepper component
   */
  index: number
  /**
   * max length of steps
   */
  max: number
  /**
   * callback function that will always everytme handleNextStep is called
   */
  onNext?: (e: number) => void
  /**
   * callback function that will always everytme handlePrevStep is called
   */
  onPrevious?: (e: number) => void
  /**
   * callback function that will always everytme handlePrevStep is called
   */
  onGoToStep?: (e: number) => void
}

export const useStepper = (args: UseStepperArgs) => {
  const { index, max, onNext, onPrevious, onGoToStep } = args

  const [currentIndex, setCurrentIndex] = useState(index ?? 1)

  const handleNextStep = useCallback(() => {
    if (currentIndex < max) {
      onNext && onNext(currentIndex + 1)
      setCurrentIndex((old) => old + 1)
      return
    }
  }, [max, currentIndex, onNext])

  const handlePrevStep = useCallback(() => {
    if (currentIndex > 1) {
      onPrevious && onPrevious(currentIndex - 1)
      setCurrentIndex((old) => old - 1)
    }
  }, [currentIndex, onPrevious])

  const handleGoToStep = useCallback(
    (e: number) => {
      if (currentIndex > 1) {
        onGoToStep && onGoToStep(e)
        setCurrentIndex(e)
      }
    },
    [currentIndex, onGoToStep]
  )

  return { handleNextStep, currentIndex, handlePrevStep, handleGoToStep }
}

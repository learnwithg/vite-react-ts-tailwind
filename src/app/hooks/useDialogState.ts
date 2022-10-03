import { useState } from 'react'

/**
 *
 * @returns methods used for implementing dialog (i.e. isOpen, setCloseDialog, setOpenDialog)
 */
export const useDialogState = (): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const setCloseDialog = () => setIsOpen(false)
  const setOpenDialog = () => setIsOpen(true)

  return [isOpen, setCloseDialog, setOpenDialog]
}

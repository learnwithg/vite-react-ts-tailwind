import React from 'react'

export interface IDialogProps
  extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> {
  closeDialog: () => void
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export interface IDialogTitle {
  title: string
  showIcon?: boolean
  Icon?: JSX.Element
}

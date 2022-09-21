import { classNames } from '#utils/classNames'
import { FCC } from '#utils/FCC'

export type ButtonVariant =
  | 'filled-primary'
  | 'filled-secondary'
  | 'filled-success'
  | 'filled-warning'
  | 'filled-danger'
  | 'filled-info'
  | 'outlined-primary'
  | 'outlined-secondary'
  | 'outlined-success'
  | 'outlined-warning'
  | 'outlined-danger'
  | 'outlined-info'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant
  size?: 'sm' | 'base'
}

export const Button: FCC<ButtonProps> = ({
  children,
  variant = 'filled-primary',
  size = 'base',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(
        'rounded outline-none shadow-sm-3 hover:shadow-sm-4 focus:shadow-sm-4 active:shadow-sm-1 transition-all duration-150 font-bold whitespace-nowrap px-6 self-end',
        variantToClassName[variant],
        size === 'base' ? 'py-3' : 'py-2',
        rest.className && rest.className
      )}
    >
      {children}
    </button>
  )
}

const variantToClassName: Record<ButtonVariant, string> = {
  'filled-primary':
    'bg-interactive-primary-neutral hover:bg-interactive-primary-hovered active:bg-interactive-primary-pressed text-white',
  'filled-secondary':
    'bg-interactive-secondary-neutral hover:bg-interactive-secondary-hovered active:bg-interactive-secondary-pressed text-main-body hover:text-main-text active:text-main-heading',
  'filled-success':
    'bg-interactive-success-neutral hover:bg-interactive-success-hovered active:bg-interactive-success-pressed text-white',
  'filled-warning':
    'bg-interactive-warning-neutral hover:bg-interactive-warning-hovered active:bg-interactive-warning-pressed text-white',
  'filled-danger':
    'bg-interactive-danger-neutral hover:bg-interactive-danger-hovered active:bg-interactive-danger-pressed text-white',
  'filled-info':
    'bg-interactive-info-neutral hover:bg-interactive-info-hovered active:bg-interactive-info-pressed text-white',
  'outlined-primary':
    'border border-interactive-primary-neutral text-interactive-primary-neutral hover:text-interactive-primary-hovered active:text-interactive-primary-pressed hover:bg-surface-primary-hovered',
  'outlined-secondary':
    'border border-gray-800 text-gray-800 hover:bg-surface-secondary-hovered',
  'outlined-success':
    'border border-interactive-success-neutral text-interactive-success-neutral hover:text-interactive-success-hovered active:text-interactive-success-pressed hover:bg-surface-success-hovered',
  'outlined-warning':
    'border border-interactive-warning-neutral text-interactive-warning-neutral hover:text-interactive-warning-hovered active:text-interactive-warning-pressed hover:bg-surface-warning-hovered',
  'outlined-danger':
    'border border-interactive-danger-neutral text-interactive-danger-neutral hover:text-interactive-danger-hovered active:text-interactive-danger-pressed hover:bg-surface-danger-hovered',
  'outlined-info':
    'border border-interactive-info-neutral text-interactive-info-neutral hover:text-interactive-info-hovered active:text-interactive-info-pressed hover:bg-surface-info-hovered'
}

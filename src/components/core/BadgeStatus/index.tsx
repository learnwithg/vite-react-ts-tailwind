import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/20/solid'
import { FCC } from '#utils/FCC'
import { classNames } from '#utils/classNames'

export type BadgeVariant =
  | 'neutral'
  | 'success'
  | 'information'
  | 'warning'
  | 'danger'

interface IBadgeStatusProps {
  labelOnly?: boolean
  label?: string
  variant?: BadgeVariant
  withIcon?: boolean
  size: 'sm' | 'base'
}

const BadgeStatus: FCC<IBadgeStatusProps> = ({
  labelOnly,
  label,
  variant = 'neutral',
  withIcon = true,
  size = 'base'
}) => {
  return (
    <span
      className={classNames(
        label === undefined
          ? ' flex justify-center items-center py-px px-2 rounded-lg'
          : 'flex justify-center gap-1 items-center py-px px-2 rounded-lg',
        variantToClassName[variant],
        size === 'base' ? 'text-sm' : 'text-xs'
      )}
    >
      {labelOnly ? (
        ''
      ) : withIcon === false || variant === 'neutral' ? (
        <p className="text-xl leading-none">•</p>
      ) : variant === 'success' ? (
        <CheckCircleIcon className="text-main-success w-3 py-1.5" />
      ) : variant === 'information' ? (
        <InformationCircleIcon className="text-main-info w-3 py-1.5" />
      ) : variant === 'warning' ? (
        <ExclamationTriangleIcon className="text-main-warning w-3 py-1.5" />
      ) : variant === 'danger' ? (
        <ExclamationCircleIcon className="text-main-danger w-3 py-1.5" />
      ) : (
        <p className="text-xl leading-none">•</p>
      )}
      <p className="font-karla leading-none py-1.5 ">{label}</p>
    </span>
  )
}

export default BadgeStatus

const variantToClassName: Record<BadgeVariant, string> = {
  neutral: 'bg-gray-100 text-main-text ',
  success: 'bg-surface-success-neutral text-main-success ',
  information: 'bg-surface-info-neutral text-main-info ',
  warning: 'bg-surface-warning-neutral text-main-warning ',
  danger: 'bg-surface-danger-neutral text-main-danger '
}
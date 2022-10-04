import { classNames } from '#utils/classNames'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import toast, { Toast as RToast } from 'react-hot-toast'

export type ToastVariant = 'success' | 'danger' | 'warning' | 'info'

export interface ToastProps {
  variant?: ToastVariant
  message?: JSX.Element | string | null
  actionLabel?: string
  onActionClick?: () => void
  t: RToast
}

const variantToProperties: Record<
  ToastVariant,
  {
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element
    className: string
  }
> = {
  success: {
    className:
      'bg-surface-success-neutral divide-main-success text-main-success',
    icon: CheckCircleIcon
  },
  warning: {
    className:
      'bg-surface-warning-neutral divide-main-warning text-main-warning',
    icon: CheckCircleIcon
  },
  danger: {
    className: 'bg-surface-danger-neutral divide-main-danger text-main-danger',
    icon: CheckCircleIcon
  },
  info: {
    className: 'bg-surface-info-neutral divide-main-info text-main-info',
    icon: CheckCircleIcon
  }
}

const Toast: React.FC<ToastProps> = ({ variant = 'success', message, t }) => {
  const propertyToUse = variantToProperties[variant]

  return (
    <>
      <div aria-live="assertive">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={t.visible}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-x-2"
            leaveTo="opacity-0 translate-x-0"
          >
            <div
              className={classNames(
                'max-w-[340px] sm:max-w-[540px] md:max-w-[640px] shadow-md',
                t.visible ? 'animate-enter' : 'animate-leave'
              )}
            >
              <div
                className={classNames(
                  'flex divide-x-2 px-6 py-5 gap-2 md:gap-4',
                  propertyToUse.className
                )}
              >
                <div className="flex gap-2 md:gap-4">
                  <span className="mt-0.5">
                    <propertyToUse.icon className="h-5 w-5" />
                  </span>

                  <p>{message}</p>

                  <div className="mt-0.5 items-start"></div>
                </div>
                <div className="pl-2">
                  <button
                    className="h-6 w-6 flex items-center justify-center text-gray-700 hover:text-gray-900"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export default Toast

export const showToast = (props?: Omit<ToastProps, 't'>) => {
  return toast.custom((t) => <Toast t={{ ...t }} {...props} />)
}

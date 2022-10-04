import { classNames } from '#utils/classNames'
import { HTMLInputTypeAttribute } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: HTMLInputTypeAttribute | undefined
  leading?: string | undefined | JSX.Element
  trailing?: string | undefined | JSX.Element
  className?: string
  inputClassName?: string
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  innerRef?: React.LegacyRef<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  innerRef,
  className,
  inputClassName,
  leading,
  trailing,
  error,
  type = 'text',
  ...rest
}) => {
  return (
    <div className={classNames('flex flex-col', className && className)}>
      {label && (
        <label className="text-xs font-medium text-gray-800" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="relative flex w-full">
        {leading && (
          <span className="text-sm font-medium z-10 pointer-events-none absolute inset-y-0 right-2 pl-3 flex items-center">
            {leading}
          </span>
        )}

        <input
          name={name}
          ref={innerRef}
          type={type}
          className={classNames(
            'border relative text-base w-full text-gray-900 transition-all my-1 rounded py-2.5 outline-none disabled:bg-gray-100 disabled:text-gray-700 font-normal focus:border-main-accent bg-white focus:outline-none focus:ring-0',
            leading ? 'pl-9' : 'pl-2',
            trailing || error ? 'pr-9' : 'pr-2',
            error ? 'border-main-danger' : 'border-gray-400',
            inputClassName && inputClassName
          )}
          {...rest}
        />

        {(error || trailing) && (
          <span className="text-sm font-medium z-10 pointer-events-none absolute inset-y-0 right-2 pl-3 flex items-center">
            <ExclamationCircleIcon className="h-5 w-5 text-main-danger" />
            {trailing}
          </span>
        )}
      </div>

      {error && (
        <span
          className={classNames(
            'text-xs font-normal',
            error ? 'text-main-danger' : 'text-gray-blue-5'
          )}
        >
          {error}
        </span>
      )}
    </div>
  )
}

export default Input

import { classNames } from '#utils/classNames'
import React, { useState } from 'react'

export interface RadioOption {
  value: string | number
  name: string
  description?: string
}

export interface RadioProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  options: RadioOption[]
  label?: string
  size?: 'sm' | 'base' | 'lg'
}

const Radio: React.FC<RadioProps> = ({
  options,
  label,
  value,
  size = 'base',
  onChange,
  ...rest
}) => {
  const [selected, setSelected] = useState<string | number>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    setSelected(e.currentTarget.id)
  }

  return (
    <fieldset>
      {label && (
        <legend className="text-xs font-medium text-gray-700 mb-1">
          {label}
        </legend>
      )}

      <div className="space-y-1">
        {options.map((option) => (
          <div
            key={option.value}
            className={classNames(
              'relative',
              option?.description ? 'items-start' : 'items-center'
            )}
          >
            <div
              className={classNames(
                'grid grid-cols-[18px_1fr] items-center gap-x-2'
              )}
            >
              <input
                id={option.value.toString()}
                aria-describedby={`${option.value}-description`}
                checked={(value || selected) === option.value.toString()}
                type="radio"
                onChange={handleChange}
                className={classNames(
                  'border-2 border-gray-600 focus:ring-main-accent transition-all text-main-accent justify-self-center',
                  size === 'sm' && 'h-3 w-3',
                  size === 'base' && 'h-[14px] w-[14px]',
                  size === 'lg' && 'h-[18px] w-[18px]'
                )}
                {...rest}
              />
              <label
                htmlFor={option.value.toString()}
                className="text-gray-700"
              >
                {option.name}
              </label>

              {option.description && (
                <label
                  htmlFor={option.value.toString()}
                  id={`${option.value}-description`}
                  className="text-gray-500 col-start-2"
                >
                  {option.description}
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default Radio

import { useState } from 'react'

import { Switch } from '@headlessui/react'

import { classNames } from '#utils/classNames'
import { FCC } from '#utils/FCC'

interface SwitchProps {
  onChangeValue: () => void
  size?: 'sm' | 'base'
}

export const Toggle: FCC<SwitchProps> = ({ size = 'base', onChangeValue }) => {
  const [enabled, setEnabled] = useState<boolean>(false)

  return (
    <Switch
      checked={enabled}
      onChange={() => {
        onChangeValue()
        setEnabled((prevState) => !prevState)
      }}
      className={classNames(
        enabled ? 'bg-branding-pumpkin' : 'bg-gray-200 ',
        'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        size === 'base' ? 'h-6 w-12' : 'h-5 w-10 '
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled
            ? size === 'base'
              ? 'translate-x-6'
              : 'translate-x-5'
            : 'translate-x-0 border border-gray-600',
          'pointer-events-none inline-block  transform rounded-full  bg-white shadow ring-0 transition duration-200 ease-in-out',
          size === 'base' ? 'h-5 w-5' : 'h-4 w-4'
        )}
      />
    </Switch>
  )
}

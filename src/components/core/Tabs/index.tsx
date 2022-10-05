import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/20/solid'

const tabs = [
  { name: 'Tab One', href: '#', icon: UserIcon, current: true },
  { name: 'Tab Two', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Tab Three', href: '#', icon: UsersIcon, current: false },
  { name: 'Tab Four', href: '#', icon: CreditCardIcon, current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  return (
    <div className="font-karla text-sm">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-branding-pumpkin focus:ring-branding-pumpkin"
          //   defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        {/* <div className="border-b border-gray-400"> */}
        <nav className="-mb-px flex gap-2 " aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              onClick={(e) => console.log(e.currentTarget)}
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? 'border-branding-pumpkin text-branding-pumpkin'
                  : 'border-transparent  px-5 py-3 rounded text-main-body hover:text-main-body hover:bg-interactive-secondary-hovered ',
                'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <div className="flex px-2">
                <tab.icon
                  className={classNames(
                    tab.current
                      ? 'text-branding-pumpkin'
                      : 'text-main-body group-hover:text-main-body',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </div>
            </a>
          ))}
        </nav>
        {/* </div> */}
      </div>
    </div>
  )
}

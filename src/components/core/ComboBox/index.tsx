import { classNames } from '#utils/classNames'
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  Props,
  components
} from 'react-select'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { selectThemeColors } from './theme'

export type ComboBoxVariant = 'filled' | 'outlined'

export type OptionDefaultFormat = {
  value: string | number
  name: string | number
  icon?: JSX.Element
}

export const ComboBox = <
  Option extends OptionDefaultFormat,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option & OptionDefaultFormat> = GroupBase<
    Option & OptionDefaultFormat
  >
>(
  props: Props<Option, IsMulti, Group> & {
    variant?: ComboBoxVariant
    label?: string
    error?: string
    selected?: string | number | string[] | number[]
    renderValueStyles?: (e: OptionDefaultFormat) => CSSObjectWithLabel
  }
) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {
    className,
    label,
    error,
    renderValueStyles,
    options,
    isMulti,
    defaultValue,
    variant,
    ...rest
  } = props

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          {isMenuOpen ? (
            <ChevronUpIcon className="w-5 text-branding-pumpkin" />
          ) : (
            <ChevronDownIcon className="w-5" />
          )}
        </components.DropdownIndicator>
      )
    )
  }

  return (
    <div className={classNames(className && className, 'group')}>
      {label && <p className="font-karla text-sm text-gray-800">{label}</p>}
      <Select
        className=" font-karla text-sm"
        isSearchable={rest.isSearchable ?? false}
        options={options}
        components={{ DropdownIndicator }}
        defaultValue={defaultValue}
        onMenuOpen={() => {
          setIsMenuOpen(true)
        }}
        onMenuClose={() => {
          setIsMenuOpen(false)
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...selectThemeColors,
            primary25: '#F6F6F7'
          }
        })}
        styles={{
          menu: (provided) => ({
            ...provided,
            fontSize: '12px'
          }),
          option: (provided, { isSelected }) => {
            return {
              ...provided,
              color: isSelected ? '#FF7200' : 'black',
              fontWeight: isSelected ? 'bold' : 'normal'
            }
          },
          indicatorSeparator: (provided) => {
            return {
              ...provided,
              display: 'none'
            }
          },
          menuList: (provided) => {
            return {
              ...provided
            }
          },
          dropdownIndicator: (provided, { isFocused }) => {
            return {
              ...provided,
              color: '#4B4B4B',
              backgroundColor: isMenuOpen
                ? variant === 'filled'
                  ? '#fff4eb'
                  : 'none'
                : isFocused
                ? variant === 'filled'
                  ? '#F5F5F5'
                  : 'none'
                : '',
              '&:hover': {
                backgroundColor: variant === 'filled' ? '#F5F5F5' : 'none',
                color: 'black'
              },
              borderRadius: '0px 4px 4px 0px'
            }
          },
          indicatorsContainer: (provided) => {
            return {
              ...provided
            }
          },
          control: (provided, { selectProps }) => {
            return {
              ...provided,
              backgroundColor: variant === 'filled' ? 'white' : 'none',
              width: '100%',
              border: variant === 'filled' ? '1px solid #CACACA' : 'none',
              borderColor: selectProps['aria-errormessage'] ? 'red' : '#B9BCC1',
              boxShadow: isMenuOpen
                ? variant === 'filled'
                  ? '0 0 0px 1px #FF7200'
                  : '0px 1px 0.5px 0.1px #FF7200'
                : variant === 'filled'
                ? ''
                : '0px 1px 0.5px 0.1px #ffffff',
              '&:hover': {
                boxShadow:
                  variant === 'filled'
                    ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                    : '0px 1px 0.5px 0.1px #cacaca'
              }
            }
          },
          singleValue: (provided) => ({
            ...provided,
            display: 'flex', // To keep icon and label aligned
            alignItems: 'center'
          }),
          multiValue: (styles, { data }) => {
            return {
              ...styles,
              border: '1px solid #696D74',
              ...(renderValueStyles
                ? renderValueStyles(data)
                : { color: '#696D74' })
            }
          },
          multiValueRemove: (styles) => {
            return {
              ...styles,
              background: 'transparent',
              '&:hover': {
                background: 'transparent'
              }
            }
          }
        }}
        classNamePrefix="react-select"
        isMulti={isMulti}
        {...rest}
      />

      {error && <span className="text-tiny">{error}</span>}
    </div>
  )
}

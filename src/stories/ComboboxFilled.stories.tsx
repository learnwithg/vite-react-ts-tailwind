import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '#components/core/Select'
import { optionsList } from '#components/Home'

export default {
  title: 'Core/Combobox/Filled',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'FILLED',
  variant: 'filled',
  options: optionsList
}

export const PrimaryWithError = Template.bind({})
PrimaryWithError.args = {
  label: 'FILLED WITH ERROR',
  variant: 'filled',
  options: optionsList,
  error: 'This is an error example'
}

export const PrimaryMulti = Template.bind({})
PrimaryMulti.args = {
  label: 'FILLED MULTI',
  variant: 'filled',
  options: optionsList,
  isMulti: true
}

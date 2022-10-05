import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '#components/core'
import { optionsList } from '#components/Home'

export default {
  title: 'Core/Combobox/Outlined',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'OUTLINED',
  variant: 'outlined',
  options: optionsList
}

export const PrimaryWithError = Template.bind({})
Primary.args = {
  label: 'OUTLINED WITH ERROR',
  variant: 'outlined',
  options: optionsList
}

export const PrimaryMulti = Template.bind({})
Primary.args = {
  label: 'OUTLINED MULTI',
  variant: 'outlined',
  isMulti: true,
  options: optionsList
}

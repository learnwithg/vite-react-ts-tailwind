import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '#components/core/Select'

export default {
  title: 'Core/Combobox/Filled',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'FILLED',
  variant: 'filled'
}

export const PrimaryWithError = Template.bind({})
PrimaryWithError.args = {
  label: 'FILLED WITH ERROR',
  variant: 'filled',
  error: 'This is an error example'
}

export const PrimaryMulti = Template.bind({})
PrimaryMulti.args = {
  label: 'FILLED MULTI',
  variant: 'filled',
  isMulti: true
}

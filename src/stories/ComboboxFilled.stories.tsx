import { ComponentStory, ComponentMeta } from '@storybook/react'

import ComboBox from '#components/core/Select'

export default {
  title: 'Core/Combobox/Filled',
  component: ComboBox,
  argTypes: {}
} as ComponentMeta<typeof ComboBox>

const Template: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args} />
)

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

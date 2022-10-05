import { ComponentStory, ComponentMeta } from '@storybook/react'

import ComboBox from '#components/core/Select'

export default {
  title: 'Core/Combobox/Outlined',
  component: ComboBox,
  argTypes: {}
} as ComponentMeta<typeof ComboBox>

const Template: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'OUTLINED',
  variant: 'outlined'
}

export const PrimaryWithError = Template.bind({})
Primary.args = {
  label: 'OUTLINED WITH ERROR',
  variant: 'outlined'
}

export const PrimaryMulti = Template.bind({})
Primary.args = {
  label: 'OUTLINED MULTI',
  variant: 'outlined',
  isMulti: true
}

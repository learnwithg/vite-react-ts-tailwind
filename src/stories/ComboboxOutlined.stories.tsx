import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ComboBox } from '#components/core'

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

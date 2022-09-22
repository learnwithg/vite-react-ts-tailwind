import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Toggle } from '#components/core'

export default {
  title: 'Core/Toggle',
  component: Toggle,
  argTypes: {}
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Switch = Template.bind({})
Switch.args = {
  children: 'TOGGLE'
}

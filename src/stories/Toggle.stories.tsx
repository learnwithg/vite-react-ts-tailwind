import { Toggle } from '#components/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Core/Toggle',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Toggle,
  argTypes: {}
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Switch = Template.bind({})
Switch.args = {
  children: 'TOGGLE'
}

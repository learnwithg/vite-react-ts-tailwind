import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Callout } from '#components/core'

export default {
  title: 'Core/Callout',
  component: Callout,
  argTypes: {}
} as ComponentMeta<typeof Callout>

const Template: ComponentStory<typeof Callout> = (args) => <Callout {...args} />

export const Primary = Template.bind({})
Primary.args = {}

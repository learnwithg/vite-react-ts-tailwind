/* eslint-disable @typescript-eslint/await-thenable */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '#components/core'

export default {
  title: 'Core/Checkbox',
  component: Checkbox,
  argTypes: {}
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Checkbox with label',
  name: 'Small Checkbox'
}

export const WithLabelAndDescription = Template.bind({})
WithLabelAndDescription.args = {
  label: 'Checkbox with label and desription',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio itaque id quos explicabo, molestias tempore voluptate? Illo.',
  name: 'Base Checkbox'
}

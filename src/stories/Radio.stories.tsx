/* eslint-disable @typescript-eslint/await-thenable */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio } from '#components/core'

export default {
  title: 'Core/Radio',
  component: Radio,
  argTypes: {}
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Small = Template.bind({})
Small.args = {
  label: 'Small Radio',
  name: 'Small Radio',
  size: 'sm',
  options: [
    { name: 'Option 1', value: 'Option 1' },
    { name: 'Option 2', value: 'Option 2' }
  ]
}

export const Base = Template.bind({})
Base.args = {
  label: 'Base Radio',
  name: 'Base Radio',
  size: 'base',
  options: [
    { name: 'Option 1', value: 'Option 1' },
    { name: 'Option 2', value: 'Option 2' }
  ]
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large Radio',
  name: 'Large Radio',
  size: 'lg',
  options: [
    { name: 'Option 1', value: 'Option 1' },
    { name: 'Option 2', value: 'Option 2' }
  ]
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  label: 'Large Radio',
  name: 'Large Radio',
  size: 'lg',
  options: [
    {
      name: 'Option 1',
      value: 'Option 1',
      description: 'This is option 1 description'
    },
    {
      name: 'Option 2',
      value: 'Option 2',
      description: 'This is option 1 description'
    }
  ]
}

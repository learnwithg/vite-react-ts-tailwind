import { Input } from '#components/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Core/Input',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Input,
  argTypes: {
    type: {
      type: 'string'
    },
    leading: {
      type: 'string'
    },
    trailing: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Input Label',
  placeholder: 'Input Placeholder'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Input With Error',
  placeholder: 'Input Placeholder',
  error: 'Input value is invalid!'
}

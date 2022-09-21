/* eslint-disable @typescript-eslint/await-thenable */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '#components/core'

export default {
  title: 'Core/Button/Filled',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'PRIMARY FILLED',
  variant: 'filled-primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'SECONDARY FILLED',
  variant: 'filled-secondary'
}

export const Success = Template.bind({})
Success.args = {
  children: 'SUCCESS FILLED',
  variant: 'filled-success'
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'DANGER FILLED',
  variant: 'filled-danger'
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'WARNING FILLED',
  variant: 'filled-warning'
}

export const Info = Template.bind({})
Info.args = {
  children: 'INFO FILLED',
  variant: 'filled-info'
}

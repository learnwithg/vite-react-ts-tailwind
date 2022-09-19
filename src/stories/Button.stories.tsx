/* eslint-disable @typescript-eslint/await-thenable */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  className: ''
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}

export const Test = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}

Small.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await expect(args.onClick).toHaveBeenCalled()
}

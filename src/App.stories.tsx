import { ComponentStory, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

import App from './App'

export default {
  title: 'Components/App/core',

  component: App
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args: any) => <App {...args} />

export const Default = Template.bind({})
Template.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole('button'))
  // expect(args?.onClick).toHaveBeenCalled()
}

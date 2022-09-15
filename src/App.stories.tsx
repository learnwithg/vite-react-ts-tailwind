import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'

import App from './App'

export default {
  title: 'Components/App/core',

  component: App
} as ComponentMeta<typeof App>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof App> = (args: any) => <App {...args} />

export const Default = Template.bind({})
Template.play = ({ _, canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole('button'))
  // expect(args?.onClick).toHaveBeenCalled()
}

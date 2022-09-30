import { Button, Toast } from '#components/core'
import { showToast } from '#components/core/Toast'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Toaster } from 'react-hot-toast'

export default {
  title: 'Core/Toast',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Toast,
  argTypes: {}
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => {
  const { t: _, ...rest } = args

  return (
    <>
      <Toaster position="top-right" />
      <Button
        size="sm"
        variant={`filled-${rest.variant || 'success'}`}
        onClick={() => {
          showToast(rest)
        }}
      >
        Show Toast
      </Button>
    </>
  )
}

export const Success = Template.bind({})
Success.args = {
  message: 'This is a success toast component!',
  variant: 'success'
}

export const Info = Template.bind({})
Info.args = {
  message: 'This is a info toast component!',
  variant: 'info'
}

export const Warning = Template.bind({})
Warning.args = {
  message: 'This is a warning toast component!',
  variant: 'warning'
}

export const Danger = Template.bind({})
Danger.args = {
  message: 'This is a danger toast component!',
  variant: 'danger'
}

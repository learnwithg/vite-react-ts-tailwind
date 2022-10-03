/* eslint-disable no-shadow-restricted-names */
/* eslint-disable @typescript-eslint/await-thenable */
import { AlertDialog, Button } from '#components/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Core/AlertDialog',
  component: AlertDialog,
  argTypes: {},
  args: {
    open: false
  }
} as ComponentMeta<typeof AlertDialog>

const Template: ComponentStory<typeof AlertDialog> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(args.open || false)

  return (
    <>
      <Button
        size="sm"
        variant={
          args.variant === 'confirm'
            ? 'filled-primary'
            : `filled-${args.variant}`
        }
        onClick={() => setIsOpen(true)}
      >
        Show Alert Dialog
      </Button>

      <AlertDialog
        open={isOpen}
        title="Title"
        description="If you enjoy our app, would you mind taking a moment to rate it?"
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        variant={args.variant}
        cancelButtonText="Go Back"
        okButtonText="Proceed"
      />
    </>
  )
}

const Confirm = Template.bind({})
Confirm.args = {
  variant: 'confirm'
}

const Info = Template.bind({})
Info.args = {
  variant: 'info'
}

const Warning = Template.bind({})
Warning.args = {
  variant: 'warning'
}

const Danger = Template.bind({})
Danger.args = {
  variant: 'danger'
}

export { Confirm, Info, Warning, Danger }

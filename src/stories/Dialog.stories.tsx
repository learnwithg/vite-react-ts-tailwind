/* eslint-disable no-shadow-restricted-names */
/* eslint-disable @typescript-eslint/await-thenable */
import { Button, Dialog } from '#components/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Core/Dialog',
  component: Dialog,
  argTypes: {},
  args: {
    closeDialog: () => console.log('closed'),
    open: false
  }
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(args.open || false)

  return (
    <>
      <Button
        variant="filled-primary"
        size="sm"
        onClick={() => setIsOpen(true)}
      >
        Show Dialog
      </Button>
      <Dialog {...args} open={isOpen}>
        <Dialog.Title title={`${args.width?.toUpperCase() as string} Dialog`} />
        <Dialog.Content>
          This is a {args.width as string} dialog content.
        </Dialog.Content>
        <Dialog.Footer className="flex justify-end">
          <Button
            variant="outlined-danger"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            Cancel
          </Button>
          <Button
            variant="filled-primary"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            Proceed
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

const Small = Template.bind({})

Small.args = {
  width: 'sm'
}

const Medium = Template.bind({})
Medium.args = {
  width: 'md'
}

const Large = Template.bind({})
Large.args = {
  width: 'lg'
}

const XLarge = Template.bind({})
XLarge.args = {
  width: 'xl'
}

const XXLarge = Template.bind({})
XXLarge.args = {
  width: 'xxl'
}

export { Small, Medium, Large, XLarge, XXLarge }

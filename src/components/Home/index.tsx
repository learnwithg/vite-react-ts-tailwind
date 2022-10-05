import SplitButton from '#components/core/SplitButton'
import {
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/solid'

import { Tabs } from '#components/core'
import { Button, Checkbox } from '#components/core'
import AlertDialog, { AlertDialogVariant } from '#components/core/AlertDialog'
import Dialog from '#components/core/Dialog'
import { Toggle } from '#components/core/Switch'
import { useDialogState } from '#rtkhooks/useDialogState'
import { useState } from 'react'

const Home = () => {
  const [enabled, setEnabled] = useState<boolean>(true)
  const [dialogIsOpen, closeDialog, setOpenDialog] = useDialogState()
  const [dialogWidth, setDialogWidth] = useState<
    'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  >('sm')

  const openDialog = (width: 'sm' | 'md' | 'lg' | 'xl' | 'xxl') => {
    setDialogWidth(width)
    setOpenDialog()
  }

  const [activeAlertDialogVariant, setActiveAlertDialogVariant] =
    useState<AlertDialogVariant>('confirm')
  const [alertDialogIsOpen, closeAlertDialog, setOpenAlertDialog] =
    useDialogState()

  const openAlertDialog = (variant: AlertDialogVariant) => {
    setActiveAlertDialogVariant(variant)
    setOpenAlertDialog()
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      {/* TABS COMPONENT */}
      <strong>TABS COMPONENT</strong>
      <div className="w-10/12 flex-col gap-4 flex items-center">
        <Tabs />
      </div>
      <div className="w-10/12 flex-col gap-4 flex items-center">
        {/* SWITCH COMPONENT */}
        <strong>SWITCH COMPONENT</strong>

        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-6 flex items-center">
              <Toggle
                enabled={enabled}
                size="base"
                onChangeValue={setEnabled}
              />
            </div>
            <p>base</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-6 flex items-center">
              <Toggle enabled={enabled} size="sm" onChangeValue={setEnabled} />
            </div>
            <p>sm</p>
          </div>
        </div>
        {/* !SWITCH COMPONENT */}

        <span className="w-full h-[1px] bg-gray-300" />

        {/* CHECKBOX COMPONENT */}
        <strong>CHECKBOX COMPONENT</strong>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex">
              <Checkbox label="Checkbox Label" name="checkbox" />
            </div>
            <p>with label</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex">
              <Checkbox
                label="Checkbox Label"
                description="Checkbox Description"
                name="checkbox"
              />
            </div>
            <p>with label and description</p>
          </div>
        </div>
        {/* !CHECKBOX COMPONENT */}

        <span className="w-full h-[1px] bg-gray-300" />

        {/* SPLIT BUTTON COMPONENT */}
        <strong>SPLIT BUTTON COMPONENT</strong>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 flex items-center">
              <SplitButton size="sm" text="Filled Primary">
                <SplitButton.Section sectionTitle="File Options">
                  <SplitButton.Action text="Import File">
                    <CloudArrowDownIcon className="h-6 w-6" />
                  </SplitButton.Action>
                  <SplitButton.Action text="Upload File">
                    <CloudArrowUpIcon className="h-6 w-6" />
                  </SplitButton.Action>
                </SplitButton.Section>

                <SplitButton.Section sectionTitle="Bulk Options">
                  <SplitButton.Action text="Edit" variant="success">
                    <PencilIcon className="h-6 w-6" />
                  </SplitButton.Action>
                  <SplitButton.Action text="Delete" variant="danger">
                    <TrashIcon className="h-6 w-6" />
                  </SplitButton.Action>
                </SplitButton.Section>
              </SplitButton>
            </div>
            <p>FILLED | base</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 flex items-center">
              <SplitButton
                text="Outlined Primary"
                variant="outlined-primary"
                size="sm"
              >
                <SplitButton.Action
                  onClick={() => {
                    console.log('pinindot')
                  }}
                  text="Import File"
                >
                  <CloudArrowDownIcon className="h-6 w-6 mr-2" />
                </SplitButton.Action>
                <SplitButton.Action
                  onClick={() => {
                    console.log('pinindot')
                  }}
                  text="Upload File"
                >
                  <CloudArrowUpIcon className="h-6 w-6 mr-2" />
                </SplitButton.Action>
              </SplitButton>
            </div>
            <p>OUTLINED | base</p>
          </div>
        </div>
        {/* !SPLIT BUTTON COMPONENT */}

        <span className="w-full h-[1px] bg-gray-300" />

        {/* DIALOG COMPONENT */}
        <strong>DIALOG COMPONENT</strong>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button variant="filled-primary" onClick={() => openDialog('sm')}>
                sm
              </Button>
            </div>
            <p>small</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button variant="filled-primary" onClick={() => openDialog('md')}>
                md
              </Button>
            </div>
            <p>medium</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button variant="filled-primary" onClick={() => openDialog('lg')}>
                lg
              </Button>
            </div>
            <p>large</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button variant="filled-primary" onClick={() => openDialog('xl')}>
                xl
              </Button>
            </div>
            <p>x-large</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button
                variant="filled-primary"
                onClick={() => openDialog('xxl')}
              >
                xxl
              </Button>
            </div>
            <p>xx-large</p>
          </div>
        </div>
        {/* !DIALOG COMPONENT */}

        {/* ALERT DIALOG COMPONENT */}
        <strong>DIALOG COMPONENT</strong>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button
                variant="filled-primary"
                onClick={() => openAlertDialog('confirm')}
              >
                Confirm
              </Button>
            </div>
            <p>confirmation</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button
                variant="filled-info"
                onClick={() => openAlertDialog('info')}
              >
                Info
              </Button>
            </div>
            <p>information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button
                variant="filled-warning"
                onClick={() => openAlertDialog('warning')}
              >
                Warning
              </Button>
            </div>
            <p>warning</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-2 h-10 flex items-center">
              <Button
                variant="filled-danger"
                onClick={() => openAlertDialog('danger')}
              >
                Danger
              </Button>
            </div>
            <p>danger</p>
          </div>
        </div>
        {/* !ALERT DIALOG COMPONENT */}
      </div>

      {/* DIALOG COMPONENT USAGE */}
      <Dialog open={dialogIsOpen} closeDialog={closeDialog} width={dialogWidth}>
        <Dialog.Title title="Title" />
        <Dialog.Content>
          If you enjoy our app, would you mind taking a moment to rate it?
          Continue
        </Dialog.Content>
        <Dialog.Footer className="flex justify-end">
          <Button variant="outlined-danger" size="sm" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="filled-primary" size="sm" onClick={closeDialog}>
            Proceed
          </Button>
        </Dialog.Footer>
      </Dialog>

      {/* ALERT DIALOG USAGE */}

      <AlertDialog
        open={alertDialogIsOpen}
        title="Title"
        description="If you enjoy our app, would you mind taking a moment to rate it?"
        onOk={closeAlertDialog}
        onCancel={closeAlertDialog}
        variant={activeAlertDialogVariant}
        cancelButtonText="Go Back"
        okButtonText="Proceed"
      />
    </div>
  )
}

export default Home

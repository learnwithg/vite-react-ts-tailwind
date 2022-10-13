import Callout from '#components/core/Callout'
import { Select } from '#components/core'
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
import { OptionDefaultFormat } from '#components/core/Select'
import { MultiValue } from 'react-select'
import { BadgeStatus } from '#components/core'

export const optionsList: OptionDefaultFormat[] = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' }
]

import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/20/solid'

// import { useAppSelector } from '#rtkhooks/app'

export const tabsList = [
  { name: 'Tab One', value: 'one', icon: UserIcon },
  { name: 'Tab Two', value: 'two', icon: BuildingOfficeIcon },
  { name: 'Tab Three', value: 'three', icon: UsersIcon },
  { name: 'Tab Four', value: 'four', icon: CreditCardIcon }
]

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


  const handleChange = (e: MultiValue<OptionDefaultFormat>) => {
    console.log(e)
  }


  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      {/* TABS COMPONENT */}
      <strong>TABS COMPONENT</strong>
      <div className="w-10/12 flex-col gap-4 flex items-center">
        <div className="shadow ">
          <h1 className="font-barlow font-bold p-4">Header Title</h1>
          <Tabs tabs={tabsList} activeTab="four" />
        </div>
      </div>
      <div className="w-10/12 flex-col gap-4 flex items-center">
        {/* SWITCH COMPONENT */}

        <div className="mt-24 py-10">
          <strong>SWITCH COMPONENT</strong>
          <div className="flex gap-4 justify-center items-center  ">
            <span>
              <Toggle
                enabled={enabled}
                onChangeValue={() => setEnabled(!enabled)}
                size="sm"
              />
              <p>sm</p>
            </span>
            <span>
              <Toggle
                enabled={enabled}
                onChangeValue={() => setEnabled(!enabled)}
                size="base"
              />
              <p>base</p>
            </span>
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

      <p>Combobox | Filled</p>
      <div className=" bg-slate-100 w-full  justify-center px-10 py-2">
        <Select
          label="Label"
          options={optionsList}
          onChange={(e) => console.log(e)}
          error="This is an error"
          variant="filled"
        />
      </div>

      <p>Combobox | Outlined</p>
      <div className=" bg-slate-100 w-full   justify-center px-10 py-2">
        <Select
          isMulti
          label="Label"
          options={optionsList}
          onChange={handleChange}
          error="This is an error"
          variant="outlined"
          // components={{
          //   MultiValue: (props) => {
          //     return (
          //       <components.MultiValue {...props}>
          //         asdasdasds {props?.data.value}
          //       </components.MultiValue>
          //     )
          //   }
          // }}
        />
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

      <span className="w-full h-[1px] bg-gray-300" />

      {/* CALLOUT COMPONENT */}
      <strong>CALLOUT COMPONENT</strong>
      <div className="bg-gray-200 w-full flex items-center justify-center p-5">
        <Callout
          title="This is a test callout component"
          info="Upload your store’s logo, change colors and fonts, and more."
          buttonLabel="Get Now"
        />
      </div>
      {/* BADGE X STATUS COMPONENT */}
      <span className="w-full h-[1px] bg-gray-300" />
      <strong>BADGE X STATUS COMPONENT</strong>
      <div className="w-full flex flex-col gap-4 items-center justify-center p-5">
        {/* Set props to withIcon={true} if you want the variant with ICON instead of BULLET */}
        {/* Set props to labelOnly to remove the icon */}
        {/* Label props is optional */}

        <p>Badge label only | base</p>
        <div className="flex gap-2">
          <BadgeStatus
            labelOnly
            label="Neutral"
            variant="neutral"
            size="base"
          />
          <BadgeStatus
            labelOnly
            label="Success"
            variant="success"
            size="base"
          />
          <BadgeStatus
            labelOnly
            label="Information"
            variant="information"
            size="base"
          />
          <BadgeStatus
            labelOnly
            label="Warning"
            variant="warning"
            size="base"
          />
          <BadgeStatus labelOnly label="Danger" variant="danger" size="base" />
        </div>
        <p>Badge label only | sm</p>
        <div className="flex gap-2">
          <BadgeStatus labelOnly label="Neutral" variant="neutral" size="sm" />
          <BadgeStatus labelOnly label="Success" variant="success" size="sm" />
          <BadgeStatus
            labelOnly
            label="Information"
            variant="information"
            size="sm"
          />
          <BadgeStatus labelOnly label="Warning" variant="warning" size="sm" />
          <BadgeStatus labelOnly label="Danger" variant="danger" size="base" />
        </div>
        <p>Badge with Label & Icon | base</p>
        <div className="flex gap-2">
          <BadgeStatus
            label="Neutral"
            variant="neutral"
            withIcon={true}
            size="base"
          />
          <BadgeStatus
            label="Success"
            variant="success"
            withIcon={true}
            size="base"
          />
          <BadgeStatus
            label="Information"
            variant="information"
            withIcon={true}
            size="base"
          />
          <BadgeStatus
            label="Warning"
            variant="warning"
            withIcon={true}
            size="base"
          />
          <BadgeStatus
            label="Danger"
            variant="danger"
            withIcon={true}
            size="base"
          />
        </div>
        <p>Badge with Label & Icon | sm</p>
        <div className="flex gap-2">
          <BadgeStatus
            label="Neutral"
            variant="neutral"
            withIcon={true}
            size="sm"
          />
          <BadgeStatus
            label="Success"
            variant="success"
            withIcon={true}
            size="sm"
          />
          <BadgeStatus
            label="Information"
            variant="information"
            withIcon={true}
            size="sm"
          />
          <BadgeStatus
            label="Warning"
            variant="warning"
            withIcon={true}
            size="sm"
          />
          <BadgeStatus
            label="Danger"
            variant="danger"
            withIcon={true}
            size="sm"
          />
        </div>
        <p>Badge neutral | sm & base </p>
        <div className="flex gap-2">
          <BadgeStatus
            label="Badge Label"
            variant="neutral"
            withIcon={true}
            size="sm"
          />
          <BadgeStatus
            label="Badge Label"
            variant="neutral"
            withIcon={true}
            size="base"
          />
        </div>
        <p>Badge without label | sm</p>
        <div className="flex gap-2">
          <BadgeStatus variant="success" withIcon={true} size="sm" />
          <BadgeStatus variant="information" withIcon={true} size="sm" />
          <BadgeStatus variant="warning" withIcon={true} size="sm" />
          <BadgeStatus variant="danger" withIcon={true} size="sm" />
        </div>
      </div>
    </div>
  )
}

export default Home

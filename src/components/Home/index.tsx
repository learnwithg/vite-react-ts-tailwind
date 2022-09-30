import SplitButton from '#components/core/SplitButton'
import {
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/solid'

import { Button, Checkbox } from '#components/core'
import { Toggle } from '#components/core'
import { useState } from 'react'
import { showToast } from '#components/core/Toast'

const Home = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6 my-10">
      <div className=" gap-2 flex">
        <Button
          onClick={() => {
            showToast({ message: 'This is a success toast!' })
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            showToast({ message: 'This is a info toast!', variant: 'info' })
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            showToast({
              message: 'This is a danger toast!',
              variant: 'danger'
            })
          }}
        >
          Danger
        </Button>
        <Button
          onClick={() => {
            showToast({
              message: 'This is a warning toast!',
              variant: 'warning'
            })
          }}
        >
          Warning
        </Button>
      </div>

      <p>SWITCH | base</p>
      <div className="mb-2">
        <Toggle
          enabled={enabled}
          size="base"
          onChangeValue={(e) => {
            setEnabled(e)
            showToast({ message: 'Successasdasdad asmlkfnaslf' })
          }}
        />
      </div>

      <p>SWITCH | sm</p>
      <div className="mb-2"></div>

      <p>Radio</p>
      <div className="mb-2">
        <Checkbox label="Label" description="asdasds" name="isCoasdas" />
      </div>

      <p>--------------------------------</p>
      <h2>SPLIT BUTTON</h2>

      <p>FILLED | base</p>
      <div className="flex gap-4">
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

      <p>OUTLINED | base</p>
      <div className="flex gap-4">
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
    </div>
  )
}

export default Home

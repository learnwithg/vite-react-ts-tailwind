import SplitButton from '#components/core/SplitButton'
import {
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/solid'

import { Checkbox } from '#components/core'
import { Toggle } from '#components/core'
import { useState } from 'react'

const Home = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      <p>SWITCH | base</p>
      <div className="mb-2">
        <Toggle enabled={enabled} size="base" onChangeValue={setEnabled} />
      </div>

      <p>SWITCH | sm</p>
      <div className="mb-2">
        <Toggle
          size="sm"
          onChangeValue={() => console.log('Small switch toggled')}
        />
      </div>

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

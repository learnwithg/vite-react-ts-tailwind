import { Button } from '#components/core'
import SplitButton from '#components/core/SplitButton'
import { 
  CloudArrowDownIcon, 
  CloudArrowUpIcon, 
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      <p>FILLED | base</p>
      <div className="flex gap-4">
        <Button>Filled Primary</Button>
        <Button variant="filled-secondary">Filled Secondary</Button>
        <Button variant="filled-success">Filled Success</Button>
        <Button variant="filled-warning">Filled Success</Button>
        <Button variant="filled-danger">Filled Success</Button>
        <Button variant="filled-info">Filled Success</Button>
      </div>

      <p>FILLED | sm</p>
      <div className="flex gap-4">
        <Button size="sm">Filled Primary</Button>
        <Button size="sm" variant="filled-secondary">
          Filled Secondary
        </Button>
        <Button size="sm" variant="filled-success">
          Filled Success
        </Button>
        <Button size="sm" variant="filled-warning">
          Filled Success
        </Button>
        <Button size="sm" variant="filled-danger">
          Filled Success
        </Button>
        <Button size="sm" variant="filled-info">
          Filled Success
        </Button>
      </div>

      <p>OUTLINED | base</p>
      <div className="flex gap-4">
        <Button variant="outlined-primary">Outlined Primary</Button>
        <Button variant="outlined-secondary">Outlined Secondary</Button>
        <Button variant="outlined-success">Outlined Success</Button>
        <Button variant="outlined-warning">Outlined Success</Button>
        <Button variant="outlined-danger">Outlined Success</Button>
        <Button variant="outlined-info">Outlined Success</Button>
      </div>

      <p>OUTLINED | sm</p>
      <div className="flex gap-4">
        <Button size="sm" variant="outlined-primary">
          Outlined Primary
        </Button>
        <Button size="sm" variant="outlined-secondary">
          Outlined Secondary
        </Button>
        <Button size="sm" variant="outlined-warning">
          Outlined Success
        </Button>
        <Button size="sm" variant="outlined-danger">
          Outlined Success
        </Button>
        <Button size="sm" variant="outlined-info">
          Outlined Success
        </Button>
      </div>

      <p>--------------------------------</p>
      <h2>SPLIT BUTTON</h2>

      <p>FILLED | base</p>
      <div className="flex gap-4">
        <SplitButton size="sm" text="Filled Primary">
          <SplitButton.Section sectionTitle="File Options">
            <SplitButton.Action text="Import File">
              <CloudArrowDownIcon className="h-6 w-6"/>
            </SplitButton.Action>
            <SplitButton.Action text="Upload File">
              <CloudArrowUpIcon className="h-6 w-6"/>
            </SplitButton.Action>
          </SplitButton.Section>

          <SplitButton.Section sectionTitle="Bulk Options">
            <SplitButton.Action text="Edit" variant="success">
              <PencilIcon className="h-6 w-6"/>
            </SplitButton.Action>
            <SplitButton.Action text="Delete" variant="danger">
              <TrashIcon className="h-6 w-6"/>
            </SplitButton.Action>
          </SplitButton.Section>
        </SplitButton>
      </div>

      <p>OUTLINED | base</p>
      <div className="flex gap-4">
        <SplitButton text="Outlined Primary" variant="outlined-primary" size="sm">
          <SplitButton.Action onClick={() => {console.log('pinindot')}} text="Import File">
            <CloudArrowDownIcon className="h-6 w-6 mr-2"/>
          </SplitButton.Action>
          <SplitButton.Action onClick={() => {console.log('pinindot')}} text="Upload File">
            <CloudArrowUpIcon className="h-6 w-6 mr-2"/>
          </SplitButton.Action>
        </SplitButton>
      </div>
    </div>
  )
}

export default Home

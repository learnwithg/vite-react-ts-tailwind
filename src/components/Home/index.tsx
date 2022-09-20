import { Button } from '#components/core'

const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      <p>FILLED | base</p>
      <div className="flex gap-4">
        <Button>Filled Primary</Button>
        <Button variant="filled-secondary">Filled Secondary</Button>
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
        <Button variant="outlined-primary">Filled Primary</Button>
        <Button variant="outlined-secondary">Filled Secondary</Button>
        <Button variant="outlined-warning">Filled Success</Button>
        <Button variant="outlined-danger">Filled Success</Button>
        <Button variant="outlined-info">Filled Success</Button>
      </div>

      <p>OUTLINED | sm</p>
      <div className="flex gap-4">
        <Button size="sm" variant="outlined-primary">
          Filled Primary
        </Button>
        <Button size="sm" variant="outlined-secondary">
          Filled Secondary
        </Button>
        <Button size="sm" variant="outlined-warning">
          Filled Success
        </Button>
        <Button size="sm" variant="outlined-danger">
          Filled Success
        </Button>
        <Button size="sm" variant="outlined-info">
          Filled Success
        </Button>
      </div>
    </div>
  )
}

export default Home

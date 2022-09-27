import { Input } from '#components/core'
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

      <p>INPUT</p>
      <div className="mb-2">
        <Input
          error="asdadas"
          label="Email Address"
          onChange={() => console.log('Small switch toggled')}
        />
      </div>
    </div>
  )
}

export default Home

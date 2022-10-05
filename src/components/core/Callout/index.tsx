import { FCC } from '#utils/FCC'
import { Button } from '#components/core'

interface CalloutProps {
  title: string
  info: string
  buttonLabel: string
}

const Callout: FCC<CalloutProps> = ({ title, info, buttonLabel }) => {
  return (
    <div className="bg-main-white p-5 rounded-md flex flex-col gap-2">
      <h1 className="font-barlow font-bold text-xl text-main-heading">
        {title}
      </h1>
      <p className="text-sm text-main-body">{info}</p>
      <div className="w-full mt-4">
        <Button variant="outlined-primary">{buttonLabel}</Button>
      </div>
    </div>
  )
}

export default Callout

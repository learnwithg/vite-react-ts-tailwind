import { FCC } from '#utils/FCC'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  asdasd?: string
}

export const Button: FCC<ButtonProps> = ({ ...rest }) => {
  return <button {...rest}>Button</button>
}

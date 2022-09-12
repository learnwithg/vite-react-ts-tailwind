import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return <button onClick={() => loginWithRedirect()}>Log In</button>
}

export default Login

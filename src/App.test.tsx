import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders hello message', () => {
  render(<App />)
  expect(screen.getByText('React Vites')).toBeInTheDocument()
})
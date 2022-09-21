import { Button } from '#components/core/Button'
import { render, screen } from '@testing-library/react'

describe('Accordion test', () => {
  test('should show title all the time', () => {
    render(<Button role="button">Button</Button>)

    expect(screen.getByText('Button')).toBeDefined()
  })
})

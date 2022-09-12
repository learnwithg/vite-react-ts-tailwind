import { create } from '@storybook/theming'
import logoUrl from '../public/storybook-logo.png'

export default create({
  base: 'light',
  brandImage: logoUrl,
  colorPrimary: '#FF7200',
  colorSecondary: '#FF7200',
  barSelectedColor: '#FF7200'
})

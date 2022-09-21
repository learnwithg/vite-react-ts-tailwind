import { addons, types } from '@storybook/addons'
import appTheme from './appTheme.cjs'
import React from 'react'

addons.setConfig({
  theme: appTheme,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
})

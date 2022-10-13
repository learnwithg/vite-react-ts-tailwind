import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BadgeStatus } from '#components/core'

export default {
  title: 'Core/Badge-Status/Label',
  component: BadgeStatus,
  argTypes: {}
} as ComponentMeta<typeof BadgeStatus>

const Template: ComponentStory<typeof BadgeStatus> = (args) => (
  <BadgeStatus {...args} />
)

export const NeutralBadgeWithLabelOnly = Template.bind({})
NeutralBadgeWithLabelOnly.args = {
  labelOnly: true,
  label: 'Neutral',
  variant: 'neutral',
  size: 'base' || 'sm'
}

export const SuccessBadgeWithLabelOnly = Template.bind({})
SuccessBadgeWithLabelOnly.args = {
  labelOnly: true,
  label: 'Success',
  variant: 'success',
  size: 'base' || 'sm'
}

export const InformationBadgeWithLabelOnly = Template.bind({})
InformationBadgeWithLabelOnly.args = {
  labelOnly: true,
  label: 'Information',
  variant: 'information',
  size: 'base' || 'sm'
}

export const WarningBadgeWithLabelOnly = Template.bind({})
WarningBadgeWithLabelOnly.args = {
  labelOnly: true,
  label: 'Warning',
  variant: 'warning',
  size: 'base' || 'sm'
}

export const DangerBadgeWithLabelOnly = Template.bind({})
DangerBadgeWithLabelOnly.args = {
  labelOnly: true,
  label: 'Danger',
  variant: 'danger',
  size: 'base' || 'sm'
}

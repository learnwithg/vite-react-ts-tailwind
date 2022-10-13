import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BadgeStatus } from '#components/core'

export default {
  title: 'Core/Badge-Status/Icon',
  component: BadgeStatus,
  argTypes: {}
} as ComponentMeta<typeof BadgeStatus>

const Template: ComponentStory<typeof BadgeStatus> = (args) => (
  <BadgeStatus {...args} />
)

export const NeutralBadgeWithIcon = Template.bind({})
NeutralBadgeWithIcon.args = {
  label: 'Neutral',
  variant: 'neutral',
  withIcon: true,
  size: 'base' || 'sm'
}

export const SuccessBadgeWithIcon = Template.bind({})
NeutralBadgeWithIcon.args = {
  label: 'Success',
  variant: 'success',
  withIcon: true,
  size: 'base' || 'sm'
}

export const InformationBadgeWithIcon = Template.bind({})
InformationBadgeWithIcon.args = {
  label: 'Information',
  variant: 'information',
  withIcon: true,
  size: 'base' || 'sm'
}

export const WarningBadgeWithIcon = Template.bind({})
WarningBadgeWithIcon.args = {
  label: 'Warning',
  variant: 'warning',
  withIcon: true,
  size: 'base' || 'sm'
}

export const DangerBadgeWithIcon = Template.bind({})
DangerBadgeWithIcon.args = {
  label: 'Danger',
  variant: 'danger',
  withIcon: true,
  size: 'base' || 'sm'
}

export const BadgeWithBulletIcon = Template.bind({})
BadgeWithBulletIcon.args = {
  label: 'Badge Label',
  variant: 'neutral',
  withIcon: false,
  size: 'base' || 'sm'
}

export const SuccessBadgeWithIconOnly = Template.bind({})
SuccessBadgeWithIconOnly.args = {
  variant: 'success',
  withIcon: true,
  size: 'base' || 'sm'
}

export const InformationBadgeWithIconOnly = Template.bind({})
InformationBadgeWithIconOnly.args = {
  variant: 'information',
  withIcon: true,
  size: 'base' || 'sm'
}

export const WarningBadgeWithIconOnly = Template.bind({})
WarningBadgeWithIconOnly.args = {
  variant: 'warning',
  withIcon: true,
  size: 'base' || 'sm'
}

export const DangerBadgeWithIconOnly = Template.bind({})
DangerBadgeWithIconOnly.args = {
  variant: 'danger',
  withIcon: true,
  size: 'base' || 'sm'
}

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from '#components/core'
import { tabsList } from '#components/Home'

export default {
  title: 'Core/Tabs',
  component: Tabs,
  argTypes: {}
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Tab = Template.bind({})
Tab.args = {
  tabs: tabsList,
  activeTab: 'one',
  onChange: () => console.log('Test')
}

import React from 'react'
import Button from '../../lib/molecules/Button'

export default {
  title: '2 - Molecules/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'primary',
  size: 'md',
  children: 'Button',
}

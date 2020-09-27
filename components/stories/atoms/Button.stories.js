import React from 'react'
import Button from '../../lib/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'primary',
  size: 'md',
  children: 'Button',
}

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

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  size: 'md',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  size: 'md',
  children: 'Button',
}

export const Medium = Template.bind({})
Medium.args = {
  type: 'primary',
  size: 'md',
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  type: 'primary',
  size: 'sm',
  children: 'Button',
}

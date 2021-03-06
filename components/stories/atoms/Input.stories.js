import React from 'react'
import Input from '../../lib/atoms/Input'

export default {
  title: '1 - Atoms/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  placeholder: 'Tweet your reply',
  onChange: () => {},
}

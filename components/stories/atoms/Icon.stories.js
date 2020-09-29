import React from 'react'
import Icon from '../../lib/atoms/Icon'

export default {
  title: '1 - Atoms/Icon',
  component: Icon,
}

const Template = (props) => <Icon {...props} />

export const Default = Template.bind({})
Default.args = {
  type: 'public',
  size: 'md',
}

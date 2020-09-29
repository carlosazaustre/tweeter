import React from 'react'
import Heading from '../../lib/atoms/Heading'

export default {
  title: '1 - Atoms/Heading',
  component: Heading,
}

const Template = (props) => <Heading {...props} />

export const Default = Template.bind({})
Default.args = {
  children: 'Heading',
}

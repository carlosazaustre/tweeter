import React from 'react'
import Heading from '../../lib/atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

const Template = (props) => <Heading {...props} />

export const Default = Template.bind({})
Default.args = {
  children: 'Heading',
}

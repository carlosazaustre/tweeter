import React from 'react'
import Picture from '../../lib/atoms/Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
}

const Template = (args) => <Picture {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://placeimg.com/400/400/any',
  width: 200,
}

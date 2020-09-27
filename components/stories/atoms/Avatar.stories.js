import React from 'react'
import Avatar from '../../lib/atoms/Avatar'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
}

const Template = (props) => <Avatar {...props} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://placeimg.com/304/304/people',
  size: 'lg',
}

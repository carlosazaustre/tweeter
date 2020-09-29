import React from 'react'
import Dropdown from '../../lib/organisms/Dropdown'

export default {
  title: '3 - Organisms/Dropdown',
  component: Dropdown,
}

export const Default = () => (
  <Dropdown avatar="https://placeimg.com/304/304/people" text="Xanthe Neal">
    <Dropdown.List>
      <Dropdown.Card text="My Profile" icon="account" />
      <Dropdown.Card text="Group Chat" icon="contactGroup" />
      <Dropdown.Card text="Settings" icon="account" />
      <Dropdown.Card text="Logout" icon="logout" />
    </Dropdown.List>
  </Dropdown>
)

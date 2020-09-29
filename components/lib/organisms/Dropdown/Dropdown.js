import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../../atoms/Icon'
import Avatar from '../../atoms/Avatar'
import Heading from '../../atoms/Heading'
import styles from './Dropdown.module.css'

const Dropdown = ({ className, avatar, text, children }) => {
  const [toggle, setToggle] = useState(false)

  const handleToggleOpen = () => setToggle(!toggle)

  return (
    <div
      className={classNames(className, styles.dropdown)}
      onClick={handleToggleOpen}
    >
      <div className={styles['dropdown-header']}>
        <Avatar src={avatar} size="sm" />
        <Heading size="sm">{text}</Heading>
        <Icon type="angleDown" size="lg" />
      </div>
      {toggle && children}
    </div>
  )
}

const DropdownList = ({ children }) => (
  <div className={styles['dropdown-list']}>{children}</div>
)

const DropdownCard = ({ text, icon }) => (
  <div className={classNames(styles['dropdown-card'])}>
    <Icon type={icon} size="lg" />
    <span>{text}</span>
  </div>
)

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

DropdownList.propTypes = {
  children: PropTypes.node,
}

DropdownCard.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  isLastItem: PropTypes.bool,
}

Dropdown.List = DropdownList
Dropdown.Card = DropdownCard
export default Dropdown

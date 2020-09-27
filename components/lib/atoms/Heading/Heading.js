import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Heading.module.css'

const Heading = ({ children, size, color }) => (
  <header
    className={classNames(styles.header, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    })}
  >
    {children}
  </header>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
}

Heading.defaultProps = {
  color: 'primary',
  size: 'xl',
}

export default Heading

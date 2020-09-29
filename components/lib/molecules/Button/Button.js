import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Button.module.css'

const Button = ({ type, size, children, onClick }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles[`size-${size}`]]: size,
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'primary',
  size: 'md',
  onClick: () => {},
}

export default Button

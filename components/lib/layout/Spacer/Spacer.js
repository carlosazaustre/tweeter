import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Horizontal from './Horizontal'
import Vertical from './Vertical'
import styles from './Spacer.module.css'
import { getSize } from './helpers'

const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      width: getSize(size),
      height: getSize(size),
    }}
  ></div>
)

Spacer.Vertical = Vertical
Spacer.Horizontal = Horizontal

Spacer.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
}

Spacer.defaultProps = {
  size: 'none',
  isVisible: false,
}

export default Spacer

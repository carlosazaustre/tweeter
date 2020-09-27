import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Picture from '../Picture'
import styles from './Avatar.module.css'
import { mapSize } from './helpers'

const Avatar = ({ src, size }) => (
  <div className={classNames(styles.avatar)}>
    <Picture
      src={src}
      width={mapSize(size)}
      height={mapSize(size)}
      radius="xs"
    />
  </div>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

Avatar.defaultProps = {
  size: 'sm',
}

export default Avatar

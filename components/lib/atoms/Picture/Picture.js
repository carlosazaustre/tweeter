import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Picture.module.css'

const Picture = ({ src, alt, width, height, radius }) => (
  <picture
    className={classNames(styles.picture, {
      [styles[`radius-${radius}`]]: radius,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} alt={alt} />
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOf(['none', 'xs', 'sm', 'lg', 'full']),
  alt: PropTypes.string,
}

Picture.defaultProps = {
  height: 'auto',
  radius: 'none',
}

export default Picture

/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-07 10:28:26
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-07 17:34:44
 */
import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames('taylor-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon
/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-08 16:51:03
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-10 11:58:39
 */
import React, { ReactElement } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import { faDivide } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon/icon'


export enum InputSize {
  Large = 'lg',
  Small = 'sm'
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  icon?: IconProp;
  className?: string;
  size?: InputSize;
  /**添加前缀*/
  prepend?: string | ReactElement;
  /**添加后缀*/
  append?: string | ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    className,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props

  const classes = classNames('taylor-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={classes} style={style}>
      {prepend && <div className="taylor-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} /></div>}
      <input
        className="taylor-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="taylor-input-group-append">{append}</div>}
    </div>
  )
  
}

export default Input

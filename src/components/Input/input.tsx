/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-08 16:51:03
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-08 17:43:18
 */
import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'


export enum InputSize {
  Large = 'lg',
  Small = 'sm'
}

export enum InputType {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Website = 'website'
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  icon?: IconProp;
  className?: string;
  size?: InputSize;
  type?: InputType;
}


const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    size,
    type,
    ...resetProps
  } = props

  const classes = classNames('input', className, {
    [`input-${type}`]: type,
    [`input-${size}`]: size,
  })

  if (type === InputType.Website) {
    return (
      <div className='input-website'>
        <input type="text" className={classes} {...resetProps} />
        <span>.com</span>
      </div>
    )
  }else if (type === InputType.Email) {
    return (
      <div className='input-website'>
        <input type="text" className={classes} {...resetProps} />
        <span>@</span>
        <input type="text" className='email-text' />
      </div>
    )
  } else {
    return(
      <input type={type} className={classes} {...resetProps} />
    )
  }
  
}

export default Input

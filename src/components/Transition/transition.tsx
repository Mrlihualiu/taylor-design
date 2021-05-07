/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-07 14:02:46
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-07 17:31:40
 */
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

interface ITransitionProps {
  animation?: AnimationName,
  wrapper? : boolean,
}
type TransitionProps<T> = T & ITransitionProps

const Transition: React.FC<TransitionProps<CSSTransitionProps>> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...resetProps
  } = props

  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation }
      {...resetProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
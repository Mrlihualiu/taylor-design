/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-10 15:06:13
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-10 15:12:51
 */
import { RefObject, useEffect } from 'react'
function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
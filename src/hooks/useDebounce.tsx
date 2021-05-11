/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-10 14:55:17
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-10 14:59:15
 */
import { useState, useEffect } from 'react'

function useDebounce(value: any, delay = 300) {
  const [ debouncedValue, setDebouncedValue ] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
}

export default useDebounce
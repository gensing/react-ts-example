import React from 'react'

export function Maybe({
  isLogin,
  children,
}: {
  isLogin: boolean
  children: any
}) {
  return <>{isLogin ? children : null}</>
}

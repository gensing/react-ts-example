import React from 'react'
import ReLink from '../atoms/StyledLink'

export default function LoginBar() {
  return (
    <>
      <ReLink to={'/signIn'}>로그인</ReLink>
      <ReLink to={'/member/insert'}>회원가입</ReLink>
    </>
  )
}

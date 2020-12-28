import React from 'react'
import ReButton from '../atoms/StyledButton'
import ReLink from '../atoms/StyledLink'

export default function LogoutBar(props: {
  username: string | undefined
  sessionOut: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <>
      <ReLink to={'/member/detail'}>{props.username}</ReLink>
      <ReButton onClick={props.sessionOut}>로그아웃</ReButton>
    </>
  )
}

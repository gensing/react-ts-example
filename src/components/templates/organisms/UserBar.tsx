import React from 'react'
import ReButton from '../atoms/StyledButton'
import ReLink from '../atoms/StyledLink'
import { Maybe } from '../../functions/Maybe'

const UserBar = (props: {
  isLogin: boolean
  username: string | undefined
  sessionOut: React.MouseEventHandler<HTMLButtonElement>
}) => (
  <div>
    <Maybe isLogin={!props.isLogin}>
      <ReLink to={'/signIn'}>로그인</ReLink>
      <ReLink to={'/member/insert'}>회원가입</ReLink>
    </Maybe>
    <Maybe isLogin={props.isLogin}>
      <ReLink to={'/member/detail'}>{props.username}</ReLink>
      <ReButton onClick={props.sessionOut}>로그아웃</ReButton>
    </Maybe>
  </div>
)

export default UserBar

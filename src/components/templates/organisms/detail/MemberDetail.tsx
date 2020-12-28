import React from 'react'
import { Maybe } from 'components/functions/Maybe'
import ReButton from 'components/templates/atoms/StyledButton'
import ReLink from 'components/templates/atoms/StyledLink'

export default (props: {
  isLogin: boolean
  member?: { email: string; name: string }
  deleteFun: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const { member, isLogin, deleteFun } = props

  return (
    <div>
      {member?.email}
      {member?.name}
      <Maybe isLogin={isLogin}>
        <ReLink to="/member/update">update</ReLink>
        <ReButton type="button" onClick={deleteFun}>
          delete
        </ReButton>
      </Maybe>
    </div>
  )
}

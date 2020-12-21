import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useMemberDetail } from '../../hooks/memberHooks'
import { Maybe } from '../../components/functions/Maybe'
import { useSession } from '../../hooks/sessionHooks'
import ReButton from 'components/templates/atoms/ReButton'

export default (): JSX.Element => {
  const session = useSession()
  if (session.data === null) return <Redirect to="/error/403" />

  const { onClick, member } = useMemberDetail(session.data.id)

  return (
    <div>
      {member.detail.data?.name}
      {member.detail.data?.email}
      <Maybe isLogin={session.isLogin}>
        <Link to="/member/update">update</Link>
        <ReButton type="button" onClick={onClick}>
          delete
        </ReButton>
      </Maybe>
    </div>
  )
}

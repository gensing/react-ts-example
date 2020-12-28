import React from 'react'
import { useParams } from 'react-router-dom'
import { useMember } from 'modules/member/hook'
import { useSession } from 'modules/session/hook'
import MemberDetail from 'components/templates/organisms/detail/MemberDetail'
import Layout from './Layout'

export default () => {
  let { id } = useParams<{ id: string }>()
  const { session } = useSession()
  const { member, getMember, deleteMember } = useMember()

  React.useEffect(() => {
    getMember(+id)
  }, [id, getMember])

  return (
    <Layout>
      <MemberDetail
        deleteFun={() => deleteMember}
        isLogin={session.isLogin}
        member={member.detail.data}
      />
    </Layout>
  )
}

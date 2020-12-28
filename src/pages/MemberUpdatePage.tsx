import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useMember } from 'modules/member/hook'
import MemberUpdateForm from 'components/templates/organisms/forms/MemberUpdateForm'
import Layout from './Layout'

export default () => {
  let { id } = useParams<{ id: string }>()
  let history = useHistory()
  const { member, updateMember } = useMember()

  React.useEffect(() => {
    if (member.update.state === 'success') {
      history.push('/')
    }
  }, [history, member.update.state])

  return (
    <Layout>
      <MemberUpdateForm onSubmit={(form) => updateMember(+id, form)} />
    </Layout>
  )
}

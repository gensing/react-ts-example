import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMember } from 'modules/member/hook'
import MemberForm from 'components/templates/organisms/forms/MemberForm'
import Layout from './Layout'

export default () => {
  const { member, insertMember } = useMember()
  let history = useHistory()

  React.useEffect(() => {
    if (member.insert.state === 'success') {
      history.push('/')
    }
  }, [history, member.insert.state])

  return (
    <Layout>
      <MemberForm onSubmit={insertMember} />
    </Layout>
  )
}

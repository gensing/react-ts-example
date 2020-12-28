import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSession } from 'modules/session/hook'
import ReDiv from 'components/templates/atoms/StyledDiv'
import SignInForm from 'components/templates/organisms/forms/SignInForm'
import Layout from './Layout'

export default () => {
  const { session, loginDispatch } = useSession()
  let history = useHistory()
  React.useEffect(() => {
    if (session.isLogin === true) {
      history.push('/')
    }
  }, [history, session.isLogin])

  return (
    <Layout>
      <ReDiv>
        <SignInForm onSubmit={loginDispatch} />
      </ReDiv>
    </Layout>
  )
}

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/HomePage'
import SignIn from './pages/MemberConfirmPage'
import MemberInsert from './pages/MemberInsertPage'
import MemberUpdate from './pages/MemberUpdatePage'
import MemberDetail from './pages/MemberDetailPage'
import NotFound from './pages/ErrorPage'

const App: React.FC = () => {
  // session 초기화 코드 추가 필요
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/member/insert" component={MemberInsert} />
      <Route path="/member/update/:id" component={MemberUpdate} />
      <Route path="/member/detail/:id" component={MemberDetail} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App

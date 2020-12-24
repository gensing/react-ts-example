import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/MemberConfirmPage'
import MemberInsert from './pages/MemberInsertPage'
import MemberUpdate from './pages/MemberUpdatePage'
import MemberDetail from './pages/MemberDetailPage'
import Denied from './pages/403'
import NotFound from './pages/404'

import { useSession } from './hooks/useSession'
import Footer from 'components/templates/organisms/Footer'
import Header from 'components/templates/organisms/Header'
import NavBar from 'components/templates/organisms/NavBar'
import UserBar from 'components/templates/organisms/UserBar'

const navList = [{ to: '/', linkName: 'home' }]

const App: React.FC = () => {
  const {
    session: { isLogin, data },
    logoutAction,
  } = useSession()

  return (
    <>
      <Header>
        <UserBar
          isLogin={isLogin}
          username={data?.username}
          sessionOut={logoutAction}
        />
        <NavBar navList={navList} />
      </Header>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/member/insert" component={MemberInsert} />
          <Route path="/member/update" component={MemberUpdate} />
          <Route path="/member/detail" component={MemberDetail} />
          <Route path="/error/403" component={Denied} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App

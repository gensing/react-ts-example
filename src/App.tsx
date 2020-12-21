import React, { useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import Home from './pages/main/Home'
import SignIn from './pages/session/SignInPage'
import MemberInsert from './pages/member/MemberInsertPage'
import MemberUpdate from './pages/member/MemberUpdatePage'
import MemberDetail from './pages/member/MemberDetailPage'
import Denied from './pages/error/403'
import NotFound from './pages/error/404'

import { useLogout, useSession } from './hooks/sessionHooks'
import Ul from './components/templates/molecules/Ul'
import { Maybe } from './components/functions/Maybe'
import ReLink from 'components/templates/atoms/ReLink'
import { GlobalStyle } from 'styles/global-style'

const navList = [{ to: '/', linkName: 'home' }]

const App: React.FC = () => {
  const { isLogin, data } = useSession()
  const { logoutAction } = useLogout()

  useEffect(() => {}, [])

  return (
    <>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <header>
          <Maybe isLogin={!isLogin}>
            <ReLink to={'/signIn'}>로그인</ReLink>
            <ReLink to={'/member/insert'}>회원가입</ReLink>
          </Maybe>
          <Maybe isLogin={isLogin}>
            <Link to={'/member/detail'}>{data?.username}</Link>
            <button onClick={logoutAction}>로그아웃</button>
          </Maybe>
        </header>
        <nav>
          <Ul list={navList} />
        </nav>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/member/insert" component={MemberInsert} />
          <Route path="/member/update" component={MemberUpdate} />
          <Route path="/member/detail" component={MemberDetail} />
          <Route path="/error/403" component={Denied} />
          <Route component={NotFound} />
        </Switch>
        <footer>footer</footer>
      </ThemeProvider>
    </>
  )
}

export default App

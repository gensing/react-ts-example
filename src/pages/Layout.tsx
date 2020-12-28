import React from 'react'

import { useSession } from 'modules/session/hook'
import Footer from 'components/templates/organisms/global/Footer'
import Header from 'components/templates/organisms/global/Header'
import NavBar from 'components/templates/organisms/global/NavBar'
import LoginBar from 'components/templates/molecules/LoginBar'
import LogoutBar from 'components/templates/molecules/LogoutBar'

const navList = [{ to: '/', linkName: 'home' }]

const Layout: React.FC = (props) => {
  const {
    session: { isLogin, data },
    logoutDispatch: logoutAction,
  } = useSession()

  return (
    <>
      <Header>
        {isLogin ? (
          <LogoutBar username={data?.username} sessionOut={logoutAction} />
        ) : (
          <LoginBar />
        )}
        <NavBar navList={navList} />
      </Header>
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout

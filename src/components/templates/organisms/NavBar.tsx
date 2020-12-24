import React from 'react'
import ReLink from '../atoms/StyledLink'
import Ul from '../atoms/StyledUl'

const NavBar = (props: { navList: any[] }) => (
  <nav>
    <Ul>
      {props.navList.map((list) => (
        <li>
          <ReLink {...props} to={list.to}>
            {list.linkName}
          </ReLink>
        </li>
      ))}
    </Ul>
  </nav>
)

export default NavBar

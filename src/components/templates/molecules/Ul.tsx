import React from 'react'
import styled from 'styled-components'
import ReLink from '../atoms/ReLink'

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

function Pagenation(props: { list: Array<{ to: string; linkName: string }> }) {
  return (
    <Ul>
      {props.list.map((list) => (
        <li>
          <ReLink {...props} to={list.to}>
            {list.linkName}
          </ReLink>
        </li>
      ))}
    </Ul>
  )
}

export default Pagenation

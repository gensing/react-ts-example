import React from 'react'
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components'
import { reset } from 'styled-reset'

declare module 'styled-components' {
  // export interface  {}
  // export type
  export interface DefaultTheme {
    mainBackground: string
    title: string
    primaryText: string
    secondaryText: string
    disable: string
    border: string
    divider: string
    background: string
    tableHeader: string
  }
}

const light: DefaultTheme = {
  mainBackground: `#fff`,
  title: `rgba(0, 0, 0, 0.85)`,
  primaryText: `rgba(0, 0, 0, 0.75)`,
  secondaryText: `rgba(0, 0, 0, 0.45)`,
  disable: `rgba(0, 0, 0, 0.25)`,
  border: `rgba(0, 0, 0, 0.15)`,
  divider: `rgba(0, 0, 0, 0.06)`,
  background: `rgba(0, 0, 0, 0.04)`,
  tableHeader: `rgba(0, 0, 0, 0.02)`,
}

const dark: DefaultTheme = {
  mainBackground: `#333`,
  title: `rgba(255,255,255,0.85)`,
  primaryText: `rgba(255,255,255,0.65)`,
  secondaryText: `rgba(255,255,255,0.45)`,
  disable: `rgba(255,255,255,0.25)`,
  border: `rgba(255,255,255,0.15)`,
  divider: `rgba(255,255,255,0.06)`,
  background: `rgba(255,255,255,0.04)`,
  tableHeader: `rgba(255,255,255,0.02)`,
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 그밖에 글로벌 스타일 작성하기  */
`
export const StyleProvider: React.FC<{}> = (props) => {
  const selectTheme = light

  return (
    <ThemeProvider theme={selectTheme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}

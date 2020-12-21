import styled from 'styled-components'
//https://styled-components.com/docs/tooling
//https://velog.io/@hoi/Styled-components-ThemeProvider%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95
const ReDiv = styled.div.attrs((props: any = { className: 'default' }) => ({
  className: `div_${props.className}`,
}))`
  margin: 0 auto;
  width: 500px;
`

export default ReDiv

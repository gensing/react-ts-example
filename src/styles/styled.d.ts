import 'styled-components'

declare module 'styled-components' {

    // export interface  {}    
    // export type 

    // ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성
    export interface DefaultTheme {
        mainBackground: string;
        title: string;
        primaryText: string;
        secondaryText: string;
        disable: string;
        border: string;
        divider: string;
        background: string;
        tableHeader: string;
    }
}
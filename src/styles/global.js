import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
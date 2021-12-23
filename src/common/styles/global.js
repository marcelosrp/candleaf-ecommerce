import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --azul_escuro: #0B254B;
    --branco: #fff;
    --cinza: #5E6E89;
    --cinza2: #ececec;
    --preto: #272727;
    --preto2: #1D293F;
    --verde: #56B280;
    --tipografia: #1D252C;

    --container: 111rem;

    --small: 1.6rem;
    --medium: 3.2rem;
    --large: 4.8rem;

    --light: 300;
    --normal: 400;
    --semi: 600;
    --bold: 700;
    
    --primary-font: 'Roboto', sans-serif;
    --secondary-font: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: var(--primary-font);
    font-size: 16px;
  }

  .defaultButton {
    background-color: var(--verde);
    border-radius: 4px;
    border: none;
    color: var(--branco);
    cursor: pointer;
    font-size: 2rem;
    font-weight: var(--normal);
    padding: 1rem 4rem;
    position: relative;
    text-decoration: none;
    z-index: 1;

    &::before {
      background-color: #7afdb6;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 0;
      transition: width .3s ease;
      z-index: -1;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }

    &.disabled, &:disabled {
      background-color: var(--cinza);
      cursor: auto;
      pointer-events: none;
    }
  }
`

export default GlobalStyles

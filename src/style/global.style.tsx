import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 2px grey;
    color: black;
    margin: 0;
    background-position: center;
    transition: background 0.8s;
    &:focus {
      outline: none;
    }
    &:active {
      background-color: rgb(224, 225, 226);
      background-size: 100%;
      transition: background 0s;
    }
  }
`;

export { GlobalStyle };

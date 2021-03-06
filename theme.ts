import { createGlobalStyle, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    primary: "#fe0000",
  },
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  a {
    color: #555;
    &:link {
      color: #555;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  article {
    img {
      width: 100%;
    }
  }

  .navbar {
    background-color: #fff;
    @media (min-width: 1200px) {
      justify-content: space-around;
    }
  }

  .navbar-collapse {
    flex-grow: unset;
  }

  .navbar-light .navbar-nav .nav-link {
    color: #555;
  }
`

export default theme

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
  }
   :root {
    --mainColor: #6a00f5;
    --cream: #f8e8d0;
    --lightBrown: #a86842;
    --brick: #934539;
    --green: #4b836a;
    --navy: #253141;
  } 
  ul {
    list-style: none;
  }
  main {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  .app {
    width: 1200px;
  }

    `;

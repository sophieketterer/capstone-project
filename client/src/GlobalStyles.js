import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: Assistant;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  text-align: center;
}
`;

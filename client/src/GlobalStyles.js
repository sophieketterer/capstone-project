import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  xmargin: 0;
}
body {
  font-family: Assistant;
  display: flex;
  flex-direction: column;
  align-items: left;
  xmargin: 2rem;
  text-align: ;
}
h2 {
  font-weight: 700;
  color: #040336;
  font-size: 3rem;
  margin-top: 3.3rem;
  margin-bottom: 2rem;
  text-align: center;
}
h3 {
  font-weight: 600;
  color: #040336;
  font-size: 2rem;
  margin-left: 1.125rem; 
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  text-align: left;
}
img {
  width: 6.25rem;
  margin-left: 1.125rem;
  margin-bottom: 0.3rem;

}
`;

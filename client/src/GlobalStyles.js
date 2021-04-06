import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;

}
body {
  font-family: Assistant;
  display: flex;
  flex-direction: colomn;
  margin: 0rem;
  
  
}
h2 {
  font-weight: 700;
  color: #040336;
  font-size: 3rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding-left: 1.4rem;
  text-align: center;
}
h3 {
  font-weight: 500;
  color: #040336;
  font-size: 2rem;
  margin-left: 1.125rem; 
  margin-top: 1.5rem;
  margin-bottom: 0.7rem;
  text-align: left;
}
img {
  width: 6.25rem;
  margin-left: 1.125rem;
  margin-bottom: 0.3rem;
}
.nav {
color: #C4D1D9;
}
`;

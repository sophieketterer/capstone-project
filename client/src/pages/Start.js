import { Link } from "react-router-dom";
import styled from "styled-components";

//import StartPicture from "/images/Start.svg";
//import styled from 'styled-components';

export default function Start() {
  return (
    <Main>
      <h1>It's reif</h1>
      <p>Test</p>
      <Link to="/all">gute Reise </Link>
    </Main>
  );
}

//const XX = styled(Link)`
//background: url (${StartBild})

const Main = styled.main`
background:
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  max-width: 600px;
  h1 {
    font-size: 30rem;
    padding: 2rem;
    text-align: center;
  }
`;

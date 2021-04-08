import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import StartBild from "../images/Apfel.jpg";

export default function Start({ resetAllFilters }) {
  useEffect(() => {
    resetAllFilters();
  }, [resetAllFilters]);

  return (
    <Main>
      <h1>It's reif</h1>
      <WrapLogo>
        <LogoR>R</LogoR>
        <LogoEI>EI</LogoEI>
        <LogoF>F</LogoF>
        <LogoL>L</LogoL>
        <LogoI>I</LogoI>
        <LogoC>C</LogoC>
        <LogoH>H</LogoH>
        <nav>
          <NavLinkStyled to="/all">
            <IconRight src="/images/Pfeil-right-w.svg" alt="" />
          </NavLinkStyled>
        </nav>
      </WrapLogo>
      <Subline>saisonkalender</Subline>
    </Main>
  );
}

//const XX = styled(Link)`
//background: url (${StartBild})

const Main = styled.main`
  background-image: url(${StartBild});
  background-repeat: no-repeat;
  background-size: 700px;
  xbackground-position: left;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  h1 {
    margin: 0;
    color: transparent;
    font-size: 5rem;
    text-align: center;
  }
  .img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;
const WrapLogo = styled.section`
  display: flex;
  color: white;
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
  margin-top: 20rem;
  margin-left: 5.5rem;
`;
const LogoR = styled.p`
  font-weight: 800;
`;

const LogoEI = styled.p`
  font-weight: 700;
`;

const LogoF = styled.p`
  font-weight: 600;
`;

const LogoL = styled.p`
  font-weight: 500;
`;

const LogoI = styled.p`
  font-weight: 400;
`;

const LogoC = styled.p`
  font-weight: 300;
`;

const LogoH = styled.p`
  font-weight: 50;
`;

const NavLinkStyled = styled(NavLink)`
  cursor: pointer;
`;

const IconRight = styled.img`
  width: 1rem;
  margin-top: 3.45rem;
  margin-left: 0.8rem;
`;

const Subline = styled.p`
  display: flex;
  align-items: center;
  margin-left: 8.5rem;
  margin-top: -2.5rem;
  color: white;
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
`;

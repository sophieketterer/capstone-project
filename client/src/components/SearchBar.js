import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LupeIcon } from "../images/Lupe.svg";
import { ReactComponent as IconBackIcon } from "../images/Reiflich_Pfeil.svg";

export default function SearchBar({
  veggiesToRender,
  fruitiesToRender,
  saladsToRender,
  setVeggiesToRender,
  setFruitiesToRender,
  setSaladsToRender,
}) {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [inputField, setInputField] = useState("");
  const [searchSolution, setSearchSolution] = useState([]);

  function handleKey(event) {
    if (event.key === "Enter") {
      const veggies = veggiesToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });

      setVeggiesToRender(veggies);

      const fruities = fruitiesToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });

      setFruitiesToRender(fruities);

      const salads = saladsToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setSaladsToRender(salads);
    }
  }

  function handleChange(event) {
    setInputField(event.target.value);
    if (event.target.value) {
      const veggies = veggiesToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      });

      const fruities = fruitiesToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      });

      const salads = saladsToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      });

      const solution = [...salads, ...fruities, ...veggies];
      setSearchSolution(solution);
    } else {
      setSearchSolution([]);
    }
  }

  function handleSearchClick(event) {
    setInputField(event.target.innerText);
    setSearchSolution([]);
    document.getElementById("inputField").focus();
  }

  function searchBarOpen() {
    setSearchBarIsOpen(!searchBarIsOpen);
    setInputField("");
    setSearchSolution([]);
  }
  return (
    <WrapHeader>
      <nav>
        <NavLinkStyled to="/">
          <IconBack src={IconBackIcon}></IconBack>
        </NavLinkStyled>
      </nav>
      <WrapSearchBar>
        {searchBarIsOpen && (
          <WrapInputField>
            <InputField
              id="inputField"
              onKeyDown={handleKey}
              onChange={handleChange}
              value={inputField}
              type="search"
              placeholder="Suche"
            />
            {searchSolution && (
              <WrapSearchHelper hidden={searchSolution.length === 0}>
                {searchSolution.map((solution) => {
                  return (
                    <SearchHelp onClick={handleSearchClick} key={solution.name}>
                      {solution.name}
                    </SearchHelp>
                  );
                })}
              </WrapSearchHelper>
            )}
          </WrapInputField>
        )}
        {/* <Lupe  src={LupeIcon} alt="" /> */}
        <Lupe>
          <LupeIcon onClick={searchBarOpen} />
        </Lupe>
      </WrapSearchBar>
    </WrapHeader>
  );
}
const WrapHeader = styled.section`
  height: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  cursor: pointer;
`;
const IconBack = styled(IconBackIcon)`
  width: 5.6rem;
  margin-left: 1rem;
  margin-top: 1.2rem;
`;
const WrapSearchBar = styled.div`
  margin-right: 1rem;
  margin-top: 0.25rem;
  display: flex;
  flex-wrap: wrap;
`;
const WrapInputField = styled.div`
  border-radius: 0.3rem;
  box-shadow: 1px 4px 9px #3cc6c680;
  position: relative;
  max-width: 12rem;
`;

const Lupe = styled.span`
  width: 1.1rem;
  margin-top: 1.1rem;
  margin-left: 0.45rem;
  cursor: pointer;
`;

const InputField = styled.input`
  border-style: none;
  outline: none;
  border-radius: 0.3rem;
  max-width: 12rem;
  height: 2.5rem;
  padding: 1rem;
  font-weight: 200;
  font-size: 1.3rem;
  color: #040336;

  &::placeholder {
    margin-top: 10rem;
    font-size: 0.8rem;
    color: #c4d1d9;
  }
`;

const WrapSearchHelper = styled.div`
  margin: -0.15rem 0;
  width: 100%;
  max-height: 7rem;
  position: absolute;
  background-color: white;
  border-radius: 0 0 0.3rem 0.3rem;
  box-shadow: 1px 4px 9px #3cc6c680;
  overflow: auto;
  padding: 0.25rem;
  ${(prop) => prop.hidden && "display: none"};
`;
const SearchHelp = styled.p`
  margin: 0.25rem;
  padding: 0 0.6rem;
  height: 1rem;
  font-size: 0.7rem;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    background-color: #040336;
    border-radius: 0.15rem;
    opacity: 0.8;
    color: white;
    margin: 0.25rem;
    padding: 0 0.6rem;
    box-shadow: 0px 3px 6px #c4d1d9;
  }
`;

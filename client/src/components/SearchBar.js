import styled from "styled-components";
import { useState } from "react";

export default function SearchBar({
  veggiesToRender,
  fruitiesToRender,
  saladsToRender,
}) {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [inputField, setInputField] = useState("");
  const [searchSolution, setSearchSolution] = useState([]);

  const allToRender = [
    ...veggiesToRender,
    ...fruitiesToRender,
    ...saladsToRender,
  ];

  function handleKey(event) {
    if (event.key === "Enter") {
      const solution = allToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      console.log(solution, 111);
    }
  }

  function handleChange(event) {
    setInputField(event.target.value);
    if (event.target.value) {
      const solution = allToRender.filter((value) => {
        return value.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setSearchSolution(solution);
    } else {
      setSearchSolution([]);
    }
  }

  console.log(searchSolution, 555);
  return (
    <div>
      <Lupe
        onClick={() => setSearchBarIsOpen(!searchBarIsOpen)}
        src="/images/Lupe.svg"
        alt=""
      />

      {searchBarIsOpen && (
        <>
          <InputField
            onKeyDown={handleKey}
            onChange={handleChange}
            value={inputField}
            type="search"
            placeholder="Suche"
          />
          {searchSolution &&
            searchSolution.map((solution) => {
              return <p key={solution.name}>{solution.name}</p>;
            })}
        </>
      )}
    </div>
  );
}

const Lupe = styled.img`
  display: flex;
  flex-directon: column;
  justify-content: auto;
  margin: -1.8rem 1.5rem 0.8rem auto;
  margin-bottom: 0.8rem;
  width: 1.1rem;
  cursor: pointer;

  &:hover {
    fill: red;
  }
`;

const InputField = styled.input`
  border-style: none;
  outline: none;
  width: 12rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  box-shadow: 1px 4px 9px #3cc6c680;
  padding: 1rem;
  font-weight: 300;
  font-size: 1.3rem;
  color: #040336;
  display: flex;
  flex-directon: column;
  justify-content: auto;
  margin: -2.6rem 3.1rem 0.5rem auto;
  margin-bottom: 0.1rem;
  &::placeholder {
    font-size: 0.8rem;
    color: #c4d1d9;
  }
`;

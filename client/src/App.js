import { useState } from "react";
import styled from "styled-components";

import { veggies } from "./fixtures/AllVeggies.js";
import { fruities } from "./fixtures/AllFruities.js";
import { salads } from "./fixtures/AllSalads.js";
import months from "./fixtures/months.js";
import PictureCard from "./components/Card.js";
//import Button from "Button.js";

function App() {
  console.log(veggies, 1);
  console.log(fruities, 2);
  console.log(salads, 3);

  // UseState für Veggies - month - fruities - salads
  const [veggiesToRender, setVeggiesToRender] = useState(veggies);
  const [fruitiesToRender, setFruitiesToRender] = useState(fruities);
  const [saladsToRender, setSaladsToRender] = useState(salads);
  const [month, setMonth] = useState("Alle");

  // Filter Function für Veggies
  function filterVeggies(month) {
    const filterVeggies = veggies.filter((veggie) =>
      veggie.months.includes(month)
    );
    setVeggiesToRender(filterVeggies);
  }

  // Filter Function für Salads
  function filterSalads(month) {
    const filterSalads = salads.filter((salad) => salad.months.includes(month));
    setSaladsToRender(filterSalads);
  }

  // Filter Function für Fruties
  function filterFruities(month) {
    const filterFruities = fruities.filter((fruity) =>
      fruity.months.includes(month)
    );
    setFruitiesToRender(filterFruities);

    // Filter Function für Month
    const filterMonth = months.find((mon) => mon.number === month);
    setMonth(filterMonth.name);
  }

  // Function um alles anzeigen zu lassen
  function resetAllFilters() {
    setVeggiesToRender(veggies);
    setFruitiesToRender(fruities);
    setSaladsToRender(salads);
    setMonth("Alle");
  }

  function filterAll(month) {
    filterVeggies(month);
    filterFruities(month);
    filterSalads(month);
  }

  return (
    <div>
      <main>
        <WrapHeader>
          <IconLeftRight src="/images/Pfeil-left.svg"></IconLeftRight>
          <h2>{month}</h2>
          <IconLeftRight src="/images/Pfeil-right.svg"></IconLeftRight>
        </WrapHeader>
        <WrapButton>
          <Button
            className={month === "Januar" ? "active" : ""}
            onClick={() => filterAll(1)}
          >
            Jan
          </Button>
          <Button
            className={month === "Februar" ? "active" : ""}
            onClick={() => filterAll(2)}
          >
            Feb
          </Button>
          <Button
            className={month === "März" ? "active" : ""}
            onClick={() => filterAll(3)}
          >
            Mär
          </Button>
          <Button
            className={month === "April" ? "active" : ""}
            onClick={() => filterAll(4)}
          >
            Apr
          </Button>
          <Button
            className={month === "Mai" ? "active" : ""}
            onClick={() => filterAll(5)}
          >
            Mai
          </Button>
          <Button
            className={month === "Juni" ? "active" : ""}
            onClick={() => filterAll(6)}
          >
            Jun
          </Button>
          <Button
            className={month === "Juli" ? "active" : ""}
            onClick={() => filterAll(7)}
          >
            Jul
          </Button>
          <Button
            className={month === "August" ? "active" : ""}
            onClick={() => filterAll(8)}
          >
            Aug
          </Button>
          <Button
            className={month === "September" ? "active" : ""}
            onClick={() => filterAll(9)}
          >
            Sep
          </Button>
          <Button
            className={month === "Oktober" ? "active" : ""}
            onClick={() => filterAll(10)}
          >
            Okt
          </Button>
          <Button
            className={month === "November" ? "active" : ""}
            onClick={() => filterAll(11)}
          >
            Nov
          </Button>
          <Button
            className={month === "Dezember" ? "active" : ""}
            onClick={() => filterAll(12)}
          >
            Dez
          </Button>
          <Button
            className={month === "Alle" ? "active" : ""}
            onClick={resetAllFilters}
          >
            Alle
          </Button>
        </WrapButton>
        <h3>Obst</h3>
        <WrapContainer>
          {fruitiesToRender.map((fruty, index) => (
            <PictureCard
              key={index}
              imageUrl={fruty.imageUrl}
              name={fruty.name}
            />
          ))}
        </WrapContainer>
        <h3>Gemüse</h3>
        <WrapContainer>
          {veggiesToRender.map((veggie, index) => (
            <PictureCard
              key={index}
              imageUrl={veggie.imageUrl}
              name={veggie.name}
            />
          ))}
        </WrapContainer>
        <h3>Salat</h3>
        <WrapContainer>
          {saladsToRender.map((salads, index) => (
            <PictureCard
              key={index}
              imageUrl={salads.imageUrl}
              name={salads.name}
            />
          ))}
        </WrapContainer>
      </main>
    </div>
  );
}

export default App;

const WrapContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;
const WrapHeader = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const WrapButton = styled.section`
  margin: auto;
  text-align: center;
`;
const IconLeftRight = styled.img`
  width: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  xtext-align: auto;
  height: 3rem;
  width: 1.7rem;
  border: none;
  color: #c4d1d9;
  background-color: #f2f7fb;
  font-size: 0.7rem;
  font-weight: semi-bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 0;
  cursor: pointer;

  &:first-child {
    border-radius: 0.3rem 0rem 0rem 0.3rem;
  }

  &:last-child {
    border-radius: 0rem 0.3rem 0.3rem 0rem;
  }

  &:hover {
    background-color: #040336;
    opacity: 0.87;
    color: white;
    border-radius: 0.3rem;
    height: 4.5rem;
    width: 1.7rem;
    margin: 0rem;
    box-shadow: 0px 3px 6px rgb(4, 0, 41);
  }
  &.active {
    background-color: #040336;
    color: white;
    border-radius: 0.3rem;
    height: 4.5rem;
    width: 1.7rem;
    margin: 0rem;
    box-shadow: 0px 3px 6px rgb(4, 0, 41);
    transition: ease background-color 300ms;
  }
`;

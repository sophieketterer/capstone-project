import { veggies } from "./fixtures/AllVeggies.js";
import { fruities } from "./fixtures/AllFruities.js";
import { salads } from "./fixtures/AllSalads.js";
import months from "./fixtures/months.js";
import PictureCard from "./components/Card.js";

import { useState } from "react";

import styled from "styled-components";
//import Button from "Button.js";

function App() {
  console.log(veggies, 1);
  console.log(fruities, 2);
  console.log(salads, 3);

  // UseState für Veggies - month - fruties - salads
  const [veggiesToRender, setVeggiesToRender] = useState(veggies);
  const [frutiesToRender, setFruitiesToRender] = useState(fruities);
  const [saladsToRender, setSaladsToRender] = useState(salads);
  const [month, setMonth] = useState("Gesamtes Jahr");

  // Filter Function für Veggies
  function filterVeggies(month) {
    const filterVeggies = veggies.filter((veggie) =>
      veggie.months.includes(month)
    );
    setVeggiesToRender(filterVeggies);
  }

  // Filter Function für Salads
  function filterSalads(month) {
    const filterSalads = salads.filter((salads) =>
      salads.months.includes(month)
    );
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
  function resetAll() {
    setVeggiesToRender(veggies);
    setFruitiesToRender(fruities);
    setSaladsToRender(salads);
    setMonth("Gesamtes Jahr");
  }

  function filterAll(month) {
    filterVeggies(month);
    filterFruities(month);
    filterSalads(month);
  }

  return (
    <div>
      <main>
        <h2>{month}</h2>
        <WrapButton>
          <Button onClick={() => filterAll(1)}>Jan</Button>
          <Button onClick={() => filterAll(2)}>Feb</Button>
          <Button onClick={() => filterAll(3)}>Mär</Button>
          <Button onClick={() => filterAll(4)}>Apr</Button>
          <Button onClick={() => filterAll(5)}>Mai</Button>
          <Button onClick={() => filterAll(6)}>Jun</Button>
          <Button onClick={() => filterAll(7)}>Jul</Button>
          <Button onClick={() => filterAll(8)}>Aug</Button>
          <Button onClick={() => filterAll(9)}>Sep</Button>
          <Button onClick={() => filterAll(10)}>Okt</Button>
          <Button onClick={() => filterAll(11)}>Nov</Button>
          <Button onClick={() => filterAll(12)}>Dez</Button>
          <Button onClick={resetAll}>Alle</Button>
        </WrapButton>
        <h3>Obst</h3>
        <WrapContainer>
          {frutiesToRender.map((fruty, index) => (
            <PictureCard key={index} imageUrl={fruty.imageUrl} />
          ))}
        </WrapContainer>
        <h3>Gemüse</h3>
        <WrapContainer>
          {veggiesToRender.map((veggie, index) => (
            <PictureCard key={index} imageUrl={veggie.imageUrl} />
          ))}
        </WrapContainer>
        <h3>Salat</h3>
        <WrapContainer>
          {saladsToRender.map((salads, index) => (
            <PictureCard key={index} imageUrl={salads.imageUrl} />
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
`;

const WrapButton = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  xdisplay: flex;
  xflex-direction: row;
  xalign-items: center;
  text-align: center;
  height: 3rem;
  xwidth: 1.2rem;
  border: none;
  color: #c4d1d9;
  background-color: #f2f7fb;
  font-size: 1rem;
  font-weight: semi-bold;
  xfont-color: #c4d1d9;
  margin-top: 2rem;
  xmargin: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #040336;
    color: (255, 255, 255);
    border-radius: 0.3rem;
    height: 5rem;
    box-shadow: 0px 2px 2px (6, 0, 42);
  }
  &:active {
    background-color: #040336;
    border-radius: 0.3rem;
    height: 5rem;
    box-shadow: #040336;
    transition: ease background-color 250ms;
  }
`;

import { veggies } from "./fixtures/AllVeggies.js";
import { useState } from "react";
import VeggieCard from "./components/Card.js";
import styled from "styled-components";
import months from "./fixtures/months.js";
//import Button from "Button.js";

function App() {
  console.log(veggies);

  //const maiVeggie = veggies.filter((veggie) => veggie.months.includes(5)); //=== month;
  const [veggiesToRender, setVeggiesToRender] = useState(veggies);
  const [month, setMonth] = useState("All");

  function filterVeggies(month) {
    const filterVeggies = veggies.filter((veggie) =>
      veggie.months.includes(month)
    );
    setVeggiesToRender(filterVeggies);

    const filterMonth = months.find((mon) => mon.number === month);
    setMonth(filterMonth.name);
  }

  function resetAll() {
    setVeggiesToRender(veggies);
    setMonth("All");
  }

  return (
    <div>
      <main>
        <h2>{month}</h2>
        <Button onClick={() => filterVeggies(1)}>Jan</Button>
        <Button onClick={() => filterVeggies(2)}>Feb</Button>
        <Button onClick={() => filterVeggies(3)}>Mär</Button>
        <Button onClick={() => filterVeggies(4)}>Apr</Button>
        <Button onClick={() => filterVeggies(5)}>Mai</Button>
        <Button onClick={() => filterVeggies(6)}>Jun</Button>
        <Button onClick={() => filterVeggies(7)}>Jul</Button>
        <Button onClick={() => filterVeggies(8)}>Aug</Button>
        <Button onClick={() => filterVeggies(9)}>Sep</Button>
        <Button onClick={() => filterVeggies(10)}>Okt</Button>
        <Button onClick={() => filterVeggies(11)}>Nov</Button>
        <Button onClick={() => filterVeggies(12)}>Dez</Button>
        <Button onClick={resetAll}>Alle</Button>
        <h3>Gemüse</h3>
        <WrappContainer>
          {veggiesToRender.map((veggie, index) => (
            <VeggieCard key={index} imageUrl={veggie.imageUrl} />
          ))}
        </WrappContainer>
        <h3>Salat</h3>
        <h3>Obst</h3>
      </main>
    </div>
  );
}

export default App;

const WrappContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  xdisplay: flex;
  xflex-direction: row;
  align-items: center;
  text-align: center;
  height: 4rem;
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
    height: 6rem;
    box-shadow: 0px 2px 2px (6, 0, 42);
  }
  &:active {
    background-color: #040336;
    border-radius: 0.3rem;
    height: 6rem;
    box-shadow: #040336;
    transition: ease background-color 250ms;
  }
`;

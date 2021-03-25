import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { veggies } from "./fixtures/AllVeggies.js";
import { fruities } from "./fixtures/AllFruities.js";
import { salads } from "./fixtures/AllSalads.js";
import months from "./fixtures/months.js";
import PictureCard from "./components/Card.js";
import VeggiesModal from "./components/VeggiesModal.js";
import MonthButton from "./components/Button.js";
import Start from "./pages/Start.js";

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [veggieToShow, setVeggieToShow] = useState({});

  function showDetails(veggie) {
    setVeggieToShow(veggie);
    setModalIsOpen(true);
  }
  // Modal open/close
  function closeModal() {
    setModalIsOpen(false);
  }

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
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
      </Switch>

      <Switch>
        <Route path="/all">
          <div>
            <main>
              <WrapHeader>
                <IconLeftRight src="/images/Pfeil-left.svg"></IconLeftRight>
                <h2>{month}</h2>
                <IconLeftRight src="/images/Pfeil-right.svg"></IconLeftRight>
              </WrapHeader>

              <MonthButton
                month={month}
                filterAll={filterAll}
                resetAllFilters={resetAllFilters}
              />

              <h3>Obst</h3>
              <WrapContainer>
                {fruitiesToRender.map((fruty, index) => (
                  <PictureCard
                    key={index}
                    imageUrl={fruty.imageUrl}
                    name={fruty.name}
                    clickHandler={() => showDetails(fruty)}
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
                    clickHandler={() => showDetails(veggie)}
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
                    clickHandler={() => showDetails(salads)}
                  />
                ))}
              </WrapContainer>

              <VeggiesModal
                isOpen={modalIsOpen}
                veggie={veggieToShow}
                closeModal={closeModal}
              />
            </main>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const WrapContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  cursor: pointer;
`;

const WrapHeader = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const IconLeftRight = styled.img`
  width: 1rem;
  margin-top: 2rem;
`;

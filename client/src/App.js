import { veggies } from "./fixtures/AllVeggies.js";
import VeggieCard from "./components/Card.js";
import styled from "styled-components";

function App() {
  console.log(veggies);
  const maiVeggie = veggies.filter((veggie) => veggie.months.includes(5));

  return (
    <div>
      <main>
        <h2>Mai</h2>
        <h3>Gemüse</h3>
        <WrappContainer>
          {maiVeggie.map((veggie, index) => (
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

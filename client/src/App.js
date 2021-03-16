import { veggies } from "./fixtures/Veggie.js";
import VeggieCard from "./components/Card.js";
import styled from "styled-components";

function App() {
  console.log(veggies);
  const maiVeggie = veggies.filter((veggie) => veggie.months.includes(5));

  return (
    <div>
      <main>
        <WrappContainer>
          {maiVeggie.map((veggie, index) => (
            <VeggieCard key={index} imageUrl={veggie.imageUrl} />
          ))}
        </WrappContainer>
      </main>
    </div>
  );
}

export default App;

const WrappContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

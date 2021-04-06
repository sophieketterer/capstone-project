import styled from "styled-components";

export default function MonthButton({ filterAll, resetAllFilters, month }) {
  return (
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
  );
}

const WrapButton = styled.section`
  margin: auto;
  text-align: center;
`;

const Button = styled.button`
  xtext-align: auto;
  height: 2.5rem;
  width: 1.7rem;
  border: none;
  color: #c4d1d9;
  background-color: #f2f7fb;
  font-size: 0.7rem;
  font-weight: semi-bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0;
  cursor: pointer;

  &:first-child {
    border-radius: 0.3rem 0rem 0rem 0.3rem;
  }

  &:last-child {
    border-radius: 0rem 0.3rem 0.3rem 0rem;
  }

  &:hover {
    background-color: none;
    opacity: 0.8;
    color: #040336;
    border-radius: 0.3rem;
    height: 3.5rem;
    width: 1.7rem;
    margin: 0rem;
    box-shadow: 0px 3px 6px #c4d1d9;
  }
  &.active {
    background-color: #040336;
    color: white;
    border-radius: 0.3rem;
    height: 3.5rem;
    width: 1.7rem;
    margin: 0rem;
    position: relative;
    box-shadow: 0px 3px 6px rgb(4, 0, 41);
    transition: ease background-color 300ms;
  }
`;

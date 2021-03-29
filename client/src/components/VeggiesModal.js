import Modal from "react-modal";
import styled from "styled-components";
import { ReactComponent as DotSvg } from "../images/Dot.svg";

Modal.setAppElement("#root");
//Modal.defaultStyles.overlay.backgroundColor = "#ffffffe6";
//Modal.defaultStyles.overlay.border = "none";

export default function VeggiesModal({ veggie, isOpen, closeModal }) {
  console.log(veggie);
  return (
    <WrapModal>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <CloseButton onClick={closeModal} src="/images/Close.svg"></CloseButton>
        <Picture src={veggie.imageUrl} alt={veggie.name} />
        <MonthGrid>
          <Dot highlighted={veggie?.months?.includes(1)} />
          <Dot highlighted={veggie?.months?.includes(2)} />
          <Dot highlighted={veggie?.months?.includes(3)} />
          <Dot highlighted={veggie?.months?.includes(4)} />
          <Dot highlighted={veggie?.months?.includes(5)} />
          <Dot highlighted={veggie?.months?.includes(6)} />
          <Dot highlighted={veggie?.months?.includes(7)} />
          <Dot highlighted={veggie?.months?.includes(8)} />
          <Dot highlighted={veggie?.months?.includes(9)} />
          <Dot highlighted={veggie?.months?.includes(10)} />
          <Dot highlighted={veggie?.months?.includes(11)} />
          <Dot highlighted={veggie?.months?.includes(12)} />

          <MonthInitial highlighted={veggie?.months?.includes(1)}>
            J
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(2)}>
            F
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(3)}>
            M
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(4)}>
            A
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(5)}>
            M
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(6)}>
            J
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(7)}>
            J
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(8)}>
            A
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(9)}>
            S
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(10)}>
            O
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(11)}>
            N
          </MonthInitial>
          <MonthInitial highlighted={veggie?.months?.includes(12)}>
            D
          </MonthInitial>
        </MonthGrid>

        <Head>{veggie.name}</Head>
        <InfoText>{veggie.text}</InfoText>
      </Modal>
    </WrapModal>
  );
}
const MonthGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  margin-top: 1rem;
`;

const Dot = styled(DotSvg)`
  fill: ${(props) => (props.highlighted ? "#040336" : "white")};
  width: 0.3rem;
  margin: 0;
  align-self: end;
`;
const MonthInitial = styled.p`
  color: ${(props) => (props.highlighted ? "#040336" : "#c4d1d9")};
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.3rem;
`;

const WrapModal = styled.section`
  display: flex;
  flex-directon: column;
  justify-content: center;
  cursor: pointer;
  hight: auto;
  margin: 0;
`;

const CloseButton = styled.img`
  display: flex;
  flex-directon: column;
  justify-content: auto;
  margin: 0 0 1rem auto;
  width: 1.5rem;
  cursor: pointer;
`;

const Picture = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.5rem;
  margin: auto;
  margin-bottom: 1.5rem;
`;

const Head = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 1.9rem;
  margin-bottom: 1rem;
  color: #040336;
`;

const InfoText = styled.p`
  color: #676666;
  text-align: left;
  margin-bottom: 2rem;
  margin: 0;
  padding: 0.3rem;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5rem;
`;

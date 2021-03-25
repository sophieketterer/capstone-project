import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");
//Modal.defaultStyles.overlay.backgroundColor = "#ffffffe6";
//Modal.defaultStyles.overlay.border = "none";

export default function VeggiesModal({ veggie, isOpen, closeModal }) {
  return (
    <WrapModal>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <CloseButton onClick={closeModal} src="/images/Close.svg"></CloseButton>
        <Picture src={veggie.imageUrl} alt={veggie.name} />
        <WrapDot>
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
          <Dot src="/images/Dot.svg" />
        </WrapDot>

        <WrapInitial>
          <MonthInitial>J</MonthInitial>
          <MonthInitial>F</MonthInitial>
          <MonthInitial>M</MonthInitial>
          <MonthInitial>A</MonthInitial>
          <MonthInitial>M</MonthInitial>
          <MonthInitial>J</MonthInitial>
          <MonthInitial>J</MonthInitial>
          <MonthInitial>A</MonthInitial>
          <MonthInitial>S</MonthInitial>
          <MonthInitial>O</MonthInitial>
          <MonthInitial>N</MonthInitial>
          <MonthInitial>D</MonthInitial>
        </WrapInitial>

        <Head>{veggie.name}</Head>
        <InfoText>{veggie.text}</InfoText>
      </Modal>
    </WrapModal>
  );
}
const WrapDot = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 1.5rem;
`;
const Dot = styled.img`
  width: 0.25rem;
`;
const MonthInitial = styled.p`
  color: #c4d1d9;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.3rem;
`;
const WrapInitial = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.6rem;
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
  margin-bottom: 3rem;
`;

const Head = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 2.9rem;
  margin-bottom: 0.5rem;
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

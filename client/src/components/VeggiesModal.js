import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "#ffffffe6";
Modal.defaultStyles.overlay.border = "none";

export default function VeggiesModal({ veggie, isOpen, closeModal }) {
  return (
    <WrapModal>
      <StyledModal isOpen={isOpen} onRequestClose={closeModal}>
        <Picture src={veggie.imageUrl} alt={veggie.name} />
        <h3>{veggie.name}</h3>
        <InfoText>{veggie.text}</InfoText>
      </StyledModal>
    </WrapModal>
  );
}

const WrapModal = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  cursor: pointer;
  hight: 25.75rem;
`;

const InfoText = styled.p`
  color: #676666;
  display: flex;
  justify-content: left;
  align-items: left;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5rem;
`;
const StyledModal = styled(Modal)`
  background-color: #ffffffe6;
  margin: 2.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  margin: 2rem;
  padding; 2rem;
  box-shadow: 2px 2px 15px #3CC6C680;
`;

const Picture = styled.img`
  width: 18.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem 0.5rem 0rem;
`;

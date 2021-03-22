import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

export default function VeggiesModal({ veggie, isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <img src={veggie.imageUrl} alt={veggie.name} />
      <h3>{veggie.name}</h3>
    </Modal>
  );
}

import Modal from "react-overlays/Dropdown";

export default function Modal({ imageUrl, name }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

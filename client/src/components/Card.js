import styled from "styled-components";

export default function PictureCard({ imageUrl, name, clickHandler }) {
  return (
    <div>
      <PictureSmall onClick={clickHandler} src={imageUrl} alt={name} />
    </div>
  );
}

const PictureSmall = styled.img`
  &:hover {
    border-radius: 4rem;
    box-shadow: 1px 4px 9px #67666666;
  }
`;

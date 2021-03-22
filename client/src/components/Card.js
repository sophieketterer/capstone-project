export default function PictureCard({ imageUrl, name, clickHandler }) {
  return (
    <div>
      <img onClick={clickHandler} src={imageUrl} alt={name} />
    </div>
  );
}

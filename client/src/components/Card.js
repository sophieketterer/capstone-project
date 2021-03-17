export default function PictureCard({ imageUrl, name }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

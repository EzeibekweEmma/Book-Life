import { useOutletContext } from "react-router-dom";

const Photo = () => {
  const { bookId } = useOutletContext();

  const { image } = bookId;

  return (
    <section className="mt-4">
      <img src={image} alt={image} height={80} width={90} />
    </section>
  );
};
export default Photo;
